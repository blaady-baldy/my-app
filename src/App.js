// import logo from './logo.svg';
import ConnectWallet from './pages/ConnectWallet/ConnectWallet';
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { MoralisProvider } from "react-moralis";
import Home from './pages/Home/Home';
import './App.css';

function App() {

  return (
    <MoralisProvider initializeOnMount={false}>
    <div className="App">
      <header className="App-header">
      <div>
        <ConnectWallet></ConnectWallet>
      </div>
      <Home></Home>
      </header>
    </div>
    </MoralisProvider>
  );
}

export default App;
