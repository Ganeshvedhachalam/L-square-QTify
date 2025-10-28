import { redirectUri,clientId } from "../config";

// PKCE login flow for Spotify
const CLIENT_ID = clientId;
const REDIRECT_URI = redirectUri
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
    const verifier = generateRandomString(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("code_verifier", verifier);

    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPE)}&code_challenge_method=S256&code_challenge=${challenge}`;

    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
}
