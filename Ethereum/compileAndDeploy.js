const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const handOffContractPath = path.resolve(
	__dirname,
	'contracts',
	'HandOff_SmartContracts.sol'
)
const contractSource = fs.readFileSync(
	handOffContractPath,
	'utf8'
)

const contractOutput = solc.compile(contractSource, 1).contracts

const receiverStorage = contractOutput[':ReceiverStorage']
const senderStorage = contractOutput[':SenderStorage']

// deploy here