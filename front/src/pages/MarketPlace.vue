<template>
    <div class="title-container row justify-center items-center q-my-xl">
        <div class="column justify-center items-center">
            <p class="text-center title"><span style="color: #4386DD;">Search</span> a NFT</p>
            <q-input class="search-bar" rounded outlined v-model="text">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
    </div>
    <NFTList :nfts="nfts" />
    <FooterMenu />
</template>

<script>
import FooterMenu from 'src/components/FooterMenu.vue'
import NFTList from 'src/components/NFTList.vue';
import { ref } from 'vue';
import axios from 'axios';
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import abi from 'src/abi.json'
import Web3 from 'web3'



export default {
    components: {
        FooterMenu,
        NFTList
    },
    created() {
        this.reloadData()
    },
    data() {
        return {
            text: '',
            nfts: [],
            visible: ref(false),
            nftSelected: {}
        }
    },
    methods: {
        async reloadData() {
            const goerliRpcUrl = 'https://goerli.blockpi.network/v1/rpc/public';
            const web3 = new Web3(goerliRpcUrl);
            const contractAddress = "0xed626994548a1853f9a6c5bf36e9cbd9ffeff023";
            if (!contractAddress) {
                throw new Error("Adresse du contrat intelligent non définie");
            }

            const contract = new web3.eth.Contract(abi, contractAddress);

            // Appel de la fonction getAddresses
            let response = await contract.methods.getAddresses().call();

            // Convertir les BigInt en chaînes pour éviter des problèmes de sérialisation
            response = JSON.parse(JSON.stringify(response, (_, value) =>
                typeof value === 'bigint' ? value.toString() : value));

            try {
                const address = '0xed626994548a1853f9a6c5bf36e9cbd9ffeff023';
                const chain = EvmChain.GOERLI;
                const tokenId = '28664';

                if (Moralis.Core.isStarted === false) {
                    await Moralis.start({
                        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjNiYzZlNjcwLWYwZTQtNDM2YS1iNGRmLWVhMGE0Njk4MGRiYiIsIm9yZ0lkIjoiMzY0ODQ5IiwidXNlcklkIjoiMzc0OTcxIiwidHlwZUlkIjoiOWNkOTg3MjktZWJkNS00ZWQ0LTllNGQtODlmZGNlODY4ZDkzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDAyOTEwNzAsImV4cCI6NDg1NjA1MTA3MH0.UV6OJC5nJ-U3sG097Bbq0ckXNN8hrFyKXre7AGSeh20',
                    });
                }

                const Nftresponse = await Moralis.EvmApi.nft.getNFTMetadata({
                    address,
                    chain,
                    tokenId,
                });

            console.log(Nftresponse);

                // Mettez à jour le tableau nfts avec les données de Moralis
                this.nfts = [{
                    id: Nftresponse.jsonResponse.token_id, // Mettez à jour avec la clé correcte de votre objet response
                    image: JSON.parse(Nftresponse.jsonResponse.metadata).image, // Mettez à jour avec la clé correcte de votre objet response
                    address: Nftresponse.jsonResponse.token_address, // Mettez à jour avec la clé correcte de votre objet response
                    price: "12 APE", // Mettez à jour avec la clé correcte de votre objet response
                    metadatas: JSON.parse(Nftresponse.jsonResponse.metadata), // Mettez à jour avec la clé correcte de votre objet response
                }];
            } catch (error) {
                console.error('Erreur lors du chargement des données avec Moralis :', error);
            }
        },
    }
}


</script>

<style>
.title {
    font-size: 5rem;
}

.search-bar {
    width: 100%;
}
</style>