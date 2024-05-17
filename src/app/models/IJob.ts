import { ICandidatePrefrences } from "./ICandidatePrefrences"
import { IRequiredSkills } from "./IRequiredSkills"
export interface IJob{
    ID: number
    Position: string
    Type: string
    StartDate: Date
    EndDate: Date
    EmployerID: number
    RequiredSkills: IRequiredSkills
    CandidatePref: ICandidatePrefrences
}