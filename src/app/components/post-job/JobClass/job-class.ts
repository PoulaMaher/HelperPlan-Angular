import { JobRequirmentsClass } from "../job-requirment/JobRequirmentsClass/job-requirments-class";
import { AboutYouClass } from "../about-you/AboutYouClass/about-you-class";
import { JobDetailsClass } from "../job-details/JobDetailsClass/job-details-class";
export class JobClass {
  JobRequirments: JobRequirmentsClass=new JobRequirmentsClass();
  AboutYou: AboutYouClass = new AboutYouClass();
  JobDetails: JobDetailsClass = new JobDetailsClass();
}
