pragma solidity >=0.4.22 <0.9.0;
import "./User.sol";

contract UserFunctions is User {
    event userAdded(address user);
    function CheckUserExists(address user) public view returns(bool) {
        for(uint i = 0; i < userArr.length; i++) {
            if(userArr[i] == user) return true;
        }
        return false;
    }
    function AddUser() public {
        userArr.push(msg.sender);
        emit userAdded(msg.sender);
    }
}
