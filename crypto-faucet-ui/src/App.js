import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Faucet from './components/Faucet';
import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import faucetSmartContract from './ethereum/faucet'; 

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [faucetContract, setFaucetContract] = useState();

  // withdrawError and withdrawSuccess are called in the Faucet component
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  // This is called in the Navbar component
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_requestAccounts", []);
        /* get signer */
        setSigner(provider.getSigner());
        /* local contract instance */
        setFaucetContract(faucetSmartContract(provider));
        console.log("faucetContract");
        console.log(faucetContract);
        /* set active wallet address */
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFaucetContract(faucetSmartContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const getSigmaHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      // contract.connect( providerOrSigner ) ⇒ Contract
      const faucetContractWithSigner = faucetContract.connect(signer);
      const resp = await faucetContractWithSigner.requestTokens();
      setWithdrawSuccess("Operation succeeded - enjoy your tokens!");
      setTransactionData(resp.hash);
      console.log(resp.hash);
    } catch (err) {
      setWithdrawError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div>
      <Navbar connectMetaMask={connectWallet} wallet={walletAddress} />
      <Hero />
      <Faucet error={withdrawError} success={withdrawSuccess} handler={getSigmaHandler} tx={transactionData} wallet={walletAddress}/>
      <Footer />
    </div>
  );
}

export default App;