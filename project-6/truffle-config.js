const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = "1d83c91f7d1243b2aec4095fbcfae9d5";

const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {


  networks: {

    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    goerli: {
      // networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider('chat task fuel matter catalog riot ecology remove loan level phone item', `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,       
      gas: 4500000,        
      gasPrice: 10000000000,
      timeoutBlocks: 200
  },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}