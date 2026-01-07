import { useRouter } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const router = useRouter();
  const redirectToHome = () => {
    router.push("/")
  }
  return (
    <div>   {/* Sidebar */}
        <aside className="w-64 bg-black p-6 hidden md:block flex-shrink-0">
          <div className="font-bold text-2xl mb-10">Spotify</div>
          <nav>
            <ul>
              <li className="mb-4" onClick={redirectToHome}>
                <button className="flex items-center text-zinc-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" ></path></svg>
                  Home
                </button >
              </li>
              <li className="mb-4">
                <button href="#" className="flex items-center text-zinc-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  Search
                </button>
              </li>
              <li>
                <button href="#" className="flex items-center text-zinc-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12 3"></path></svg>
                  Your Library
                </button>
              </li>
            </ul>
          </nav>
        </aside></div>
  )
}

export default Sidebar