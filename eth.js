web3 = new Web3(web3.currentProvider);
ethereum.enable();
import GameToken from './build/contracts/GameToken.json';                              

var contract = new web3.eth.Contract(GameToken.abi, "0x2A9c8C4657375C8cE1B0629D055Ba718bFD4ba5A"); // Contract Address

console.log(contract);

function mintAfterGame(numberOfTokens) {
    web3.eth.getAccounts().then(accountArray => {
        var account = accountArray[0];

        contract.methods.mint(account, numberOfTokens).send({from: account})
        .on('receipt', receipt => {
            alert("Transaction Complete");
        })
    });
}
