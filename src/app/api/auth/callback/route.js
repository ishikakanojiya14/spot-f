// app/api/auth/callback/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No authorization code found.' }, { status: 400 });
  }

  // Replace with your actual client ID and secret
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = 'http://localhost:3000/api/auth/callback';

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Spotify token request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const { access_token, refresh_token, expires_in } = data;

    const redirectUrl = new URL('/', url);
    const responseWithCookie = NextResponse.redirect(redirectUrl);
    responseWithCookie.cookies.set('access_token', access_token, { httpOnly: true, secure: true, maxAge: expires_in });
    
    return responseWithCookie;

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Authentication failed.' }, { status: 500 });
  }
}