"use client";
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Song from '@/app/components/Song';
import Sidebar from '@/app/components/Sidebar';
import { AiOutlineCloseCircle } from "react-icons/ai";

const page = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const fetchArtist = async () => {
    const res = await fetch(`http://localhost:8000/find-artist/${id}`, {
      method: 'GET'
    });
    if (res.status !== 200) {
      throw Error('Something went wrong');
    }
    const data = await res.json();
    setArtist(data);
  }
  useEffect(() => {
    fetchArtist();
  }, [])
  return (
    <div>
      {
        showModal && <div className='bg-black opacity-80 absolute h-screen w-screen z-20'>
        {/* Modal Code */}
        <button className='absolute right-4 top-4 rounded-full bg-green-600 h-10 w-10 ml-auto cursor-pointer' onClick={() => {
          setShowModal(false)
        }}><AiOutlineCloseCircle className='mx-auto text-3xl '/></button>
      </div>
      }
      <div className="bg-black min-h-screen text-white flex ">
      <Sidebar />
      <div className='flex-1 h-[calc(100vh-80px)'>
        {
          artist && <>
            <div className='bg-gradient-to-b from-[#EDEDED] to-[#989898] pt-4 rounded-xl'>
            <div className='h-[40vh] flex gap-12 items-end p-4'>
              <div>
                <img src={artist?.photoUrl} alt={artist?.name || "Artist"} className='rounded-full object-cover h-[250px] w-[250px] shadow-2xl shadow-[#]' />
              </div>
              <div className='gap-4 flex flex-col'>
                <h1 className='text-8xl text-black font-extrabold'>{artist?.name}</h1>
                <h3 className='text-black'>33,412,955 monthly listeners</h3>
              </div>
            </div>
            <div className='px-4 mt-4 rounded-b-xl'>
            </div>
            <button className='bg-green-600 w-[120px] text-black block ml-auto relative top-2 right-2 px-3 py-2 rounded-xl' onClick={() => {
              router.push(`/artists/${id}/create-song`)
            }}>Create Song</button>
          </div>
          <div className='px-4 py-13 flex flex-col gap-2'>
            {
              artist?.songId?.map((song) => {
                return <div
                
                key={song?._id}>
                  <Song songDetails={song} />
                </div>
              })
            }

            </div>
          </>
        }
      </div>
    </div>
    </div>
  )
}

export default page