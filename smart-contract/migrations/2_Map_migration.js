/** @format */

const Migrations = artifacts.require("Map");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};