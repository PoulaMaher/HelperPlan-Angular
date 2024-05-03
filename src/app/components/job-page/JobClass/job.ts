import { ICandidatePrefrences } from "../../../models/ICandidatePrefrences"
import { IEmployer } from "../../../models/IEmployer"
import { IJob } from "../../../models/IJob"
import { IRequiredSkills } from "../../../models/IRequiredSkills"

export class Job {
    Position:string=''
    StartDate:Date=new Date()
    Type:string=''
    YearsOfExperience:number=0
    Gender:string=''
    Country:string=''
    contract: string = ''
    MainSkills:string[]=[]
    LanguageSkills:string[]=[]
}
