const ethers = require('ethers');
const ganacheURL = 'http://127.0.0.1:8545';
const customHttpProvider = new ethers.providers.JsonRpcProvider(ganacheURL);

const fromPrivate =
	'0x6c03c1ca11aa5a67ac71691088cc4e97d1f212761789c7d6abdbf835dc30e2d2';
const wallet = new ethers.Wallet(fromPrivate, customHttpProvider);

const toAddress = '0xb3ED5342191B302a209A1427BA2B2Bee02752F74';

const transaction = {
	to: toAddress,
	value: ethers.utils.parseEther('10')
};

const sendTransaction = wallet.sendTransaction(transaction);

sendTransaction.then(tx => {
	console.log(tx);
});
