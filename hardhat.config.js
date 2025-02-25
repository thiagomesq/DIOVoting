require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");

const LOCALHOST_PRIVATE_KEY = vars.get("LOCALHOST_PRIVATE_KEY");

const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [LOCALHOST_PRIVATE_KEY],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
