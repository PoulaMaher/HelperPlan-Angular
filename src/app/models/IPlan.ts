import { ISubscribtion } from './ISubscribtion';

export interface IPlan {
  id: number;
  name: string;
  price: number;
  type: string;
  duration: number;
  //navigation Properties
  subscribtion?: ISubscribtion;
}
