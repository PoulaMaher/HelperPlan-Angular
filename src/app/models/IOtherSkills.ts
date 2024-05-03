import { ICandidate } from "./ICandidate"

export interface IOtherSkills {
    ID: number
    Name: string
    Description: string
    Level: number
    CandidateID: number
    //Navigation Properties
    //Candidate?: ICandidate
}
