import { ICandidate } from "./ICandidate"

export interface ILanguages {
    ID: number
    Name: string
    Description: string
    Code: string
    CandidateID: number
    //Navigation Properties
   // Candidate?: ICandidate
}
