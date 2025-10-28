import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { SnackbarProvider } from "notistack";
import Section from "./components/Albumcard/Section";
import Hero from "./components/Herocomp/Hero";
import SongFilterSection from "./components/Albumcard/SongFiterSection";
import SpotifyLogin from "./components/SpotifyLogin";
import SpotifyCallback from "./components/SpotifyCallback";
import { clientId, redirectUri } from "./config";

function App() {
  const [token, setToken] = useState(localStorage.getItem("spotify_token"));

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("Redirect URI being used:", redirectUri);
    }

    // Handle /callback route manually (Spotify redirects here with "code")
    if (window.location.pathname === "/callback") {
      const code = new URLSearchParams(window.location.search).get("code");
      const verifier = localStorage.getItem("code_verifier");

      if (code && verifier) {
        // Exchange authorization code for access token
        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: clientId,
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            code_verifier: verifier,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("spotify_token", data.access_token);
              setToken(data.access_token);
              window.history.pushState({}, "", "/"); // Go back to main page
            } else {
              console.error("Spotify token response:", data);
            }
          })
          .catch((err) => console.error("Token request failed:", err));
      }
    }
  }, []);

  // If user not logged in → show login button
  if (!token) {
    return <SpotifyLogin />;
  }

  // If logged in → show your main UI
  return (
    <div className="App">
      <header className="App-header">
        <SnackbarProvider>
          <Navbar />
          <Hero />
          <div>
            <Section
              title="Top Album"
              // apiUrl="https://api.spotify.com/v1/browse/new-releases?country=IN&limit=10"
              apiUrl="https://api.spotify.com/v1/browse/categories?country=IN&locale=EN&limit=10"
            />
            <Section
              title="New Album"
              apiUrl="https://api.spotify.com/v1/browse/new-releases?limit=10&offset=5"
            />
            {/* // apiUrl="https://api.spotify.com/v1/albums/4ecrmvaAeV5JxU0JUJhTFU?market=IN" */}

            <SongFilterSection />
          </div>
        </SnackbarProvider>
      </header>
    </div>
  );
}

export default App;
