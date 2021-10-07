// var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')

const web3 = new Web3('https://mainnet.infura.io/v3/fca07a6fa2974cc39b20c23eff5a323a')

// // get latest block number
// web3.eth.getBlockNumber().then(console.log)

// get latest block
// web3.eth.getBlock('latest').then(console.log)

// // get latest 10 blocks
// web3.eth.getBlockNumber().then((latest) => {
//   for (let i = 0; i < 10; i++) {
//     web3.eth.getBlock(latest - i).then(console.log)
//   }
// })

// get transaction from specific block
const hash = '0x063e7345937b72be501e6c4b3a5504c13b373911a19e9c9d547edbfac431c5ec'
web3.eth.getTransactionFromBlock(hash, 13374326).then(console.log)




