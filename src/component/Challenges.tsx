import { useEffect, useState } from "react";
import ChallengesCard from "./ChallengeCard";
import { Challenge } from "../type/types";

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    const savedChallenge = localStorage.getItem('challengeData');
    if (savedChallenge) {
      const parsedChallenge = JSON.parse(savedChallenge);

      // Check if the parsed value is an array
      if (Array.isArray(parsedChallenge)) {
        setChallenges(parsedChallenge);
      } else {
        console.error("The data stored in localStorage is not an array");
      }
    }
  }, []);

  return (
    <div className="h-[1196px] bg-[#003145] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-9">
        {challenges.length > 0 ? (
          challenges.map((challenge, index) => (
            <ChallengesCard key={index} challenge={challenge} />
          ))
        ) : (
          <p>No challenges available</p>
        )}
      </div>
    </div>
  );
}
