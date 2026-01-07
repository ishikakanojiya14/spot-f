// components/Login.jsx

'use client'; // This is a client component

import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Replace with your actual client ID and redirect URI
    const clientId = 'YOUR_CLIENT_ID'; 
    const redirectUri = 'http://localhost:3000/api/auth/callback';
    const scopes = 'user-read-private user-read-email user-top-read';
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = spotifyAuthUrl;
  };

  return (
    <div>
      <h1>Spotify Clone</h1>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
};

export default Login;