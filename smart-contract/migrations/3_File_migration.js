/** @format */

const Migrations = artifacts.require("CID");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};