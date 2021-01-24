import { Observable,Observer } from 'rxjs';

export interface GameModel {
    id:number;
    title:string;
    description:string;
    imageUrl:string;
    youtubeUrl:string;
    numberofLikes:number;
    numberofDislikes:number;
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
  gameId:number;
  isProcesed:boolean;
  isDelivered:boolean;
  currentCurrierLocation:string;
  rentedHours:number;
  ClientPhoneNumber:string;
  CurrierPhoneNumber:string;

}

export interface PaymentModel {
  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cvv: string;
  value: number;
}
