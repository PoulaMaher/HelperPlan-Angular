import { IEmployer } from "./IEmployer"

export interface ISubscribtionHistory {
    ID: number
    StartDate: Date
    EndDate: Date
    EmployerID: number
    PlanID: number
    //Navigation Properties
    Employer: IEmployer
}