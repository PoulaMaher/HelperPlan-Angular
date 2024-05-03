import { IJob } from "./IJob"

export interface IRequiredLanguages {
    ID: number
    Name: string
    Description: string
    Code: number
    JobID: number
    //Navigation Properties
    Job: IJob
}