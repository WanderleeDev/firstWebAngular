import { InputData } from "./inputData.interface";
import { IColorObject } from "./objectColor.interface";

//  Union type

//  en un type
//  type CombinedTypes = IColorObject | InputData;

//  en una interface
export interface ITotalData extends InputData, IColorObject {
  item: string,
  date: string,
  flags: string,
  data: string,
  price: string
}