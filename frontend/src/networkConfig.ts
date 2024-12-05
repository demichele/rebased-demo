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
        packageId: '0xf768ffc7553f2971ffec6e619976aa5979874fceba437fe8ba21b88e49184d3c',
        treasuryCap:'0x6d420a53d6b028bc228aabafb2abdccf464507ce66d7184138340cfe946b624d',
        coinAddress: '0xcf457729cab801eb216c6f42ce33ac6954e835f09400174ca01778ca7d69fe5e'
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
