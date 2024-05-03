import { IJob } from "./IJob"

export interface IRequiredOtherSkills {
    ID: number
    Name: string
    Description: string
    Level: number
    JobID: number
    //Navigation Properties
    Job: IJob
}