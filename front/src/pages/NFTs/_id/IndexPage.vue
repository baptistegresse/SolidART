<template>
    <q-page>
        <p class="text-center title"><span style="color: #4386DD;">NFTs</span>, from digital to<br>real world</p>
        <div class="left-part flex justify-center items-center">
            <img src="/nft-presentation">
        </div>
        <div class="right-part column">
            <div>
                <p>Le code de ton NFT :</p>
                <q-btn disabled rounded>{{nft.id}}</q-btn>
            </div>
            <div>
                <p>The size of the rendering :</p>
                <q-btn>8x8p</q-btn>
                <q-btn>B5</q-btn>
                <q-btn>A4</q-btn>
            </div>
            <div>
                <p>The final style :</p>
                <q-btn>Poster</q-btn>
                <q-btn>Frame</q-btn>
                <q-btn>Canvas</q-btn>
            </div>
            <div>
                <p>Finishes :</p>
                <ul>
                    <li>Posters are in <b>matte finish</b> by default</li>
                    <li>Frames are <b>black finished</b> by default</li>
                    <li>The canvases are in <b>printed finished</b> by default</li>
                </ul>
            </div>
            <div>
                <p>{{ nft.price }}</p>
                <q-btn rounded outlined>Cancel</q-btn>
                <q-btn rounded>Continue</q-btn>
            </div>
        </div>
    </q-page>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();

        return { route }
    },
    data() {
        return {
            nft: {
                id: "#1234",
                image: '/nft.png',
                adress: 'addresstonft.com',
                price: '12.00 ETH',
                metadatas: 'metadatas'
            }
        }
    }
}

</script>

<style>
.left-part {
    width: 50%;
}

.right-part {
    width: 50%;
}
</style>