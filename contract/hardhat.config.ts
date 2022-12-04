import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },
    testnet: {
      url: "https://jsonrpc-t.evmos.nodestake.top",
      accounts: [`a878131e2038f2a3976e00fcaccbd8243a1b9c6b4dad0db285e6c36ee818186a`,],
      chainId: 9000,
    }
  },
};

export default config;
