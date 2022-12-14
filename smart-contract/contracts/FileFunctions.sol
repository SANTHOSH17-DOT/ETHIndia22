pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;
import "./User.sol";

contract FileFunctions is User {
    function findFileIndex(address _user, string memory _cid)
        internal
        view
        returns (uint256)
    {
        for (uint256 i = 0; i < users[_user].files.length; i++) {
            if (
                keccak256(abi.encodePacked(users[_user].files[i].cid)) ==
                keccak256(abi.encodePacked(_cid))
            ) {
                return i;
            }
        }
        return users[_user].files.length;
    }

    function addFile(
        string memory _fileType,
        string memory _cid,
        string memory name
    ) public {
        require(
            findFileIndex(msg.sender, _cid) == users[msg.sender].files.length,
            "File already exists"
        );
        users[msg.sender].files.push(
            file(_fileType, name, _cid, false, block.timestamp, block.timestamp)
        );
        emit fileUploaded(
            _cid,
            msg.sender,
            users[msg.sender].files[findFileIndex(msg.sender, _cid)].fileType,
            users[msg.sender].files[findFileIndex(msg.sender, _cid)].name,
            users[msg.sender].files[findFileIndex(msg.sender, _cid)].createdAt,
            block.timestamp
        );
    }

    function getFiles() public view returns (file[] memory) {
        return users[msg.sender].files;
    }

    function updateIsUploaded(string memory _cid, bool _success) public {
        require(
            findFileIndex(msg.sender, _cid) < users[msg.sender].files.length,
            "file does not exists"
        );
        users[msg.sender]
            .files[findFileIndex(msg.sender, _cid)]
            .isUploaded = _success;
    }
}
