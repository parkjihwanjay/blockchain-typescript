import {Hash} from 'crypto'
export interface IBlock {
  timestamp : number;
  transactions : string[];
  prevHash : string;
  Hash : string;
}