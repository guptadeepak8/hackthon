import  { useState } from 'react';
import butterfly from '../assets/images/butterfly.png';
import imagefill from '../assets/icons/imagefill.svg';
import { ArrowRight } from 'lucide-react';
import { Challenge } from '../type/types';
import { useNavigate } from 'react-router-dom';


export default function FormPage() {
  const navigate=useNavigate();
  const [challengeData, setChallengeData] = useState<Challenge>({
    id: Date.now(),
    title: '',
    desc: '',
    startDate: '',
    endDate: '',
    img: '',
    level: 'Easy'
  });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
  const existingChallenges = JSON.parse(localStorage.getItem('challengeData') || '[]');
  

  const updatedChallenges = Array.isArray(existingChallenges) 
    ? [...existingChallenges, challengeData]
    : [challengeData];
  
  localStorage.setItem('challengeData', JSON.stringify(updatedChallenges));
    navigate('/')
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setChallengeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <div className='h-[107px] bg-[#F8F9FD] py-10 px-20'>
        <span className='font-inter font-bold text-2xl'>Challenge Details</span>
      </div>
      <form className='space-y-11' onSubmit={handleSubmit}>
        <div className='w-[453px] mx-20 my-8 space-y-8'>
          <div className='space-y-5'>
            <h3 className='font-inter font-medium text-base'>Challenge Name</h3>
            <input
              type="text"
              name="title"
              className='border border-[#B7B7B7] w-[453px] h-[39px] rounded-md text-base font-inter font-medium focus:outline-none px-5 py-2'
              value={challengeData.title}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-5'>
            <h3 className='font-inter font-medium text-base'>Start Date</h3>
            <input
              type="datetime-local"
              name="startDate"
              className='border border-[#B7B7B7] w-[453px] h-[39px] rounded-md text-base font-inter font-medium focus:outline-none px-5 py-2'
              value={challengeData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-5'>
            <h3 className='font-inter font-medium text-base'>End Date</h3>
            <input
              type="datetime-local"
              name="endDate"
              className='border border-[#B7B7B7] w-[453px] h-[39px] rounded-md text-base font-inter font-medium focus:outline-none px-5 py-2'
              value={challengeData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='mx-20 space-y-5'>
          <h3 className='font-inter font-medium text-base'>Description</h3>
          <textarea
            name="desc"
            className='border border-[#B7B7B7] w-[817px] h-[252px] rounded-md text-base font-inter font-medium focus:outline-none p-5'
            value={challengeData.desc}
            onChange={handleChange}
          />
        </div>
        <div className='mx-20 space-y-5'>
          <h3 className='font-inter font-medium text-base'>Image</h3>
          <div className='h-[218px] w-[297px] bg-[#F8F9FD] p-6 space-y-3'>
            <img src={butterfly} alt="" className='rounded-lg'/>
            <div className='flex items-center gap-2'>
              <img src={imagefill} alt="" className='w-4 h-4'/>
              <button type='button' className='border-none text-sm font-inter'>Change image</button>
              <ArrowRight className='h-3 w-3'/>
            </div>
          </div>
          <div className='h-[250px] w-[236px] p-6 space-y-5'>
            <h3 className='font-inter font-medium text-base'>Level Type</h3>
            <div className='space-y-11'>
              <select
                name="level"
                id="level"
                className='border border-[#B7B7B7] w-[236px] h-[39px] rounded-md text-base font-inter font-medium focus:outline-none px-5 py-2'
                value={challengeData.level}
                onChange={handleChange}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <button type='submit' className='px-4 py-2 rounded-xl border bg-[#44924C] h-[46px] w-[214px] text-lg font-inter font-medium text-white'>Save Changes</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
