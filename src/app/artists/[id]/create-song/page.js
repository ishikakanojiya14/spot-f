"use client";
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import axios from 'axios';

const CreateSong = () => {
  const params = useParams();
  const artistId = params.id;
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const handleCreateSong = async () => {

    const res = await axios.post('http://localhost:8000/create-song', {
      title:title,
      artistId:artistId,
      playbackUrl:url
    });
    console.log(res);
  }
  const audio = new Audio("https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");
  
  return (
    <div className=' h-screen pt-12 bg-[#000000]'>
      <div className='min-h-[350px] bg-[#9C9C9C] w-[350px] mx-auto pt-15 border border-gray-700 rounded-xl shadow-lg'>
        <div className='text-center flex flex-col gap-4 p-4'>
          <div className='gap-2'>
            <h1 className='text-2xl font-semibold pb-8'>User Details</h1>
          </div>
          <div>
            <input type='title' placeholder='write title' className='py-2 w-full border-2 border-gray-300 ease-in duration-300 outline-none focus:border-gray-500 px-2' onChange={
              (e) => {
                setTitle(e.target.value)
              }
            } />
          </div>
          <div>
            <input type='url' placeholder='write PlayBackUrl' className='py-2 w-full border-2 border-gray-300 ease-in duration-300 outline-none focus:border-gray-500 px-2' onChange={
              (e) => {
                setUrl(e.target.value)
              }
            } />
          </div>
          <div>
            <input type='imgurl' placeholder='write imgUrl' className='py-2 w-full border-2 border-gray-300 ease-in duration-300 outline-none focus:border-gray-500 px-2' onChange={
              (e) => {
                setUrl(e.target.value)
              }
            } />
          </div>
          <button className='bg-[#00A63E] h-12 w-full p-4 rounded-md' onClick={handleCreateSong}>Create Song</button>
        </div>
      </div>
    </div>
  )
}

export default CreateSong