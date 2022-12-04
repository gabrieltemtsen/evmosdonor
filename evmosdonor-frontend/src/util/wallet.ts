import {ethers} from 'ethers'
import abi from "../abi.json";

const {ethereum } = window
export async function connectToWallet() {
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
}

export async function getContract(signer: any) {
  const contractAddress = "0xE1C7Ebe7660d52c851CD2ACfCb66a26e96a58fA0";
  return new ethers.Contract(contractAddress, abi, signer);
}
