import { ChevronDown, Search } from "lucide-react";

export default function SearchChallenges() {
  return (
    <div className="h-[324px] bg-[#002A3B] ">
      <div className="flex flex-col">
        <div className="my-20 text-center ">
          <h2 className="font-semibold text-3xl text-white font-poppins">
            Explore Challenges
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="relative w-[829px] ">
            <Search className="absolute left-9 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <input
              type="text"
              className="w-full h-12 pl-16 rounded-xl text-[#858585] font-light font-inter text-lg focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="relative inline-block">
            <button className="w-28 h-12 rounded-xl bg-[#EAEAEA]  text-lg  flex items-center justify-between pl-4 pr-10">
              Filter
              <ChevronDown className="h-4 w-8  absolute right-3 top-1/2 transform -translate-y-1/2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
