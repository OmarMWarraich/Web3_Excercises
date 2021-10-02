const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/fca07a6fa2974cc39b20c23eff5a323a' 
const web3 = new Web3(rpcURL)
const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa' 
web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })

