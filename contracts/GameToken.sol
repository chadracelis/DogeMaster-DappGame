pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract GameToken is ERC20, ERC20Detailed {

    constructor(
        string memory _name, 
        string memory _symbol, 
        uint8 _decimals) 
        public
        ERC20Detailed(
            _name,
            _symbol,
            _decimals)
        {}

    function mint(address account, uint256 amount) public returns (bool) {
        _mint(account, amount);
        return true;
    }

}