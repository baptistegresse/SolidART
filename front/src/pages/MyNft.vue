<template>
    <q-page class="q-ma-lg">
        <h1 class="title-full-blue q-my-xl text-center"><b>My NFTs</b></h1>
        <p class="subtitle text-center q-my-lg"><b>Do you want to <span style="color: #4386DD;">pledge your NFT</span> in order
                to receive commissions ?</b></p>
        <div class="list-container q-my-lg flex justify-center">
            <ul>
                <li class="q-my-md">You must have <b>$1000 en ApeCoin</b> in your wallet to earn commission.</li>
                <li class="q-my-md">You will receive <b>30%</b> commission directly in your wallet if your NFT is used.</li>
                <li class="q-my-md">When there is a sale, <b>10% is shared</b> between the entire community.</li>
            </ul>
        </div>
        <p class="subtitle q-my-lg"><b>My NFTs</b></p>
        <q-list class="row">
            <img class="plus-icon q-pa-md" src="/add-nft.png">
            <NFTList :nfts="nfts" />
        </q-list>
    </q-page>
    <FooterMenu />
</template>

<script>

import NFTList from 'src/components/NFTList.vue';
import FooterMenu from 'src/components/FooterMenu.vue';

export default {
    components: {
        NFTList,
        FooterMenu
    },
    data() {
        return {
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
                },
            ]
        }
    }
}

</script>

<style>
.title-full-blue {
    font-size: 5rem;
    color: #4386DD;
}

.subtitle {
    font-size: 1.5rem;
}

.list-container {
    width: 100%;
}

.add-nft-container {
    background-color: #FFD5D2;
    width: 28%;
    border-radius: 20px;
    cursor: pointer;
}

.plus-icon {
    width: 28%;
    cursor: pointer;
}
</style>