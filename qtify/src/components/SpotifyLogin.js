import { redirectUri, clientId } from "../config";
import { Button } from "@mui/material";

// PKCE login flow for Spotify
const CLIENT_ID = clientId;
const REDIRECT_URI = redirectUri;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPE = "user-read-private user-read-email";

function base64UrlEncode(str) {
  return btoa(String.fromCharCode(...new Uint8Array(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function generateCodeChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(digest);
}

function generateRandomString(length) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default function SpotifyLogin() {
  const handleLogin = async () => {
    localStorage.removeItem("spotify_token"); // Clear any existing token
    localStorage.removeItem("code_verifier"); // Clear any existing verifier
    const verifier = generateRandomString(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("code_verifier", verifier);

    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(
      SCOPE
    )}&code_challenge_method=S256&code_challenge=${challenge}`;

    window.location.href = authUrl;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#1DB954",
            px: 2,
            py: 1,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1ed760",
              borderRadius: 3,
              border: "white 2px solid",
              px: 3,
              py: 2,
            },
            "&:active": {
              backgroundColor: "#2196f3", // blue during click
            },

            borderRadius: 1,
          }}
          variant="contained"
          color="primary"
          onClick={() => handleLogin()}
        >
          Login with Spotify
        </Button>
      </div>
      ;
    </>
  );
}
