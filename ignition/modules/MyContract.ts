import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MyContractModule = buildModule("MyContractModule", (m) => {
  const myContract = m.contract("MyContract", ["Hello, Hardhat!"]);
  return { myContract };
});

export default MyContractModule;
