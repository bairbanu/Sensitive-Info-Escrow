pragma solidity ^0.4.18;

contract ReceiverStorage {
    address private receiver;
    string private infoReceived;
    
    function ReceiverStorage() public {
        receiver = msg.sender;
    }
    
    // Receive from sender, so can have require for sender in future
    function receiveInfo(string _infoReceived) public {
        infoReceived = _infoReceived;
    }
    
    function extractInfo() public view returns (string) {
        require(msg.sender == receiver);
        return infoReceived;
    }
}

contract SenderStorage {
    address private sender;
    string private coldTransaction;
    
    function SenderStorage() public {
        sender = msg.sender;
    }

    modifier onlySender() {
        require(msg.sender == sender);
        _;
    }
    
    function setTransaction(string _coldTransaction) public onlySender {
        coldTransaction = _coldTransaction;
    }
    
    function getTransaction() public view onlySender returns (string) {
        return coldTransaction;
    }
}