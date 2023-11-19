<template>
  <div class="column justify-center items-center">
    <p class="text-center title">We are <span style="color: #4386DD;">available</span><br>for you</p>
  </div>
  <div class="contact-container q-ma-xl">
    <p class="text-center subtitle q-pa-md">Contact us</p>
    <div class="row justify-around">
      <q-input class="input-field min-field-width" outlined placeholder="Your first and last name"></q-input>
      <q-input class="input-field min-field-width" outlined placeholder="Your email"></q-input>
    </div>
    <div class="max-width-container column items-center">
      <div class="field-container">
        <q-input class="input-field q-mt-md" rounded outlined
          placeholder="What is the subject of your message ..."></q-input>
        <q-input class="input-field q-my-md" rounded outlined placeholder="Write your text here ..."></q-input>
      </div>
      <q-btn unelevated rounded class="send-button q-my-md">Send</q-btn>
    </div>
  </div>
  <div class="row justify-around q-my-lg">
    <img class="contact-graphic" src="/contact-graphic.png">
    <div class="contact-div column justify-center items-center">
      <div class="row items-center"><img class="contact-icon" src="/mail.png">
        <p class="contact-text">contact@solidart.com</p>
      </div>
      <div class="row items-center"><img class="contact-icon" src="/phone.png">
        <p class="contact-text">06.42.85.02.06</p>
      </div>
    </div>
  </div>
  <FooterMenu />
</template>

<script>

import FooterMenu from "src/components/FooterMenu.vue"

export default {
  components: {
    FooterMenu
  }
}

</script>

<style>
.title {
  font-size: 5rem;
}

.subtitle {
  font-size: 1.3rem;
}

.contact-container {
  background-color: #FFF6F6;
  border-radius: 20px;
}

.send-button {
  background-color: #fed5d2;
}

.input-field {
  background-color: white;
  border-radius: 30px;
}

.q-field--outlined {
  border: none !important;
}

.q-field__control:before {
  border: none !important;
}

.q-field--focused {
  border-color: #fed5d2 !important;
}

.q-field--highlighted {
  border-color: #fed5d2 !important;
}

.max-width-container {
  width: 100%;
}

.field-container {
  width: 70%;
}

.min-field-width {
  width: 40%;
}

.contact-vue {
  background-color: #f3eeff;
}

.contact-div {
  background-color: #f3eeff;
  width: 40%;
  border-radius: 20px;
}

.contact-graphic {
  width: 40%;
}

.contact-icon {
  width: 20%;
}

.contact-text {
  font-size: 1.3rem;
}
</style>