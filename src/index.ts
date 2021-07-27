import { newBlock } from "./utils/block";
import { printBlockInformation } from "./utils/console";

const init = () => {
  const gensisTransactions = ['jihwan best', 'jihwan awesome'];
  const genesisBlock = newBlock(gensisTransactions, null);
  console.log('--- first block ---');

  printBlockInformation(genesisBlock);

  const block2Transactions = ['jihwan why?', 'jihwan hello'];
  const block2 = newBlock(block2Transactions, genesisBlock.Hash)
  console.log('--- second block ---');
  printBlockInformation(block2);

  const block3Transactions = ['jihwan hi', 'jihwan where are you?'];
  const block3 = newBlock(block3Transactions, block2.Hash)
  console.log('--- third block ---');

  printBlockInformation(block3)
}

init();