"use client"
import React, { use, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
        if (!email || !password) {
            console.log("User email or password missing")
            return;
        }
        let data = {
            email: email,
            password: password,
        }
        const res = await axios.post('http://localhost:8000/login-artist', data);
        if (res.status === 200) {
            router.push(`/artists/${res?.data?.artist?._id}`);
        }
        else {
            console.log(res.data);
        }
    }
    return (
        <div className='bg-[url("https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp")] h-screen overflow-y-hidden grid place-items-center'>
            <div className='absolute h-screen w-full z-20 bg-gradient-to-b from-transparent to-black'></div>
            <div className='h-[450px] bg-[#111418] w-[350px] mx-auto border border-gray-600 text-gray-200 rounded-xl shadow-lg z-30'>
                <div className='text-center flex flex-col gap-4 p-10 pt-20'>
                    <div className='gap-2'>
                        <h1 className='text-2xl font-semibold'>Login User</h1>
                    </div>

                    <div>
                        <input type='email' placeholder='write email' className='py-2 w-full border-2 border-gray-300 ease-in duration-300 outline-none focus:border-gray-500 px-2' onChange={
                            (e) => {
                                setEmail(e?.target?.value)
                            }
                        } />
                    </div>
                    <div>
                        <input type='password' placeholder='write password' className='py-2 w-full border-2 border-gray-300 ease-in duration-300 outline-none focus:border-gray-500 px-2'
                            onChange={
                                (e) => {
                                    setPassword(e?.target?.value)
                                }
                            } />
                    </div>

                    <p className='text-xs relative top-4'>This form will store your personal information encrypted and safe. Click here to see <span className='text-blue-700 cursor-pointer ease-in duration-300'>privacy page.</span></p>
                    <button className='mt-4 bg-blue-400 hover:bg-blue-500 ease-in duration-300 cursor-pointer py-2 mx-auto px-8 rounded-sm' onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login