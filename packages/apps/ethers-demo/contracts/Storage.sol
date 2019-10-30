pragma solidity >=0.4.21 <0.6.0;

contract Storage {
  address public owner;
  uint number;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setNumber(uint _number) public restricted {
    number = _number;
  }

  function getNumber() public view returns(uint) {
    return number;
  }
}
