pragma solidity ^0.4.21;

contract SenderStorage {
    address private sender;
    string private coldTransaction;
    
    constructor() internal {
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
