import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/me.jpg';
import { motion } from "framer-motion"

function Intro() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-3'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col item center lg:items-start'>
                        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>
                            Ted A. Perez
                        </motion.h1>
                        <motion.span className='bg-gradient-to-r from-gray-300 via-yellow-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={profilePic} alt="Ted Perez" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Intro