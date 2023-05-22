import { ethers } from "ethers";

/*
    ABI stands for application binary interface which is basically a json representation of our
    smart contract so that our JavaScript client-side code knows which methods and variables
    are available in that smart contract.
*/
const faucetAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "lockTime",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "setWithdrawalAmount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "requestTokens",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "receive",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "setLockTime",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "withdrawalAmount",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "name": "tokenAddress",
            "type": "address"
        }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "to",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "Deposit",
        "type": "event"
    }
];

const faucetSmartContract = (provider) => {
  return new ethers.Contract(
    "0x34dc659F4Ba55De2C5144E0AbBf61e0765E10310",
    faucetAbi,
    provider
  );
};

export default faucetSmartContract;