const express = require('express');
const { ethers, EtherscanProvider} = require('ethers');
require('dotenv').config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CONTRACT_ABI = require('./abi.json');

const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI);
provider = new EtherscanProvider("goerli");

async function test() {
    await provider.getBlockNumber().then((blockNumber) => {
        console.log(blockNumber);
    })
}

module.exports = {
    test
};


