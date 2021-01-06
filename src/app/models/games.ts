import { Observable,Observer } from 'rxjs';

export interface GameModel {
    id:number;
    title:string;
    description:string;
    imageUrl:string;
    youtubeUrl:string;
    ageCategory:string;
    price:any;
    disponibility:string;
    numberofUnits:number;
    amount:number;
}

export interface OrderModel {
  id:number;
  deliverAdress:string;
  city:string;
  isProceesed:boolean;
  isDelivered:boolean;
  currentCurrierLocation:string;
  rentedHours:number;
  ClientPhoneNumber:string;
  CurrierPhoneNumber:string;

}
