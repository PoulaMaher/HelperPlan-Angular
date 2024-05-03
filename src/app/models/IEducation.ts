import { ICandidate } from "./ICandidate"

export interface IEducation {
    ID:number
    EducationLevel :string
    CrsDuration:string
    HasComplete:boolean
    CompletionYear: Date
    CandidateID:number
    //Candidate?: ICandidate
}
