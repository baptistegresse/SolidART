const { Web3 } = require('web3');
const abi = require('../abi.json');
require('dotenv').config();

const goerliRpcUrl = 'https://goerli.blockpi.network/v1/rpc/public';
const web3 = new Web3(goerliRpcUrl);
console.log('ok')

const listUserNft = async (req, res) => {
    try {
        const address = "0xed626994548a1853f9a6c5bf36e9cbd9ffeff023";
        const contractAddress = process.env.SMART_CONTRACT;
        if (!contractAddress) {
            throw new Error("Adresse du contrat intelligent non définie");
        }

        const contract = new web3.eth.Contract(abi, contractAddress);

        // Appel de la fonction getAddresses
        let response = await contract.methods.getAddresses().call();

        // Convertir les BigInt en chaînes pour éviter des problèmes de sérialisation
        response = JSON.parse(JSON.stringify(response, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value));

        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const sendNft = async (req, res) => {
    try {
        // Récupération des données de la requête
        const { walletAddress, newNFTAddress, nftId } = req.body;

        // Validation des données (exemple simple)
        if (!walletAddress || !newNFTAddress || !nftId) {
            throw new Error("Les paramètres walletAddress, newNFTAddress, et nftId sont requis");
        }

        const contract = new web3.eth.Contract(abi, process.env.SMART_CONTRACT);

        const gasEstimate = await contract.methods.addAddress(walletAddress, newNFTAddress, nftId).estimateGas({ from: walletAddress });

        const transaction = await contract.methods.addAddress(walletAddress, newNFTAddress, nftId).send({
            from: walletAddress,
            gas: gasEstimate
        });

        console.log('Transaction réussie:', transaction);
        res.json({ message: 'NFT ajouté avec succès', transaction });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).send(error.message);
    }
};

module.exports = {
    listUserNft,
    sendNft
};
