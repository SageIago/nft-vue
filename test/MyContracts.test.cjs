const { expect } = require("chai");
const hre = require("hardhat");

describe("MyContract", function () {
  it("Should deploy and return the correct message", async function () {
    const Contract = await hre.ethers.getContractFactory("MyContract");
    const contract = await Contract.deploy("Hello, Test!");

    await contract.deployed();
    expect(await contract.message()).to.equal("Hello, Test!");
  });
});
