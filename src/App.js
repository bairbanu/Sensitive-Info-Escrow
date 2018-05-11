import React, { Component } from 'react'
import crypto from 'eth-crypto'

class App extends Component {
	state = {
		receiverInstance: {},
    senderInstance: {},
	}

	async componentDidMount() {
		// const {
		// 	receiverABI,
		// 	receiverAddress,
		// 	senderABI,
		// 	senderAddress
		// } = await deploy()

    // const receiverInstance = await new web3.eth.Contract(receiverABI, receiverAddress)
    // const senderInstance = await new web3.eth.Contract(senderABI, senderAddress)

		// this.setState({
    //   receiverInstance,
    //   senderInstance,
		// })
	}

	render() {
		return (
      <div>
        <p> This is the receiver address: { this.state.receiverInstance } </p>
      </div>
    )
	}
}

export default App
