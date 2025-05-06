import { http } from "viem";
import { createConfig } from "wagmi";
import { linea, base, lineaSepolia, sepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [linea, base, lineaSepolia, sepolia],
  connectors: [metaMask()],
  transports: {
    [linea.id]: http(),
    [base.id]: http(),
    [lineaSepolia.id]: http(),
    [sepolia.id]: http(),
  },
});
