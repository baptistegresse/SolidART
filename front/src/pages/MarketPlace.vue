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
            nfts: [
                {
                    id: "#1234",
                    image: '/nft.png',
                    adress: 'addresstonft.com',
                    price: '12.00 ETH',
                    metadatas: 'metadatas'
                },
                {
                    id: "#1234",
                    image: '/nft.png',
                    adress: 'addresstonft.com',
                    price: '12.00 ETH',
                    metadatas: 'metadatas'
                },
                {
                    id: "#1234",
                    image: '/nft.png',
                    adress: 'addresstonft.com',
                    price: '12.00 ETH',
                    metadatas: 'metadatas'
                }
            ],
            visible: ref(false),
            nftSelected: {}
        }
    },
    methods: {
        async reloadData() {
            try {
                // Utilisez Axios pour effectuer une requête GET
                const response = await axios.get('http://localhost:3001/nft/test');

                console.log(response)

                const ALCHEMY_API_KEY = 'YlrY3VxtYYuJkOv6XDIYo-WoZX-ow-29';
                const NFT_CONTRACT_ADDRESS = response.data[0][1].owner;

                const alchemyURL = `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`;
                const nftApiUrl = `${alchemyURL}/metadata/${NFT_CONTRACT_ADDRESS}/${response.data[0][1].id}`;

                try {
                    const response = await axios.get(nftApiUrl);

                    if (response.status === 200) {
                        const metadata = response.data;
                        console.log('Métadonnées de la NFT:', metadata);
                    } else {
                        console.error('Erreur lors de la récupération des métadonnées de la NFT');
                    }
                } catch (error) {
                    console.error('Erreur:', error.message);
                }

                console.log(response.data)
            } catch (error) {
                // Gérez les erreurs ici
                console.error('Erreur lors de la récupération des données avec Axios:', error);
                this.error = error.message; // Stockez le message d'erreur dans une variable si nécessaire
            }
        }
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