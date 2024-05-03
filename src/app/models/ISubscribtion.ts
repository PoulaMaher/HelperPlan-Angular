import { IEmployer } from "./IEmployer"
import { IPlan } from "./IPlan"

export interface ISubscribtion {
    ID: number
    StartDate:Date
    EndDate:Date
    IsActive:boolean
    EmployerID:number
    PlanID:number
    //Navigation Properties
    Employer: IEmployer
    Plan: IPlan
}