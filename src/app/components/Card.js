import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Card({ artist }) {
    const router = useRouter();
    const [audio, setAudio] = useState(null);
    useEffect(() => {
        setAudio(new Audio('/audio/song1.mp3')); // Replace with your audio file URL
    }, []);
    const handleMusic = () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        } else {
            audio.pause().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }
    return (
        <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group cursor-pointer" onClick={() => {
            router.push(`/artists/${artist?._id}`)
        }}>
            <div className="relative h-[250px]">
                {console.log(artist?.photoUrl)}
                <img
                    src={artist?.photoUrl}
                    alt={artist?.name}
                    className="w-full h-[80%] contain object-cover rounded-md mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/121212/FFFFFF?text=Error'; }}
                />
                <button onClick={handleMusic} className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 ">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path play-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            {
                artist?._id && <h3 className="font-bold" onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/artists/${artist?._id}/dashboard`)
                }}>{artist?.name}</h3>
            }
            {/* <p className="text-sm text-zinc-400 mt-1">{description}</p> */}
        </div>
    );
}