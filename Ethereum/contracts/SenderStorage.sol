pragma solidity ^0.4.18;

contract SenderStorage {
    address private sender;
    string private coldTransaction;
    
    function SenderStorage() internal {
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
