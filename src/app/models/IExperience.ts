import { ICandidate } from "./ICandidate"

export interface IExperience {
    id:number
    jobPosition:string
    workingCountry: string
    startYear:Date
    endYear:Date
    employerType: string
    duties: string
    hasLetterRef: boolean
    candidateID: number
    //Navigation Properties
    //Candidate?: ICandidate
}
