import React, { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";

const Song = ({ songDetails }) => {

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(songDetails?.playbackUrl);

        return () => {
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, [songDetails?.playbackUrl]);

    const handlePlayMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            await audio.play()
            setIsMusicPlaying(true);
        } else {
            audio.pause();
            setIsMusicPlaying(false);
        }
    }
    return (
        <div className='p-4 hover:bg-[#1F1F1F] rounded-lg text-gray-300 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src={songDetails?.image} className='cover h-[50px] w-[50px]' />
                <p className='text-sm'>{songDetails?.title}</p>
            </div>
            <div className='text-xs uppercase gap-4'>
                <button className='text-green-400 hover:text-green-600 ease-in-out duration-300 text-lg uppercase cursor-pointer mr-2 relative top-[4px]' onClick={handlePlayMusic}>
                    {
                        isMusicPlaying ? <FaPause className='text-xl' /> : <FaPlay className='text-xl' />
                    }
                </button>
                {songDetails?.playCount}
            </div>
        </div>
    )
}

export default Song