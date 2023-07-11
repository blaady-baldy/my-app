import React, { useEffect, useState } from "react";

import { useMoralis, useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useNotification } from "web3uikit";
import {
  adminABI,
  adminContractAddress,
} from "../../constants/adminConstants";     

function DecisionPage() {

    const { isWeb3Enabled, account, chainId: chainIdHex } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const [tempOwner, setTempOwner] = useState("");

    const adminAddress =
    chainId in adminContractAddress ? adminContractAddress[chainId][0] : null;

    const { runContractFunction: owner } = useWeb3Contract({
        abi: adminABI,
        contractAddress: adminAddress,
        functionName: "owner",
        params: {
        },
      });

    useEffect(()=>{
        if(isWeb3Enabled){
            findOwner();
        }
    },[isWeb3Enabled]);

    const findOwner = async() => {
        const tempOwner = await owner({
            onError: (error) => console.log(error),
          });
          setTempOwner(tempOwner.toString());
    }
  return (
    <div>
    {tempOwner.toLowerCase() === account && tempOwner!='undefined' ? <div>Owner</div> : <div>Not Owner</div>}
    </div>
  );
}

export default DecisionPage;