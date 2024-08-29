'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

    )
}

const Challenge = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-40 overflow-x-hidden'>
            <h1 className='text-4xl font-bold text-center'><span className='text-5xl'>Dream</span><br /> Bussines Challenge</h1>
            <p className='max-w-3xl px-2 py-1 text-center'>Everyone can participate , join and write your own Dream Business!!</p>
            <div className='flex gap-4 py-4 '>
                <Link href='https://docs.google.com/forms/d/1ChuJnAZWM1eVa-bjIOkAsodKchgpJz9Mixw-DXG-JYo/viewform?edit_requested=true'>
                    <Button>Submission</Button>
                </Link>
                <Link href='https://drive.google.com/drive/folders/1pvKdzMH25WP4ZHQAyHvnwOCuccfD74Cq?usp=sharing'>
                    <Button variant='link'>Info</Button>
                </Link>
            </div>
            <div className='flex gap-2 overflow-x-scroll w-[90vw] h-fit py-4'>
                <motion.div
                    initial={{
                        scale: 0.5, opacity: 0.5
                    }}
                    whileInView={{
                        scale: 1, opacity: 1
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='shadow-2xl shadow-slate-500 flex-none bg-black w-[45vw] h-72 rounded-3xl text-center flex flex-col items-center justify-center overflow-clip text-black gap-5 bg-gradient-to-b from-[#C07F00] via-[#FFD95A] to-[#F8DE22] md:max-w-md'>
                    <div className='px-2'>
                        <h1 className='text-3xl font-bold'>TOP 3</h1>
                        <p className='text-xl'>Prize</p>
                    </div>
                    <ul className='px-2 text-sm font-medium text-black'>
                        <li>
                            Bebas biaya pendaftaran
                        </li>
                        <li>
                            E-certificate
                        </li>
                        <li>
                            Mystery gift
                        </li>
                    </ul>

                </motion.div>
                <motion.div
                    initial={{
                        scale: 0.5, opacity: 0.5
                    }}
                    whileInView={{
                        scale: 1, opacity: 1
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='shadow-2xl shadow-slate-500 flex-none bg-black w-[45vw] h-72 rounded-3xl text-center flex flex-col items-center justify-center overflow-clip text-black gap-5 bg-gradient-to-b from-[#D3756B] via-[#F0997D] to-[#FFC3A1]  md:max-w-md'>
                    <div className='px-2'>
                        <h1 className='text-3xl font-bold'>RANK 4-5</h1>
                        <p className='text-xl'>Prize</p>
                    </div>
                    <ul className='px-2 text-sm font-medium text-black'>
                        <li>
                            Potongan biaya registrasi sebesar 75%
                        </li>
                        <li>
                            E-certificate
                        </li>

                    </ul>

                </motion.div>
                <motion.div
                    initial={{
                        scale: 0.5, opacity: 0.5
                    }}
                    whileInView={{
                        scale: 1, opacity: 1
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='shadow-2xl shadow-slate-500 flex-none bg-black w-[45vw] h-72 rounded-3xl text-center flex flex-col items-center justify-center overflow-clip text-black gap-5 bg-gradient-to-b from-[#ECCDB4] via-[#F0EDD4] to-[#deccb1]  md:max-w-md'>
                    <div className='px-2'>
                        <h1 className='text-3xl font-bold'>RANK 6-10</h1>
                        <p className='text-xl'>Prize</p>
                    </div>
                    <ul className='px-2 text-sm font-medium text-black'>
                        <li>
                            Potongan biaya registrasi sebesar 50%
                        </li>
                        <li>
                            E-certificate
                        </li>

                    </ul>

                </motion.div>
                <motion.div
                    initial={{
                        scale: 0.5, opacity: 0.5
                    }}
                    whileInView={{
                        scale: 1, opacity: 1
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='shadow-2xl shadow-slate-500 flex-none bg-whitw w-[45vw] h-72 rounded-3xl text-center flex flex-col items-center justify-center overflow-clip text-black gap-5  md:max-w-md'>
                    <div className='px-2'>
                        <h1 className='text-3xl font-bold'>RANK 11-15</h1>
                        <p className='text-xl'>Prize</p>
                    </div>
                    <ul className='px-2 text-sm font-medium text-black'>
                        <li>
                            Potongan biaya registrasi sebesar 25%
                        </li>
                        <li>
                            E-certificate
                        </li>

                    </ul>

                </motion.div>

            </div>
        </div>
    )
}

export default Challenge