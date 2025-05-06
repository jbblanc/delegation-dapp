import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWallet() {
  const { address } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="btn primary">
      {address ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        connectors.map((connector) => (
          <span key={connector.uid} onClick={() => connect({ connector })}>
            Connect with {connector.name}
          </span>
        ))
      )}
    </div>
  );
}
