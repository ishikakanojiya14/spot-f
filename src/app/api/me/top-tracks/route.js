// app/api/me/top-tracks/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  const accessToken = request.cookies.get('access_token')?.value;

  if (!accessToken) {
    return NextResponse.json({ error: 'Access token not found.' }, { status: 401 });
  }

  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      // Handle token expiration or other errors
      if (response.status === 401) {
        return NextResponse.json({ error: 'Token expired or invalid.' }, { status: 401 });
      }
      throw new Error(`Spotify API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch data from Spotify.' }, { status: 500 });
  }
}