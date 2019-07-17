<h2>Getting Started</h2> 
(this project uses truffle framework and phaser library) 
<p></p>

•	Before proceeding, make sure you have Truffle and Metamask extension for Google Chrome downloaded  </br>
•	Clone this repo  </br>
•	Go to your new app directory inside terminal and type ‘truffle develop’ to fire up local truffle blockchain. 
Type ‘compile’ then ‘migrate’ to deploy contracts. A list of contract information should output such as contract address, gas cost, etc. 
This will also create a build folder with the compiled version of our contracts </br>
•	Inside eth.js, replace the abi with the abi found in build/contracts/GameToken.json </br>
•	Scroll down to line 326 inside eth.js file and replace the contract address with the new deployed contract address </br>
•	Open index.html with live server (Make sure to have metamask connected to your local server) </br>
