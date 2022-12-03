pragma solidity >=0.4.22 <0.9.0;
import "./User.sol";

contract UserFunctions is User {
    function AddUser() public {
        userArr.push(msg.sender);
    }
}
