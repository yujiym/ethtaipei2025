import { SignIn, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Logo from "~/assets/logo.svg";

export default function Header() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const hundleWallet = async () => {
    !address ? connect({ connector: connectors[0] }) : disconnect();
  };

  return (
    <header className="sticky top-0 bg-stone-5/5 px-4 backdrop-blur-sm">
      <div className="flex h-16 flex-row items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="EPO" height={52} width={52} />
        </Link>
        <button type="button" className="btn" onClick={() => hundleWallet()}>
          {!address ? (
            <span className="flex items-center">
              <SignIn size="28" />
              <span className="ml-2">Connect</span>
            </span>
          ) : (
            <span className="flex items-center">
              <SignOut size="28" />
              <span className="ml-2">Disconnect</span>
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
