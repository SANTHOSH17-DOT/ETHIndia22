pragma solidity >=0.4.22 <0.9.0;
import "./User.sol";

contract UserFunctions is User {
    event userAdded(address user);

    function AddUser() public {
        userArr.push(msg.sender);
        emit userAdded(msg.sender);
    }
}
