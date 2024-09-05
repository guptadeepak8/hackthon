import { Clock } from 'lucide-react'
import React from 'react'
import level from '../assets/icons/skilllevel.svg'
import { useNavigate } from 'react-router-dom'

export default function DetailPage() {
  const navigate =useNavigate()
  return (
    <div>
      <div className='h-[419px] bg-[#003145] py-24 px-32'>
        <div className='flex flex-col gap-6'>
          <div className='bg-[#FFCE5C] h-[34px] w-[464px] rounded-md px-5'>
            <div className='flex gap-2 items-center  h-full'>
              <Clock className='w-5 h-5'/> 
              <span className='font-inter font-semibold text-sm'>Starts on 17th Jun'22 09:00 PM (India Standard Time)</span>
            </div>
          </div>
          <div>
            <h1 className='font-semibold text-[40px] text-white font-poppins'>Data Sprint 72 - Butterfly Identification</h1>
            <p className='text-[#F8F9FD] text-lg font-inter font-medium mt-8'>Identify the class to which each butterfly belongs to</p>
          </div>
          <div className='px-5 py-2 bg-[#F8F9FD] flex items-center gap-2 w-[102px] rounded-md' >
              <img src={level} alt="" className='h-5 w-5'/>
              <span className='font-inter font-semibold text-base'>Easy</span>
          </div>
          
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 px-32 h-[66px] shadow-md shadow-[#DDE6ED] border">
          <div className="text-lg font-semibold border-b-4 border-[#44924C] mt-3 ">
            <span className='font-inter font-bold text-lg'>Overview</span>
          </div>
          <div className="space-x-4">
            <button className="bg-[#44924C] text-white px-4 py-2 rounded-lg w-[90px] text-sm font-poppins font-semibold" onClick={()=>navigate('/admin')}>
              Edit
            </button>
            <button className=" text-[#DC1414] px-4 py-2 rounded-lg border  border-[#DC1414]  w-[90px] text-sm font-poppins font-semibold">
              Delete
            </button>
          </div>
        </div>
        <div className='mx-32 py-11 font-poppins font-medium text-lg'>
        <p className="text-[#64607D] mb-4 ">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </p>
          <p className="text-[#64607D] mb-4">
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </p>
          <p className="text-[#64607D]">
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </div>
    </div>
  )
}
