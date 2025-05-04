'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const AnimationForm = () => {
    return (
        <motion.div initial={{ rotate: "180deg" }} whileInView={{ rotate: "0" }} transition={{ duration: 0.3 }} className='bg-[#3B3B3B] mx-[100px] min-w-[387.89453125] rounded-[32px] h-[365.8563232421875] my-auto relative hidden xl:flex justify-center items-center'>
            <motion.div initial={{ rotate: "-180deg" }} whileInView={{ rotate: "0" }} transition={{ duration: 0.5 }} className='w-[479] h-[340.15728759765625] bg-[#2D2D2D] rounded-[32px] absolute flex justify-center items-center'>
                <div className='bg-[#1C1C1C] w-[575] h-fit absolute rounded-[32px]'>
                    <ContactForm />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AnimationForm
