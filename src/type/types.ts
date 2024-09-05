export interface Challenge {
    id: number;
    title: string;
    desc: string;
    startDate: string;
    endDate: string;
    img: string;
    level: string;
  }

  
  export type Action =
    | { type: 'ADD_CHALLENGE'; payload: Challenge }
    | { type: 'UPDATE_CHALLENGE'; payload: Challenge }
    | { type: 'REMOVE_CHALLENGE'; payload: number }
    | { type: 'SET_CHALLENGES'; payload: Challenge[] };
  