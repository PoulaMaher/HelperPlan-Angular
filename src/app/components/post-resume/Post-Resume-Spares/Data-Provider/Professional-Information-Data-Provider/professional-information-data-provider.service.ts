import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalInformationDataProviderService {
  constructor() {
    let response = fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        // Extracting official names of countries
        const officialNames = data.map(
          (country: { name: { common: any } }) => country.name.common
        );
        this.PreferedCountryStatus = officialNames;
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  PreferedCountryStatus: string[] = [];

  JobTypeStatus: string[] = ['temporary', 'full', 'part'];
  OtherSkillsStatus: string[]=["care giver","car wash","computer","driving license","first aid","gardening","handy man","house work","sewing"];
  PersonalitySkillsStatus = [
    'Communication skills',
    'Empathy',
    'Active listening',
    'Adaptability',
    'Problem-solving',
    'Conflict resolution',
    'Patience',
    'Flexibility',
    'Humility',
    'Emotional intelligence',
    'Time management',
    'Stress management',
    'Self-motivation',
    'Attention to detail',
    'Professionalism',
    'Cultural competence',
    'Tolerance',
    'Kindness',
    'Respect',
    'Trustworthiness',
  ];
  MainSkillsStatus: string[] = [
    'Cleaning',
    'Cooking',
    'Laundry',
    'Ironing',
    'Childcare',
    'Elderly care',
    'Pet care',
    'Grocery shopping',
    'Meal planning',
    'Organizing',
    'Household management',
    'Communication skills',
    'Time management',
    'Basic first aid',
    'Driving',
  ];
  cookingSkillsStatus: string[] = [
    'Food preparation',
    'Knife skills',
    'Meal planning',
    'Recipe following',
    'Baking',
    'Grilling',
    'Sauteing',
    'Boiling',
    'Steaming',
    'Roasting',
    'Frying',
    'Food presentation',
    'Understanding of flavors and seasonings',
    'Ingredient selection and storage',
    'Kitchen safety and hygiene',
    'Menu development',
    'Culinary creativity',
    'Adaptability to dietary restrictions',
    'Knowledge of different cuisines',
    'Plating and garnishing',
    'Time management in the kitchen',
    'Cleaning and maintenance of kitchen equipment',
    'Food preservation techniques',
  ];
  LanguageStatus: string[] = [
    'arabic',
    'philipo',
    'Mandarin Chinese',
    'Japanese',
    'Korean',
    'Cantonese Chinese',
    'hindi',
    'Vietnamese',
    'Taiwanese Hokkien',
    'Tagalog (Filipino)',
    'Thai',
    'Burmese',
    'Khmer (Cambodian)',
    'Malay',
    'Indonesian',
    'Hmong',
    'Lao',
    'Mongolian',
  ];
  AccomodationPreferenceStatus: string[] = [
    'Live Out',
    'Flexible',
    'To be Discussed',
    'Live In - Separate room',
    'Live In - Shared Room',
    'Live In - Separate room',
    'Live In',
  ];
  DayOffPreferenceStatus: string[] = [
    'flexible',
    'to be discussed',
    'Friday-Saturday',
    'Saturday-Sunday',
    'saturday',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
  ];
  CurrentWorkStatus: string[] = [
    // 'Employed full-time',
    // 'Employed part-time',
    // 'Self-employed',
    // 'Unemployed',
    // 'Student',
    // 'Retired',
    // 'Freelancer',
    // 'Contractor',
    // 'Temporarily laid off',
    // 'Homemaker',
    // 'Volunteer',
    // 'Not working for personal reasons',
    'full-time',
    'part-time',
    'temporary',
  ];
  CurrencyStatus: string[] = [
    'US$',
    'HK$',
    'SG$',
    'MOP$',
    'SAR',
    'QAR',
    'KWD',
    'AED',
    'PHP',
    'IDR',
    'MYR',
    'TWD',
  ];
  jopPositionStatus: string[] = [
    'Helper',
    'Driver',
    'BabySitter',
    'CareGiver',
    'cooker',

  ];
  EmployerTypeStatus: string[] = [
    'family',
    'company',
    'other',


  ];
  schoolStatus: string[] = [
    'primary-school graduate',
    'primary-school undergraduate',
    'elementary-school graduate',
    'elementary-school undergraduate',
    'high-school graduate',
    'high-school undergraduate',
    'college graduate',
    'college undergraduate',
  ];
  educationdurationStatus: string[] = [
    '1 month',
    '2 month',
    '3 month',
    '6 month',
    '9 month',
    '1 year',
    '2 year',
    '3 year',
    '4 years',
    '5 years',

  ];
  yearsStatus: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976',
     '1977', '1978', '1979', '1980', '1981', '1982', '1983',
      '1984', '1985', '1986', '1987', '1988', '1989', '1990',
       '1991', '1992', '1993', '1994', '1995', '1996', '1997',
        '1998', '1999', '2000', '2001', '2002', '2003', '2004',
         '2005', '2006', '2007', '2008', '2009', '2010', '2011',
          '2012', '2013', '2014', '2015', '2016', '2017', '2018',
           '2019', '2020', '2021', '2022', '2023', '2024'


  ];
}
