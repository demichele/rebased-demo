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
        treasuryCap: '0x6d420a53d6b028bc228aabafb2abdccf464507ce66d7184138340cfe946b624d',
        coinAddress: '0x28f1aef1424da9817a55de3184b8a960e5eaf5968e185a8d318876bf3c8e7de9'
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
