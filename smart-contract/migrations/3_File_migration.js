/** @format */

const Migrations = artifacts.require("File");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};