
import ParticipationCard from './ParticipationCard'
import notebook from '../assets/icons/notebook.svg'
import vector from '../assets/icons/Vector.svg'
import Robotgreen from '../assets/icons/Robotgreen.svg'
import identification from '../assets/icons/Identification.svg'


export default function Participation() {
  return (
    <div className='h-[900px]   font-poppins '>
      <div className='flex flex-col'>

      <div className='text-center mt-20 mb-20'>
        <h1 className='font-semibold text-4xl text'>Why Participate in <span className='text-[#0FA958]'>AI Challenges?</span></h1>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-9  '>
          <ParticipationCard
          icon={notebook}
          title='Prove your skills'
          desc='Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.'
          />
          <ParticipationCard
          icon={vector}
          title='Learn from community'
          desc='One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.'
          />
          <ParticipationCard
          icon={Robotgreen}
          title='Challenge yourself'
          desc='There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.'
          />
          <ParticipationCard
          icon={identification}
          title='Earn recognition'
          desc='You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.'
          />
        </div>
      </div>
      </div>
    </div>
  )
}
