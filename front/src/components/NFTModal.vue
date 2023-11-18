<template>
    <q-dialog v-model="visible">
        <q-card class="dialog-container my-card">
            <q-img :src="nftSelected.image" />

            <q-card-section>

                <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        {{ nftSelected.id }}
                    </div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                    {{nftSelected.price}}・{{ nftSelected.adress }}
                </div>
                <div class="text-caption text-grey">
                    {{ nftSelected.metadatas }}
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
                <q-btn v-close-popup flat color="primary" label="Choose" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>

export default {
    props: {
        nftSelected: Object
    },
    data() {
        return {
            stars: 0
        }
    }
}

</script>

<style>

.dialog-container {
    background-color: #edf5ff;
    border-radius: 25px!important;
}

</style>