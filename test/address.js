// address.js

const ODudeName = require("../index"); // Assuming index.js is in the root of your package directory
require('dotenv').config(); // Remove this line if no environment variable is used

const settings = {
  matic_rpc_url: process.env.MATIC_RPC,
  eth_rpc_url: process.env.ETH_RPC,
  fvm_rpc_url: process.env.FVM_RPC,
};

try {
  // Instantiate Odudename
  const resolve = new ODudeName(settings);

  
  //Retrieves from the Web3Domain
resolve.getAddress("jack.pay", "ETH").then(x => {
  console.log("Wallet address of jack.pay is : " + x);
}).catch(console.error);



//Retrieves from the Web3Domain
resolve.getAddress("niki.fil", "ETH").then(x => {
  console.log("Wallet address of niki.fil is : " + x);
}).catch(console.error);



//Retrieves from the ENS domain
resolve.getAddress("brad.eth", "ETH").then(x => {
  console.log("Wallet address of brad.eth is : " + x);
}).catch(console.error);



//Retrieves from the UnstoppableDomain
resolve.getAddress("brad.crypto", "ETH").then(x => {
  console.log("Wallet address of brad.crypto is : " + x);
}).catch(console.error);



//Retrieves Not minted from the Web3Domain
resolve.getAddress("jaiiiiiiiiiiiick.demo", "ETH").then(x => {
  console.log("Wallet address of jaiiiiiiiiiiiiiiick.demo is : " + x);
}).catch(console.error);


 // console.log('Tests passed successfully.');
} catch (error) {
  console.error('Tests failed:', error);
}
