import React, { Component } from 'react'
import crypto from 'eth-crypto'
import contractJSON from './ethereum/contractInfo.json'
import web3 from './web3'

class App extends Component {
	state = {
		receiverInstance: {},
		senderInstance: {},
		senderValue: '',
		receiverPubKey: '',
		receiverPriKey: '',
	}

	async componentDidMount() {
		const { receiverABI, receiverAddress, senderABI, senderAddress } = contractJSON

		const parsedReceiverABI = JSON.parse(receiverABI)
		const parsedSenderABI = JSON.parse(senderABI)

		const receiverInstance = await new web3.eth.Contract(parsedReceiverABI, receiverAddress)
		const senderInstance = await new web3.eth.Contract(parsedSenderABI, senderAddress)

		const pubKey = await web3.eth.getAccounts()
		const receiverPubKey = pubKey[1]

		const receiverPriKey = '691e1d3acbd5d18add987da48a552cb1dee44bc01d00d37fc8d7dd9c74e0932c'
		this.setState({ receiverInstance, senderInstance, receiverPubKey })
	}

	/* 
		Account 0 -- sender
		Account 1 -- receiver
	*/
	handleSenderSubmit = async event => {
		event.preventDefault()

		const secret = this.state.senderValue
		const receiverPubKey = this.state.receiverPubKey

		const encrypted = await crypto.encryptWithPublicKey(
			receiverPubKey,
			secret
		)

		console.log('this is the encrypted message:', encrypted)
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSenderSubmit }>
					<label> Enter sender secret information: </label>
					<input name="sender" value={ this.state.senderValue } onChange={ event => this.setState({ senderValue: event.target.value }) } />
					<button> Send </button>
				</form>
			</div>
		)
	}
}

export default App
