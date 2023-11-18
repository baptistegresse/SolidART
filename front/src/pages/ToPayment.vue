<template>
    <q-page>
        <p class="text-center title">Enter your <span style="color: #4386DD;">information</span><br>to receive the visual</p>
        <div>
            <div class="recap-container row justify-around q-mb-lg">
                <q-btn rounded disabled>#1906</q-btn>
                <q-btn rounded disabled>8x8p</q-btn>
                <q-btn rounded disabled>Poster</q-btn>
                <q-btn rounded disabled>130 APE</q-btn>
            </div>
            <div class="justify-around row q-mb-lg">
                <q-input style="width: 35%" placeholder="Your first and last name" rounded outlined></q-input>
                <q-input style="width: 35%" placeholder="Your email" rounded outlined></q-input>
            </div>
            <div class="justify-around row q-mb-lg">
                <q-input placeholder="Adresse" rounded outlined style="width: 40%;"></q-input>
                <q-input placeholder="ZIP Code" rounded outlined style="width: 25%;"></q-input>
                <q-input placeholder="City" rounded outlined style="width: 25%;"></q-input>
            </div>
            <div class="q-mb-lg">
                <p class="q-ma-lg"><b>Know everything :</b></p>
                <ul>
                    <li><b>30%</b> of the total price will be donated to the holder who pledged their NFT.</li>
                    <li><b>10%</b> of the total price will be shared with the entire rest of the community.</li>
                </ul>
            </div>
            <div class="flex justify-center">
                <q-btn class="payment-button" rounded>Proceed to payment</q-btn>
            </div>
        </div>
    </q-page>
</template>

<style>

.title {
  font-size: 5rem;
}

.payment-button {
  color: white;
  background-color: #4386dd;
}

</style>