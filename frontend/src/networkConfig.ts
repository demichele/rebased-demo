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
        packageId: '0xa8dab537682c58818c057e3db8caab4eabe80a53a90649f0b6af880c0e15d1b8',
        treasuryCap: '0x12f7cebe7edd0eb28ff96a8ef414b0c3bdc79cd71192393e2af7b310905e9ca1',
        coinAddress: '0x1e489a66215cd2fc0fea7ed3801fdf1eed7375ed3eefbb44e12abaab2391ce10',
        metadata: '0x9e8980190be22af922e9f374e4ece1a97c402ecd252d25ca18d8eb52b1b45d3c'
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
