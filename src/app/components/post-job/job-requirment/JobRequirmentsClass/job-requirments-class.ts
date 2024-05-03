class BasicInformation {
  PositionOffered: string='';
  Type: string='';
  Location: string='';
  StartDate: Date=new Date();
}

class RequiredSkillsAndDuties {
  LanguageSkills: string[] =[];
  MainSkills: string[] =[];
  CookingSkills: string[] =[];
  OtherSkills: string[] =[];
  MostImportantSkills: string[] =[];
}

class CandidatePreference {
  PreferedCandidateLocation: string='';
  PreferedCandidateContract: string='';
  Gender: string='';
  Nationality: string[] =[];
  Education: string='';
  Religion: string[] =[];
  AgeRequired: number[] =[];
  ExperienceYearsRequired: number[] =[];
}
export class JobRequirmentsClass {
  BasicInformation: BasicInformation= new BasicInformation();
  RequiredSkillsAndDuties: RequiredSkillsAndDuties= new RequiredSkillsAndDuties();
  CandidatePreference: CandidatePreference= new CandidatePreference();
}
