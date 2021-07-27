import { IBlock } from '../interfaces/IBlock';

export const printBlockInformation = (block : IBlock) => {
  const {timestamp, prevHash, Hash} = block;
  console.log('time : ', timestamp.toString());
  console.log('prevHash : ', prevHash);
  console.log('Hash : ', Hash);
  printTransactions(block);
}

export const printTransactions = (block : IBlock) => {
  console.log('Transactions\n');
  block.transactions.forEach((transaction, index) => {
    console.log(`${index}th transaction : `, transaction);
  });
}