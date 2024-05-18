import { ICandidate } from "./ICandidate"

export interface IEducation {
    id:number
    educationLevel :string
    crsDuration:string
    hasComplete:boolean
    completionYear: Date
    candidateID:number
    //Candidate?: ICandidate
}
