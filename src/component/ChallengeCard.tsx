import { useEffect, useState } from 'react'
import { Challenge } from '../type/types'

interface ChallengesCardProps {
  challenge: Challenge;
}

const calculateTimeRemaining = (startDateTime: string) => {
  const now = new Date();
  const startDate = new Date(startDateTime);
  const difference = startDate.getTime() - now.getTime();

  console.log("Now:", now, "StartDate:", startDate, "Difference:", difference);

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};


export default function ChallengesCard({challenge}:ChallengesCardProps) {

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(challenge.startDate));

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(challenge.startDate)); // Initial calculation
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(challenge.startDate));
    }, 1000); // Update every second
    return () => clearInterval(intervalId);
  }, [challenge.startDate]);

  const { days, hours, minutes } = timeRemaining;


  return (
    <div className="w-[354px] h-[473px] rounded-2xl bg-white shadow-lg overflow-hidden">
      <div className="h-[174px] w-full">
        <img 
          src={challenge.img} 
          alt={challenge.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
    
        <span className="bg-[#F8E6D1] text-[#8D6E52] text-sm font-semibold px-3 py-1 rounded-full">
          Upcoming
        </span>

        <h3 className="text-lg font-bold text-center mt-4">
          {challenge.title}
        </h3>

        <p className="text-center text-gray-500 text-sm mt-2">Starts in</p>
        <div className="flex justify-center space-x-2 mt-2">
          <div className="text-center">
            <p className="text-xl font-bold">{days}</p>
            <p className="text-gray-500 text-sm">Days</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{hours}</p>
            <p className="text-gray-500 text-sm">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{minutes}</p>
            <p className="text-gray-500 text-sm">Mins</p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#44924C] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#3b823d] transition">
            <i className="fas fa-check-circle mr-2"></i>
            Participate Now
          </button>
        </div>
      </div>
    </div>
  )
}
