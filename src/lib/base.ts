import { defineChain } from "thirdweb";

export default defineChain({
  id: 8453,
  name: "Base",
  rpc: `https://8453.rpc.thirdweb.com/${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  testnet: true,
  nativeCurrency: {
    name: "Base Ether",
    symbol: "ETH",
    decimals: 18,
  },
});
