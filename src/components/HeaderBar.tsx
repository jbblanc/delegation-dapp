import { Link } from "react-router-dom";
import { ConnectWallet } from "./ConnectWallet";

export function HeaderBar() {
  return (
    <nav className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/delegation" className="btn btn-ghost">
          Delegation
        </Link>
      </div>
      <div className="flex-none pr-2">
        <ConnectWallet />
      </div>
    </nav>
  );
}
