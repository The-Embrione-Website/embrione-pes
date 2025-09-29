'use client'

import React from 'react'
import { leftguy, rightguy, fourteen, fifteen } from "@/public/Kodikon4";
import Image from 'next/image';
import Kodikon41 from '/public/Kodikon4/Kodikon41.png';


const HeroComponent = () => {
  return (
    <div className='h-90'>
    <h1 className='text-white'>Kodikon 5.0</h1>
    </div>
  )
  return (
    <>
      <div className='relative md:top-24 md:h-[100vh]  md:w-[100vw]  mt-9 flex flex-row items-center justify-between'>
        <div className='relative top-[2px]'>
          <Image
            src={leftguy}
            alt=""
            data-aos="fade-in-left"
            data-aos-duration="2500"
            className='h-[100%]'
          />

        </div>
        <div className='flex flex-col items-center'>
          <div className='absolute md:relative my-auto bottom-32 md:bottom-0 px-2 z-200'>
            <Image
              src={Kodikon41}
              alt="Kodikon 4.0"
              className='h-150 w-300 '
            />
          </div>
        </div>
        <div className='relative -z-300'>
          <Image
            src={rightguy}
            alt=""
            className='h-[100%]'
            data-aos="fade-in-right"
        data-aos-duration="2500"
          />
        </div>
      </div>
    </>
  )
}

export default HeroComponent




