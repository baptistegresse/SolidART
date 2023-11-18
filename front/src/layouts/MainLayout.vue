<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar class="toolbar grid col-12">
        <div class="col-4"><img class="header-logo" src="/logo.png"></div>
        <div class="col-4">
          <q-list class="links-list flex items-center justify-center">
            <q-btn class="header-links" v-for="(link, index) in linksList" v-bind:key="index"
              :class="{ 'q-btn-item--active': link.active }" @click="goToPage(link)" flat>{{
                link.title }}</q-btn>
          </q-list>
        </div>
        <div class="flex justify-end col-4">
          <q-btn class="wallet-button" outlined rounded><svg class="wallet-icon" xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>Connect Wallet</q-btn>
            <w3m-button />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue'
import { mainnet, arbitrum } from 'viem/chains'


export default {
  setup() {
    const linksList = [
      {
        title: 'Home',
        link: '/',
        active: true
      },
      {
        title: 'Marketplace',
        link: '/marketplace',
        active: false
      },
      {
        title: 'MyNft\'s',
        link: '/mynft',
        active: false
      },
      {
        title: 'Contact',
        link: '/contact',
        active: false
      }];
    const router = useRouter();
    // 1. Get projectId
    const projectId = 'YOUR_PROJECT_ID'

    // 2. Create wagmiConfig
    const metadata = {
      name: 'Web3Modal',
      description: 'Web3Modal Example',
      url: 'https://web3modal.com',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }

    const chains = [mainnet, arbitrum]
    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
    return { linksList, router, projectId, metadata, chains, wagmiConfig }
  },
  methods: {
    goToPage(page) {
      this.linksList.forEach(link => {
        link.active = false;
      });
      this.router.push(page.link);
      page.active = true
    },
  }
}



</script>


<style lang="scss">
.header {
  background-color: #edf5ff;
  width: 100%;
}

.toolbar {
  width: 100%;
}

.header-links {
  color: black;
}

.q-btn-item--active {
  color: #4386dd !important;
}

.header-logo {
  width: 40%;
}

.links-list {
  height: 120px;
}

.links-list:hover {
  background: none;
}

.wallet-button {
  color: white;
  background-color: #4386dd;
}

.wallet-icon {
  fill: #ffffff;
  margin-right: 3px;
}
</style>