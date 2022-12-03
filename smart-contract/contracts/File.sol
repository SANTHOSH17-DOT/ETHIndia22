pragma solidity >=0.4.22 <0.9.0;

contract CID {
    struct File {
        string fileType;
        string name;
        string cid;
        bool isUploaded;
        uint256 createdAt;
        uint256 updatedAt;
    }
    event fileUploaded(
        string cid,
        address user,
        string fileType,
        string name,
        uint256 createdAt,
        uint256 updatedAt
    );
}
