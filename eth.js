web3 = new Web3(web3.currentProvider);
ethereum.enable();

var abi = [
    
 /// Grab ABI from your contract.json file
    
];

var contract = new web3.eth.Contract(abi, "/* Contract Address */"); 

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
