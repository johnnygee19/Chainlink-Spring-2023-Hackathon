// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const smartContract = await hre.ethers.getContractFactory("Faucet");
  const faucet = await smartContract.deploy("0x2DAB8947ed77c03Bdc25524980E14d41db47f421");

  await faucet.deployed();

  console.log("Contract address of faucet contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});