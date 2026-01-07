"use client";
import sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
const Spotify = require("spotify-api.js");
const { Client } = require("spotify-api.js");

export default function Home() {
  const [artists, setArtists] = useState([]);

  async function fetchMusic() {
    const res = await fetch('http://localhost:8000/artists', {
      method: 'GET',
    });

    if (res.status !== 200) {
      throw new Error('Failed to authenticate with API');
    }
    const data = await res.json();
    setArtists(data?.artists);
  }

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex">
      <Sidebar/>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-gradient-to-b from-[#1f1f1f] to-[#121212] p-6 rounded-t-lg">
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-5">Good Afternoon</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {
                  artists?.map((artist) => {
                    return (
                      <Card
                        key={artist?._id}
                        artist={artist}
                      />
                    )
                  })
                }
              </div>
            </div>
            {/* <div className="mt-10">
              <h2 className="text-3xl font-bold mb-5">Your Top Mixes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <Card
                  image="https://placehold.co/150x150/777777/FFFFFF?text=Mix+1"
                  title="My Mix 1"
                  description="A blend of pop and rock."
                />
                <Card
                  image="https://placehold.co/150x150/555555/FFFFFF?text=Mix+2"
                  title="My Mix 2"
                  description="Chill electronic beats."
                />
                <Card
                  image="https://placehold.co/150x150/333333/FFFFFF?text=Mix+3"
                  title="My Mix 3"
                  description="Indie and alternative."
                />
                <Card
                  image="https://placehold.co/150x150/999999/FFFFFF?text=Mix+4"
                  title="My Mix 4"
                  description="Focus and study music."
                />
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
