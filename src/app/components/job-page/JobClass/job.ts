import { ICandidatePrefrences } from "../../../models/ICandidatePrefrences"
import { IEmployer } from "../../../models/IEmployer"
import { IJob } from "../../../models/IJob"
import { IRequiredSkills } from "../../../models/IRequiredSkills"

export class Job {
    // Position:string=''
    // StartDate:Date=new Date()
    // Type:string=''
    // YearsOfExperience:number=0
    // Gender:string=''
    // Country:string=''
    // contract: string = ''
    // MainSkills:string[]=[]
    // LanguageSkills:string[]=[]
    contractSelectedItems:string|null= null
    languageSelectedItems: string|null=null
    skillsSelectedItems: string|null=null
    countrySelectedItems: string|null=null
    startDate:Date=new Date()
    gender:string|null= "Female"
    jobPosition:string|null= "Driver"
    jobType:string|null= "Part Time"
    workingExperience:number|null= 0
    location:string|null=null
    age:number|null=18
    pageIndex:number|null=0
    pageSize:number|null=0
    pageCount:number|null=0
}
