<script setup lang="ts">import { ethers } from 'ethers';
import { reactive, ref } from 'vue';
import abi from "../abi.json";
const {ethereum} = window
const payload = reactive({
  name: "",
  amount: "",
});

const raisedAmount = ref();
async function donate() {
  const sender = '0xF0BeC68e70158a7DBFe3FEBF929E12CcAB09432f'
  const tx = {
  from: sender,
  value: ethers.utils.parseEther(payload.amount),
}
  const contractAdd = "0x9E483Bc6615e6CEcBDD0719BfC825c7217667AC8";
      // eslint-disable-next-line no-undef
      const provider = new ethers.providers.Web3Provider(ethereum); 
      const contract = new ethers.Contract(contractAdd, abi, provider);
      const signer = contract.connect(provider)
  
        const data = await signer.getBalance();
        raisedAmount.value = data.toString();
        console.log('data::', data.toString());
        const donation = await signer.donate(tx);
        await donation.wait();
        console.log(donation)
      
    
    
  }
</script>

<template>
  <h1 class="">Donate on The EVMOS Network</h1>
  <h3>Amount Raised: {{raisedAmount}} TEVMOS</h3>
  <div class=" flex-rr">
    <div class="flex-r login-wrapper">
      <div class="login-text">
        <div class="logo">
          <span><i class="fab fa-speakap"></i></span>
          <span>Donate</span>
        </div>
        <p>Donate to make the Ecosystem a happy system </p>

        <form @submit.prevent="donate" class="flex-c">
          <div class="input-box">
            <span class="label">Name</span>
            <div class=" flex-r input">
              <input v-model="payload.name" type="text" placeholder="Please Enter your name">
              <i class="fas fa-at"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Amount</span>
            <div class="flex-r input">
              <input v-model="payload.amount" type="text" placeholder="Amount in Evmos">
              <i class="fas fa-lock"></i>
            </div>
          </div>

          <input  class="btn" type="submit" value="Donate">
        
        </form>

      </div>
    </div>
  </div>

</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 1px;
  padding: 2px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.flex-r,
.flex-c {
  justify-content: center;
  align-items: center;
  display: flex;
}
.flex-c {
  flex-direction: column;
}
.flex-r {
  flex-direction: row;
}



.login-text {
  background-color: #362f2f;
  max-width: 400px;
  min-height: 500px;
  border-radius: 10px;
  padding: 10px 20px;
}

.logo {
  margin-bottom: 20px;
}
.logo span,
.logo span i {
  font-size: 25px;
  color: #e5e8e8;
}

.login-text h1 {
  font-size: 25px;
}
.login-text p {
  font-size: 15px;
  color: #f4efefb2;
}

form {
  align-items: flex-start !important;
  width: 100%;
  margin-top: 15px;
}

.input-box {
  margin: 10px 0px;
  width: 100%;
}
.label {
  font-size: 15px;
  color: rgb(245, 242, 242);
  margin-bottom: 3px;
}
.input {
  background-color: #f6f0f0;
  padding: 0px 5px;
  border: 2px solid rgba(216, 216, 216, 1);
  border-radius: 10px;
  overflow: hidden;
  justify-content: flex-start;
}

input {
  border: none;
  outline: none;
  padding: 10px 5px;
  background-color: #f6f6f6;
  flex: 1;
}
.input i {
  color: rgba(0, 0, 0, 0.4);
}

.check span {
  color: #000000b2;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
}

.btn {
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 15px;
  background: linear-gradient(122.33deg, #68bed1 30.62%, #1e94e9 100%);
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  transition: all 0.3s linear;
}

.btn:hover {
  transform: translateY(-2px);
}
.extra-line {
  font-size: 15px;
  font-weight: 600;
}
.extra-line a {
  color: #0095b6;
}

</style>
