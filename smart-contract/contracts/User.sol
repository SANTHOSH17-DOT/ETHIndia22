pragma solidity >=0.4.22 <0.9.0;
import "./File.sol";

contract User is File {
    address[] userArr;
    struct user {
        file[] files;
    }
    mapping(address => user) users;
}
