// src/SpotifyCallback.js
import { useEffect } from "react";
import { clientId, redirectUri } from "../config";

export default function SpotifyCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const storedVerifier = localStorage.getItem("code_verifier");

    if (code && storedVerifier) {
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id:clientId,
        code_verifier: storedVerifier,
      });

      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Spotify token response:", data); // 👀 Add this line
          if (data.access_token) {
            localStorage.setItem("spotify_token", data.access_token);
            window.location.href = "/";
          } else {
            alert("Failed to fetch token. Check console for details.");
          }
        })
        .catch((err) => {
          console.error("Token exchange error:", err);
        });
    } else {
      alert("Missing code or verifier — please retry login.");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging you in...</h2>
    </div>
  );
}
