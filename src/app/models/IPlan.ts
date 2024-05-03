import { ISubscribtion } from "./ISubscribtion"

export interface IPlan {
    ID:number
    Name:string
    Price:number
    Type: string
    //navigation Properties
    Subscribtion:ISubscribtion
}