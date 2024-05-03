import { ICandidate } from "./ICandidate"

export interface IExperience {
    ID:number
    JobPosition:string
    WorkingCountry: string
    StartYear:Date
    EndYear:Date
    EmployerType: string
    Duties: string
    HasLetterRef: boolean
    CandidateID: number
    //Navigation Properties
    //Candidate?: ICandidate
}
