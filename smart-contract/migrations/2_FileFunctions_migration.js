/** @format */

const Migrations = artifacts.require("FileFunctions");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};