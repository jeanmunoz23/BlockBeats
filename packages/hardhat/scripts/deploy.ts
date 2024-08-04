import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("0.0000000000001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(`Lock with 0.0000000001 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
  console.log(`Block explorer URL: https://blockscout.scroll.io/address/${lock.address}`);

  // Save contract details to a JSON file
  const contractDetails = {
    address: lock.address,
    unlockTime: unlockTime.toString(),
    lockedAmount: ethers.utils.formatEther(lockedAmount),
  };

  const outputPath = path.join(__dirname, 'deployed_contract.json');
  fs.writeFileSync(outputPath, JSON.stringify(contractDetails, null, 2));

  console.log(`Contract details saved to ${outputPath}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
