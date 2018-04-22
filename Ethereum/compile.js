const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const pathToReceiverStorage = path.resolve(__dirname, 'contracts', 'ReceiverStorage.sol')
const pathToSenderStorage = path.resolve(__dirname, 'contracts', 'SenderStorage.sol')

const receiverStorageSource = fs.readFileSync(pathToReceiverStorage, 'utf8')
// const senderStorageSource = fs.readFileSync(pathToSenderStorage, 'utf8')

const receiverStorageOutput = solc.compile(receiverStorageSource, 1)

console.log(receiverStorageOutput.contracts[':ReceiverStorage'])


// const senderStorageOutput = 

// fs.ensureDirSync(buildPath)

