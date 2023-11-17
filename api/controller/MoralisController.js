// getNftFromWallet -> click on a NFT -> call smart contract -> put NFT in a smart contract ( mapping )
// we need a 'set function in solid art' & ' remove function '

// ' function list all nft in our smart contract '
// when a ppl bought a nft, we send to all locator a part of the fee

const Moralis = require("moralis").default;
const {EvmChain} = require("@moralisweb3/common-evm-utils");
require('dotenv').config();

const MORALIS_ID = process.env.MORALIS_ID
const MORALIS_KEY = process.env.MORALIS_API_KEY
const SMART_CONTRACT = 0xed626994548a1853f9a6c5bf36e9cbd9ffeff023

const runApp = async () => {
    await Moralis.start({
        apiKey: MORALIS_KEY
    });
}

const getNftFromWallet = async (req, res) => {
    const address = req.body.address;
    const chain = '0x5';
    try {
        const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
            address,
            chain,
        });
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const listNftOwnerFromContract = async (req, res) => {
    const address = SMART_CONTRACT;
    const chain = '0x5';

    const response = await Moralis.EvmApi.nft.getNFTOwners({
        address,
        chain,
    });

    console.log(response.toJSON());
    res.json(response)
}

const convertHashToIpfs = async (hash) => {

}

const listTransactionContract = async (req, res) => {
    const address = SMART_CONTRACT;
    const chain = '0x5';

    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
        address,
        chain,
    });
    res.json(response);
}

const listAllNftFromContract = async (req, res) => {
    const address = SMART_CONTRACT;
    const chain = '0x5';

    const response = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,
    })

    res.json(response);
}

module.exports = {
    runApp,
    getNftFromWallet,
    listNftOwnerFromContract,
    convertHashToIpfs,
    listTransactionContract,
    listAllNftFromContract
}