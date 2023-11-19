<template>
    <div>
      <h1 class="title-full-blue q-my-xl text-center"><b>My NFTs</b></h1>
      <p class="subtitle text-center q-my-lg">
        <b>Do you want to <span style="color: #4386DD;">pledge your NFT</span> in order to receive commissions?</b>
      </p>
      <div class="list-container q-my-lg flex justify-center">
        <ul>
          <li class="q-my-md">You must have <b>$1000 en ApeCoin</b> in your wallet to earn commission.</li>
          <li class="q-my-md">You will receive <b>30%</b> commission directly in your wallet if your NFT is used.</li>
          <li class="q-my-md">When there is a sale, <b>10% is shared</b> between the entire community.</li>
        </ul>
      </div>
      <q-input class="search-bar" rounded outlined v-model="nftAddress" label="NFT Address" />
      <q-input class="search-bar" rounded outlined v-model="nftId" label="NFT ID" />
      <q-btn @click="addNFTAddress" color="primary">Add NFT</q-btn>
    </div>
    <NFTList :nfts="nfts" />
    <FooterMenu />
  </template>
  
  <script>
  import FooterMenu from 'src/components/FooterMenu.vue';
  import NFTList from 'src/components/NFTList.vue';
  import { ref } from 'vue';
  import Web3 from 'web3';
  import abi from 'src/abi.json';
  import Moralis from 'moralis';
  import { EvmChain } from '@moralisweb3/common-evm-utils';
  
  export default {
    components: {
      FooterMenu,
      NFTList,
    },
    created() {
      this.reloadData();
    },
    data() {
      return {
        nftAddress: '',
        nftId: '',
        nfts: [],
        visible: ref(false),
        nftSelected: {},
      };
    },
    methods: {
      async reloadData() {
        // ... Votre code existant pour récupérer les NFT ...
      },
  
      async addNFTAddress() {
        const web3 = new Web3(window.ethereum);
  
        const contractAddress = "0xed626994548a1853f9a6c5bf36e9cbd9ffeff023"; // Remplacez par l'adresse de votre contrat
        const contract = new web3.eth.Contract(abi, contractAddress);
  
        try {
          const accounts = await web3.eth.requestAccounts();
          const userAddress = accounts[0]; // Première adresse de l'utilisateur
          const nftId = this.nftId ? parseInt(this.nftId) : 0; // Assurez-vous que nftId est un nombre entier
  
          const result = await contract.methods.addAddress(this.nftAddress, nftId).send({ from: userAddress });
          console.log(result); // Affichez le résultat de la transaction dans la console
  
          // Réactualisez les données après l'ajout de l'adresse NFT
          this.reloadData();
        } catch (error) {
          console.error("Erreur lors de l'ajout de l'adresse NFT :", error);
        }
      },
    },
  };
  </script>
  
  <style>
  .title {
    font-size: 5rem;
  }
  
  .search-bar {
    width: 100%;
  }
  </style>
  