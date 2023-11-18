<template>
    <div class="nft-container">
        <img class="nft-image" :src="nft.image">
        <div class="price-container row justify-center">
            <div class="price-second-container row justify-between items-center">
                <p class="nft-info"><b>{{ nft.id }}</b></p>
                <p class="nft-info"><b>{{ nft.price }}</b></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        nft: Object
    }
}

</script>

<style>
.nft-container {
    position: relative;
    cursor: pointer;
}

.nft-image {
    width: 100%;
}

.price-container {
    width: 100%;
    background-color: #edf5ff;
    position: absolute;
    bottom: 6px;
    border-radius: 20px;
}

.price-second-container {
    width: 80%;
}

.nft-info {
    font-size: 1.3rem;
}
</style>