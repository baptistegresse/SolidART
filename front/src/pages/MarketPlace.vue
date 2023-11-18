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