import React from 'react'
import ai from '../assets/icons/ai.svg'
import person from '../assets/icons/person.svg'
import robot from '../assets/icons/robot.svg'
export default function Achievements() {
  return (
    <div className='bg-[#002A3B] flex items-center justify-center h-52 '>
        <div className='flex  items-center justify-center  w-full '>
           <div className='flex gap-4 mr-16'>
             <img src={ai} alt="aiIcon" />
             <div className='text-[#FFFFFF] flex flex-col font-inter'>
              <span className='font-bold text-2xl'>100K+</span>
              <span>AI model submissions</span>
             </div>
           </div>
          <div className='w-[1px] bg-[#C4C4C4] h-9'/>
           <div className='flex gap-4 mx-28'>
             <img src={person} alt="personIcon" />
             <div className='text-[#FFFFFF] flex flex-col font-inter'>
              <span className='font-bold text-2xl'>50K+</span>
              <span>Data Scientists</span>
             </div>
           </div>
          <div className='w-[1px] bg-[#C4C4C4] h-9'/>
           <div className='flex gap-4 ml-16'>
             <img src={robot} alt="robotIcon" />
             <div className='text-[#FFFFFF] flex flex-col font-inter'>
              <span className='font-bold text-2xl'>100+</span>
              <span>AI Challenges hosted</span>
             </div>
           </div>
        </div>
    </div>
  )
}
