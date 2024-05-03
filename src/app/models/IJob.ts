import { ICandidatePrefrences } from "./ICandidatePrefrences"
import { IEmployer } from "./IEmployer"
import { IRequiredSkills } from "./IRequiredSkills"
export interface IJob{
    ID: number
    Position: string
    Type: string
    StartDate: Date
    EndDate: Date
    EmployerID: number
    //Navigation Properties
    Employer: IEmployer
    RequiredSkills: IRequiredSkills
    CandidatePref: ICandidatePrefrences
}