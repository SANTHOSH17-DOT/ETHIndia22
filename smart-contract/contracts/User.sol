pragma solidity >=0.4.22 <0.9.0;
import "./File.sol";

contract User is CID {
    struct user {
        File[] files;
    }
}
