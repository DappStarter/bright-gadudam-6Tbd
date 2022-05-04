require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift recipe machine modify good arena equal gauge'; 
let testAccounts = [
"0x51581c8016f89807a49db0888cbb9215e087d8e0895c64eaed1ce93572f4b8ff",
"0x8f2a81c82aeeb056e9e0f22a18f2e3b21bc4e5b9de893a667d9447fa3fb44eb6",
"0xdbccda2002466afba07648fa87d20c679c3b88374a393b850ccf728ed5b6780d",
"0x4f29b3379d9f35513f40eb4264e2e31b1e567f8122379779345cdfc73d1365ba",
"0xe2c36796b409c717fddf38a59310a366ed9cc2bbd1f6fda4cd755c2ace9a5777",
"0x6054f20dc85653cc41da6a4c76bbb20fe9c049b3a14c8444e3cf10df9fbba193",
"0x21fed157cb2454c5728e5482746086c9e9d81a57a9bbbd323d9b4be4f591e1f9",
"0x03f583d3222fb7f9eccbed99b9828504ac520686f3b7f02d035b9117815d21ef",
"0x61d65282768fc0cb0337ca4f3e739027852943128cd83a635ace5c6316eef02c",
"0x1d55cd054411c5f87c5a1d8a8a240c0923ae5e63288fbd58fad095cb841950a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

