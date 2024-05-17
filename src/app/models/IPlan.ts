import { ISubscribtion } from './ISubscribtion';

export interface IPlan {
  id?: number;
  name: string;
  price: number;
  type: string;
  //navigation Properties
  subscribtion?: ISubscribtion;
}
