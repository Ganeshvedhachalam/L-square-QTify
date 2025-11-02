// src/SpotifyCallback.js
import { useEffect } from "react";
import { clientId, redirectUri } from "../config";

import { useNavigate } from "react-router-dom";

export default function SpotifyCallback({ handleSetToken }) {
  // useNavia
  const navigate = useNavigate();
  // const location = useLocatio();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const storedVerifier = localStorage.getItem("code_verifier");
    console.log("Authorization code:", code); // 👀 Add this line

    if (code && storedVerifier) {
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
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
            handleSetToken(data.access_token);
            console.log("Token stored, navigating to home.", data.access_token);

            // window.location.href = "/";
            navigate("/");
          } else {
            // alert("Failed to fetch token. Check console for details.");
            console.log("Failed token response:", data);
          }
        })
        .catch((err) => {
          console.error("Token exchange error:", err);
        });
    } else {
      console.log("Missing code or verifier");
      // alert("Missing code or verifier — please retry login.");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging you in...</h2>
    </div>
  );
}
