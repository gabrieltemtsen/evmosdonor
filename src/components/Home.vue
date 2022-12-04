<script setup lang="ts">
import {ethers} from 'ethers'
import { ref } from 'vue';
import abi from "../abi.json";

defineProps<{
  msg: string
}>()
const account = ref();
const {ethereum} =window;
//Enable Web3
async function loadWeb3(){
    if(ethereum) {
        window.web3 = new Web3(ethereum);
    }
}
const connectToWallet = async () => {
// const provider = new ethers.providers.Web3Provider(ethereum); 
// await provider.send("eth_requestAccounts", []); 
// console.log(provider.getSigner)

if (typeof ethereum !== 'undefined') {
      // eslint-disable-next-line no-undef
      const contractAdd = "0x9E483Bc6615e6CEcBDD0719BfC825c7217667AC8";
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(ethereum); 
      const signer = provider.getSigner()
      account.value = accounts[0];
      return new ethers.Contract(contractAdd, abi, provider);

    }
   
}
connectToWallet();console.log("xxxxxXXXXXXXXXXX", account.value )

</script>

<template>
  <div class="move">
  <button v-if="!account" class="connect">Connect Wallet</button> 
  <button v-if="account" class="connect">Address: {{account}}</button> 

  </div>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Donate on the EVMOS Blockchain Network to help the growth of the Ecosystem.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.connect {
  background-color: #111211; /* Green */
  border-radius: 5px;
  cursor: pointer;
  border: #111211;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
