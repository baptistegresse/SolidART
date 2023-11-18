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
          <div class="blue-card">Connect your wallet</div>
          <div class="purple-card">you choose an NFT among
            those pledged to receive
            it at home</div>
          <div class="pink-card">You can pledge your NFTs
            to receive commissions &
            be part of the network SA</div>
        </div>
      </div>
    </div>
    <div class="security-container">
      <h4 class="text-center">Everything is secure</h4>
      <div class="cards-container row justify-around">
        <div class="data-card">We do not retain any
          personal data</div>
        <div class="payment-card">Secure payment using
          the wallet or your ledger</div>
        <div class="support-card">Support available 24/7</div>
      </div>
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

.blue-card {
  width: 30%;
  background-color: #9BC2F5;
  border-radius: 10px;
}

.purple-card {
  width: 30%;
  background-color: #B7C2FF;
  border-radius: 10px;
}

.pink-card {
  width: 30%;
  background-color: #FFD5D2;
  border-radius: 10px;
}

.security-container {
  background-color: #f3eeff;
}

.data-card {
  width: 30%;
  background-color: white;
}

.payment-card {
  width: 30%;
  background-color: white;
}

.support-card {
  width: 30%;
  background-color: white;
}
</style>