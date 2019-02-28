const path = require("path");
require('dotenv').config();
const devmnem = process.env.DEVMNEN;
const kovmnem = process.env.KOVMNEN;
const ropmnem = process.env.ROPMNEN;
const rinmnem = process.env.RINMNEN;
const maimnem = process.env.MAIMNEN;
const key = process.env.INFURA_API_KEY;
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(devmnem, "http://127.0.0.1:7000/");
    },
    network_id: 5777,
    gas: 10000000000,
    gasPrice: 1,
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(kovmnem, 'https://kovan.infura.io/v3/' + key);
    },
      network_id: 42,
      gas: 5050505,
      gasPrice: 5000000000,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(ropmnem, 'https://ropsten.infura.io/v3/' + key);
    },
      network_id: 3,
      gas: 8000000,
      gasPrice: 5000000000,
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(rinmnem, 'https://rinkeby.infura.io/v3/' + key);
    },
      network_id: 4,
      gas: 8000000,
      gasPrice: 5000000000,
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(maimnem, 'https://mainnet.infura.io/v3' + key);
    },
      network_id: 1,
      gas: 5000000,
      gasPrice: 10000000000,
    }
  }
};
