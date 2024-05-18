import { ICookingSkills } from "./ICookingSkills";
import { IEducation } from "./IEducation";
import { IExperience } from "./IExperience";
import { ILanguages } from "./ILanguages";
import { IMainSkills } from "./IMainSkills";
import { IOtherSkills } from "./IOtherSkills";

export interface ICandidates {

    id: number;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    fname: string;
    lname: string;
    location: string;
    description: string;
    position: string;
    contactEmail: string;
    photoURL: string;
    age: number;
    gender: string;
    noKids: number;
    workExperience: number;
    martialStatus: string;
    nationality: string;
    religion: string;
    educationLevel: string;
    whatappNumber: string;
    hasPassport: boolean;
    jobType: string;
    workStatus: string;
    availabilityDate: Date;
    expectedSalary: number;
    preferredDay: string;
    accommodationPref: string;
    experiences: IExperience[];
    educations: IEducation[];
    mainSkills: IMainSkills[];
    languages: ILanguages[];
    otherSkills: IOtherSkills[];
    cookingSkills: ICookingSkills[];


}
