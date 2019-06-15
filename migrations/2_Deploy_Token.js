const GameToken = artifacts.require("GameToken");

module.exports = function(deployer) {
  deployer.deploy(GameToken, "Dogecoin", "DOGE", 0);
};
