var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')

const web3 = new Web3('https://ropsten.infura.io/v3/e989a4425571442fb0b852fe100ea2a4')

const account1 = '0xD7A51232b04a4B7329B2807a29a8e16162F601D0';
const account2 = '0xC2cD9B1117f74c819dfE3406887E04436262020c';

const k1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');
const k2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex');

// web3.eth.getBalance(account1, (err, balance) => {
//     console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
// })

// web3.eth.getBalance(account2, (err, balance) => {
//     console.log('account 2 balance:', web3.utils.fromWei(balance, 'ether'))
// })


web3.eth.getTransactionCount(account1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    
    const tx = new Tx(txObject, {chain: 'ropsten'})
    tx.sign(k1)

    const serlializedTransaction = tx.serialize()
    const raw = '0x' + serlializedTransaction.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    })

})