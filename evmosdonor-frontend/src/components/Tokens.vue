<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
const posts = ref();
const getData = async () => {
 
  try {
    const res = await axios.get(
      `https://api.covalenthq.com/v1/9001/address/0xd5dca991c07ebfb5433a2b5b21021210b1c26777/balances_v2`,
      {
        headers: {
          "Content-type": "application/json",
          auth: {
            username: "ckey_65e10abf7c2743c99f1d646a289",
            password: ''
          } 
        },
      }
    );
    posts.value = res.data.items;
    console.log(res.data.items)
  } catch (e: any) {
    console.log(e);
  }
  // if(!response){
  //   `<div> error in getting data </div>`;
  // }
};
getData();
</script>

<template>
 <div style="overflow-x:auto;">
  <table >
    <h1 class="">Your Tokens</h1>
    <tr>
      <th>logo</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Balance</th>
    </tr>
    <tr>
      <td>logo URl</td>
      <td>Ether</td>
      <td>ETH</td>
      <td>50</td>
     
    </tr>
    <tr>
      <td>logo URl</td>
      <td>Ether</td>
      <td>ETH</td>
      <td>50</td>
     
    </tr>
  
  </table>
</div>


</template>
<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #090909}
</style>
