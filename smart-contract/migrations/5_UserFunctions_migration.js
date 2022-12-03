/** @format */

const Migrations = artifacts.require("UserFunctions");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};