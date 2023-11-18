<template>
    <q-list class="row justify-around q-my-xl">
        <NFTCard class="nft-card" v-for="(nft, index) in nfts" v-bind:key="index" :nft="nft" @click="$emit('OpenModal', nft)" />
    </q-list>
</template>

<script>
import NFTCard from './NFTCard.vue';

export default {
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