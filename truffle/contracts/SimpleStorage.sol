// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract SimpleStorage {
  uint256 value;
  string greeter;

  event ValueChanged(uint256 newValue);

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
    emit ValueChanged(newValue);
  }

  function setGreeter(string calldata newGreeter) public {
    greeter = newGreeter;
  }

  function getGreeter() public view returns (string memory) {
    return greeter;
  }
}
