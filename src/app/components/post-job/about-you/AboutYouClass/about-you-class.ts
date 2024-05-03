class AboutYou {
  EmployerType: EmployerType = new  EmployerType();
  ReceiveByEmail: boolean = false;
  Email: string = '';
}
class EmployerType{
  Type:string='';
}
export class Family extends EmployerType{
  FamilyType:string=''
  HavePets:boolean=false
  Nationality:string=''
  override Type: string= 'Family'
}
class OffersToCandidate {
  DayOFF: string = '';
  Accomodation: string = '';
  MonthlySalaryOffer: MonthlySalaryOffer = new MonthlySalaryOffer();
}
class MonthlySalaryOffer {
  Title: string = 'Dont-Mention';
}
export class Fix extends MonthlySalaryOffer {
  constructor() {
    super();
    this.Title = 'Fix';
  }
  MonthlySalary: number = 0;
  Currency: string = '';
}
export class Range extends MonthlySalaryOffer {
  constructor() {
    super();
    this.Title = 'Range';
  }
  MaxSalary: number = 0;
  MinSalary: number = 0;
  Currency: string = '';
}
export class Else extends MonthlySalaryOffer {
  constructor() {
    super();
    this.Title = 'Else';
  }
  Description: string = '';
}
export class AboutYouClass {
  AboutYou: AboutYou = new AboutYou();
  OffersToCandidate: OffersToCandidate = new OffersToCandidate();
}
