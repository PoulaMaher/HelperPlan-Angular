import { ICandidate } from "./ICandidate"

export interface ICookingSkills {
    id: number;
    name:string
    Description: string
    Level: number
    CandidateID: number
    //Navigation Properties
    //Candidate?:ICandidate
}
