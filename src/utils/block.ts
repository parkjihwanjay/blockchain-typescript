import { IBlock } from "@/interfaces/IBlock";
import crypto from 'crypto'

export const newBlock = (transactions : IBlock['transactions'], prevHash : IBlock['prevHash']) : IBlock => {
  const currentTime = Date.now();
  return {
    timestamp : currentTime,
    transactions,
    prevHash,
    Hash : newHash(currentTime, transactions, prevHash),
  }
}

export const newHash = (time : IBlock['timestamp'], transactions : IBlock['transactions'], prevHash : IBlock['prevHash']) : string => {
  const input = prevHash + '' + time ;

  const result = transactions.reduce((accumulator, value) => accumulator + value, input)

  const hash = crypto.createHash('sha256').update(result).digest('hex');
  return hash;
}