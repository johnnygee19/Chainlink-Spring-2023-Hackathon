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
        "name": "name",
        "outputs": [
        {
            "name": "",
            "type": "string"
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
            "name": "spender",
            "type": "address"
        },
        {
            "name": "value",
            "type": "uint256"
        }
        ],
        "name": "approve",
        "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "blockReward",
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
        "name": "totalSupply",
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
            "name": "_blockReward",
            "type": "uint256"
        }
        ],
        "name": "setBlockReward",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "value",
            "type": "uint256"
        }
        ],
        "name": "transferFrom",
        "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
        {
            "name": "",
            "type": "uint8"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "capacity",
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
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        }
        ],
        "name": "balanceOf",
        "outputs": [
        {
            "name": "balance",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "destroy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
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
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
        {
            "name": "",
            "type": "string"
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
            "name": "to",
            "type": "address"
        },
        {
            "name": "value",
            "type": "uint256"
        }
        ],
        "name": "transfer",
        "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        },
        {
            "name": "spender",
            "type": "address"
        }
        ],
        "name": "allowance",
        "outputs": [
        {
            "name": "remaining",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "name": "initialSupply",
            "type": "uint256"
        },
        {
            "name": "capacity",
            "type": "uint256"
        },
        {
            "name": "_blockReward",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "_from",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "_to",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
        }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "_owner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "_spender",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
        }
        ],
        "name": "Approval",
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