import { ICandidate } from "./ICandidate"

export interface IPersonality {
    ID:number
    Name: string
    Description: string
    Age:number
    Gender: string
    Nationality: string
    CandidateID: number
    //Navigation Properties
    Candidate: ICandidate
}