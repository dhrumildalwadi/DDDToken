var DDDToken = artifacts.require("./DDDToken.sol");
var DDDTokenSale = artifacts.require("./DDDTokenSale.sol");

module.exports = function(deployer) {
    deployer.deploy(DDDToken,1000000).then(function(){

        var tokenPrice = 1000000000000000;
        return deployer.deploy(DDDTokenSale, DDDToken.address, tokenPrice);
    });
};