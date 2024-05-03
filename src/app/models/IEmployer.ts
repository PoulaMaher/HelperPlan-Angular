import { DecimalPipe } from "@angular/common"
import { ISubscribtion } from "./ISubscribtion"
import { IJob } from "./IJob"
import { ISubscribtionHistory } from "./ISubscribtionHistory"

export interface IEmployer{
    Fname: string
    Lname: string
    Phone: string
    Location: string
    DayOff: string
    Accomodation: string
    Salary:number
    KidsNo:number
    AdultNo:number
    HasBet:boolean
    Description:string
    Title: string
    Subscribtion: ISubscribtion
    Jobs: IJob[]
    SubscribtionHistories:ISubscribtionHistory[]
}