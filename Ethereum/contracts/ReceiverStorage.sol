pragma solidity ^0.4.18;

contract ReceiverStorage {
    address private receiver;
    string private infoReceived;
    
    function ReceiverStorage() internal {
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