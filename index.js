const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/c8f78f65e9ff4a0ca4cb4dac7ece069e'
);

console.log(web3);

web3.eth.getBlockNumber().then(number => {console.log(number);
})