import { DecimalPipe } from "@angular/common"
import { ISubscribtion } from "./ISubscribtion"
import { IJob } from "./IJob"
import { ISubscribtionHistory } from "./ISubscribtionHistory"

export interface IEmployer{
    id:number
    fname: string
    lname: string
    phoneNumber: string
    location: string
    dayOff: string
    accomodation: string
    salary:number
    kidsNo:number
    adultNo:number
    hasBet:boolean
    description:string
    title: string
}