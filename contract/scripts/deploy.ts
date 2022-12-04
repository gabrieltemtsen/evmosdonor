import { ethers } from "hardhat";

async function main() {
  const contractAdd = "0x9E483Bc6615e6CEcBDD0719BfC825c7217667AC8";

  const Evmosdonor = await ethers.getContractFactory("Evmosdonor");
  const donor = await Evmosdonor.deploy();

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  await donor.deployed();

  console.log(`Successfully deployed to: ${donor.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
