<template>
  <q-page class="column">
    <div class="blue-background">
      <div class="title-container row justify-center items-center q-my-xl">
        <div class="column justify-center items-center">
          <p class="text-center title"><span style="color: #4386DD;">NFTs</span>, from digital to<br>real world</p>
          <q-btn @click="router.push('/marketplace')" class="marketplace-button" rounded>Go to market place</q-btn>
        </div>
      </div>
      <div class="q-my-xl">
        <p class="text-center second-title">How to do ?</p>
        <div class="cards-container row justify-around">
          <div class="blue-card card-style"><p class="text-center q-mt-xl">Connect your wallet</p></div>
          <div class="purple-card card-style"><p class="text-center q-mt-xl">You choose an NFT among
            those pledged to receive
            it at home</p></div>
          <div class="pink-card card-style"><p class="text-center q-mt-xl">You can pledge your NFTs
            to receive commissions &
            be part of the network SA</p></div>
        </div>
      </div>
    </div>
    <div class="security-container">
      <h4 class="text-center"><p>Everything is secure</p></h4>
      <div class="cards-container row justify-around">
        <div class="data-card card-style"><p class="text-center q-mt-xl">We do not retain any
          personal data</p></div>
        <div class="payment-card card-style"><p class="text-center q-mt-xl">Secure payment using
          the wallet or your ledger</p></div>
        <div class="support-card card-style"><p class="text-center q-mt-xl">Support available 24/7</p></div>
      </div>
    </div>
    <div class="partners-container q-mb-xl">
      <h4 class="text-center blue-title"><p>Make your favorite collection real</p></h4>
      <q-list class="row justify-around partners-list">
        <img class="partners-icons" src="partner1.png">
        <img class="partners-icons" src="partner2.png">
        <img class="partners-icons" src="partner3.png">
        <img class="partners-icons" src="partner4.png">
      </q-list>
    </div>
    <FooterMenu />
  </q-page>
</template>

<script>

import FooterMenu from 'src/components/FooterMenu.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    FooterMenu
  },
  setup() {
    const router = useRouter();

    return {router}
  }
}

</script>


<style>
.title {
  font-size: 5rem;
}

.marketplace-button {
  background-color: #4386dd;
  color: white;
}

.blue-background {
  background: linear-gradient(to bottom, #edf5ff 85%, #ffffff 60%);
}

.second-title {
  color: black;
  font-size: 1.3rem;
}

.cards-container {
  width: 100%;
}

.card-style {
  background-size: contain;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 10px;
  width: 20%;
}

.blue-card {
  background-image: url('/blue-card.png');
}

.purple-card {
  background-image: url('/purple-card.png');
}

.pink-card {
  background-image: url('/pink-card.png');
}

.security-container {
  background-color: #f3eeff;
}

.data-card {
  background-image: url('/data-card.png');
}

.payment-card {
  background-image: url('/security-card.png');
}

.support-card {
  background-image: url('/support-card.png');
}

.blue-title {
  color: #0F2D54;
}

.partners-icons {
  height: 80px;
}

</style>