import React, { useEffect, useState } from "react";

import { useMoralis, useWeb3Contract } from "react-moralis";
import console from "console-browserify";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useNotification } from "web3uikit";
import DecisionPage from "../DecisionPage/DecisionPage";

//----------------------------Contract Imports---------------------------------------//

// import {
//   adminABI,
//   adminContractAddress,
// } from "../../constants/Admin/adminConstants";

//----------------------------------------------------------------------------------//

function Home() {
    const { isWeb3Enabled, account, chainId: chainIdHex } = useMoralis();
  const [web3Enabled, setWeb3Enabled] = useState(false);

  useEffect(() => {
    if (isWeb3Enabled) {
      setWeb3Enabled(true);
    }
  }, [isWeb3Enabled]);

  //============================Contract Functions==================================//

//   const { runContractFunction: getTokenId } = useWeb3Contract({
//     abi: adminABI,
//     contractAddress: adminAddress,
//     functionName: "getTokenId",
//     params: {
//       _userAddress: userAccount,
//     },
//   });

//   const {
//     runContractFunction: registerUser,
//     isFetching,
//     isLoading,
//   } = useWeb3Contract({
//     abi: adminABI,
//     contractAddress: adminAddress,
//     functionName: "registerUser",
//     params: {},
//   });

//   //=============================================================================//

//   //-----------------------------------UseEffects----------------------------------//

//   useEffect(() => {
//     if (isWeb3Enabled) {
//       console.log("first useEffect");
//       if (account !== "" || account !== "null") {
//         setUserAccount(account);
//         console.log(account);
//       }
//     }
//   }, [isWeb3Enabled]);

//   useEffect(() => {
//     window.ethereum.on("accountsChanged", function (accounts) {
//       console.log("change in account");
//       getAccount();
//     });
//   }, []);

//   useEffect(() => {
//     if (isWeb3Enabled) {
//       if (userAccount) {
//         console.log("change in account, calling update ui");
//         console.log(userAccount);
//         console.log(adminAddress);
//         updateUI();
//       }
//     }
//   }, [userAccount]);

//   //--------------------------------------------------------------------------------//

//   //********************************Functions**************************************//

//   const updateUI = async () => {
//     const tempEntryTokenID = await getTokenId({
//       onError: (error) => console.log(error),
//     });
//     setEntryTokenId(tempEntryTokenID.toString());
//   };

//   const getAccount = async () => {
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const account = accounts[0];
//     setUserAccount(account);
//   };

//   const handleEntryTokenMint = async () => {
//     await registerUser({
//       onError: handleErrorNotification,
//       onSuccess: handleSuccess,
//       onComplete: () => setDisableSignup(false),
//     });
//     updateUI();
//   };

//   const handleErrorNotification = function (tx) {
//     dispatch({
//       type: "error",
//       message: "Signup Unsuccessfull",
//       title: "Error Occured",
//       position: "topR",
//       icon: "info",
//     });
//   };

//   const handleSuccess = async function (tx) {
//     await tx.wait(1);
//     handleNotification(tx);
//     updateUI();
//   };

//   const handleNotification = function (tx) {
//     dispatch({
//       type: "success",
//       message: "Sign Up Successful",
//       title: "Account Created",
//       position: "topR",
//       icon: "checkmark",
//     });
//   };

//   //**************************************************************************//
//   // if entryToken = -1 : wait , else if entryToken = 0 : no account else mainPage
//   console.log(chainId);
//   console.log(isWeb3Enabled);
  return (
    <div className="fullbox">
        {web3Enabled? <div>
            Connected
            <DecisionPage></DecisionPage>
        </div> : <div>Not connected </div>}
    </div>
  );
}

export default Home;