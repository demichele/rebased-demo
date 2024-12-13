import { getFullnodeUrl } from "@iota/iota-sdk/client";
import { createNetworkConfig } from "@iota/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: '<Your_Package_Address>',
        treasuryCap: '<Your_TreasuryCap_Address>',
        coinAddress: '<Your_Token_Address>'
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
