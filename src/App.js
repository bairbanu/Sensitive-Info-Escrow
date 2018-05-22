import React, { Component } from 'react'
import crypto from 'eth-crypto'
import contractJSON from './ethereum/contractInfo.json'
import web3 from './web3'

class App extends Component {
	state = {
		receiverInstance: {},
		senderInstance: {}
	}

	async componentDidMount() {
		const {
			receiverABI,
			receiverAddress,
			senderABI,
			senderAddress
		} = contractJSON

		const parsedReceiverABI = JSON.parse(receiverABI)
		const parsedSenderABI = JSON.parse(senderABI)

		const receiverInstance = await new web3.eth.Contract(
			parsedReceiverABI,
			receiverAddress
		)
		const senderInstance = await new web3.eth.Contract(
			parsedSenderABI,
			senderAddress
		)

		this.setState({
			receiverInstance,
			senderInstance
		}, () => {
			console.log(Object.keys(this.state.receiverInstance))
		})

	}

	render() {
		return (
			<div>
				<h1> Check console.log </h1>
			</div>
		)
	}
}

export default App
