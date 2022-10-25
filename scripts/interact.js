const { ethers } = require("hardhat");

const { getAPIKey, getContractAddress, getPrivateKey, getNetwork } = require("../Environment");

const API_KEY = getAPIKey();
const PRIVATE_KEY = getPrivateKey();
const CONTRACT_ADDRESS = getContractAddress();
const NETWORK = getNetwork();


const contract = require("../artifacts/contracts/RoosterToken.sol/RoosterToken.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network=NETWORK, API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const roosterTokenContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function getBalance() {
    return await roosterTokenContract.balanceOf(msg.sender);
}

async function mint(amount) {
    await roosterTokenContract.mint(msg.sender, Number(amount))
}