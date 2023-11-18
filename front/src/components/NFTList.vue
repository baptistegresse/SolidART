<template>
    <q-list class="row justify-around q-my-xl">
        <NFTCard class="nft-card" v-for="(nft, index) in nfts" v-bind:key="index" :nft="nft"
            @click="router.push('/marketplace/1')" />
    </q-list>
</template>

<script>
import NFTCard from './NFTCard.vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        return {router}
    },
    components: {
        NFTCard
    },
    props: {
        nfts: Array
    }
}

</script>

<style>
.nft-card {
    width: 28%;
}
</style>