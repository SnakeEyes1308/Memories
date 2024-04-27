import React from 'react'
import {Button} from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className=' text-2xl'>
                Want to join the journey to making more memories?
            </h2>
            <p className=' text-gray-500 my-2'>
                Check out our discord where you can meet same enthusiasts like you and create more memories!
            </p>
            <Button gradientDuoTone='purpleToPink' className=' rounded-tl-xl rounded-bl-none'>
                <a href='https://discord.gg/5Sr89HJKV5' target='_blank' 
                rel='noopener noreferrer'>
                    Learn More
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='https://assets-prd.ignimgs.com/2022/06/17/discord-blogroll-1655488022938.jpg'/>
        </div>
    </div>
  )
}
