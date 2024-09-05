import { useNavigate } from "react-router-dom";
import rocket from "../assets/images/rocket.svg";

export default function Hero() {
  const navigate=useNavigate();
  return (
    <div className="bg-[#003145]  flex justify-center items-center h-[560px] font-poppins">
      <div className="flex items-start gap-4 ml-14">
        <div className="w-2 h-28 bg-[#FFCE5C] " />
        <div className="flex flex-col gap-10  ml-14 w-[643px] ">
          <span className="font-semibold text-5xl text-white ">
            Accelerate Innovation with Global AI Challenges
          </span>
          <span className="font-medium text-[18px] text-[#ECECEC] mr-32">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </span>
          <div className="flex justify-start">
            <button className="bg-white px-4 py-2 font-semibold font-poppins rounded-lg text-lg text-[#003145]" onClick={()=>navigate('/admin')}>
              Create Challenge
            </button>
          </div>
        </div>
      </div>
        <img src={rocket} alt="rocket" className="ml-24 " />
    </div>
  );
}
