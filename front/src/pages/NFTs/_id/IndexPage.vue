<template>
    <q-page class="linear-background">
        <p class="text-center title">Choose your <span style="color: #4386DD;">style</span></p>
        <div class="row">
            <div class="left-part flex justify-center items-center">
                <img src="/nfts-presentation.png">
            </div>
            <div class="right-part column q-pl-lg">
                <div class="q-mb-md">
                    <p><b>Le code de ton NFT :</b></p>
                    <q-btn disabled rounded>{{nft.id}}</q-btn>
                </div>
                <div>
                    <p><b>The size of the rendering :</b></p>
                    <q-btn rounded>8x8p</q-btn>
                    <q-btn rounded class="q-ml-lg q-mr-lg">B5</q-btn>
                    <q-btn rounded>A4</q-btn>
                </div>
                <div class="q-mt-lg">
                    <p><b>The final style :</b></p>
                    <q-btn rounded>Poster</q-btn>
                    <q-btn rounded class="q-ml-lg q-mr-lg">Frame</q-btn>
                    <q-btn rounded>Canvas</q-btn>
                </div>
                <div class="q-mt-lg">
                    <p><b>Finishes :</b></p>
                    <ul>
                        <li>Posters are in <b>matte finish</b> by default</li>
                        <li>Frames are <b>black finished</b> by default</li>
                        <li>The canvases are in <b>printed finished</b> by default</li>
                    </ul>
                </div>
                <div>
                    <p><span style="font-size: 1.4rem"><b>{{ nft.price }}</b></span></p>
                    <q-btn rounded outlined class="q-mr-lg">Cancel</q-btn>
                    <q-btn rounded @click="router.push('/payment')">Continue</q-btn>
                </div>
            </div>
        </div>
    </q-page>
    <FooterMenu />
</template>

<script>
import { useRouter } from 'vue-router';
import FooterMenu from 'src/components/FooterMenu.vue'

export default {
    components: {
        FooterMenu
    },
    setup() {
        const router = useRouter();

        return { router }
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

.linear-background {
    background: linear-gradient(to right, #edf5ff 50%, #ffffff 50%);
}

.left-part {
    width: 50%;
}

.right-part {
    width: 50%;
}
</style>