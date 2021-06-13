require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food pledge renew saddle around coral light army gasp'; 
let testAccounts = [
"0x49e522b693b105a1d183f2ae34ba5dbc0799a58925cc479c23ef210ffad1b4e7",
"0x4c4adb590eb2afc594cfb94130d6d00d09efd3821b8fa0ff91ec78ffa6bacbfd",
"0x9637755e4e07bf9d52fdfa819ca0a65defccb1a226201430c6e7d83d45130941",
"0xb429d467bd4b50c35c3ff90ae49a7b7c242017e1ed956b614a510ef0cdeb2315",
"0x3ebcf302ccbb5f2a9954e39a51d30f6d9e92c80c364704632a07ba127679e1b4",
"0x38cc60ca157894f0ec69e5bce14d6c731f775ca267163f779280a95b77379714",
"0x1b4f2c486a9731e181eed498c27672820def61a25112471cabcd921277e5831f",
"0xe2c4db0ae25ad83f0f91baacd5150e39b27c632af5b6f75920961cda413e750d",
"0xbea5488d55557e71987201fabb64bf09d6e35d7cc58e68ab90b98a291c14873f",
"0xa50c1e902622de34d1810877077916d191a425a0f98660f2beaf3ff9d8ddf2b2"
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

