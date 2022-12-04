// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
// import { ethers } from 'ethers';

// export const useAuthStore = defineStore({
//   id: "counter",
//   state: () => ({
//     signer: ,
//     contractAddress:"",
//   }),
//   getters: {
//     // doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     async login() {
//       const {ethereum} = window;
//       if (ethereum) {
//         await ethereum.enable(); // Enable the Ethereum client
//          const provider = new ethers.providers.Web3Provider(ethereum); // A connection to the Ethereum network
//          const signer =  provider.getSigner(); // Holds your private key and can sign things
//           this.signer = signer.getAddress();// Set the current address
     
//   },
// });
// // async registerUser(payload: LoginUser) {
// //   try {
// //     const res = await axios.post(
// //       `http://localhost:3000/users/register`,
// //       payload
// //     );
// //     this.hasError = false;
// //     this.success = true;
// //     this.successMsg;
// //     createToast(
// //       { title: "Success", description: "Registration successful" },
// //       {
// //         transition: "bounce",
// //         type: "success",
// //         showIcon: true,
// //         timeout: 3000,
// //       }
// //     );
// //     setTimeout(() => router.push({ path: "/login" }), 1000);
// //   } catch (error: any) {
// //     // const { msg } = error.response.data;
// //     // this.hasError = true;
// //     // this.errMsg = msg;
// //   }
// // },