const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");

/** @type {HardhatUserConfig} */
const config = {
  solidity: "0.8.18",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./ignition/cache",
    artifacts: "./ignition/artifacts",
  },
};

module.exports = config;
