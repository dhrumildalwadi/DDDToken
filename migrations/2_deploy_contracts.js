var DDDToken = artifacts.require("./DDDToken.sol");

module.exports = function(deployer) {
    deployer.deploy(DDDToken,1000000);
};