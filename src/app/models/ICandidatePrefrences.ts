import { IJob } from "./IJob"

export interface ICandidatePrefrences{
    ID:number
    ContractStatus:string
    Gender: string
    Religion: string
    EducationLevel: string
    Age: number
    JobID: number
    //Navigation Properties
    Job: IJob
}