import { SpinnerGap } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import type { RootLoader } from "~/root";

function Loading() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 grid place-items-center bg-gray-500/60 backdrop-blur">
      <SpinnerGap weight="bold" size="80" className="animate-spin-slow" />
    </div>
  );
}

export default function AppHandler({
  ld,
  navigate,
  pathname,
  isNavigating,
}: {
  ld: RootLoader;
  navigate: (path: string) => void;
  pathname: string;
  isNavigating: boolean;
}) {
  const { isConnected, isConnecting } = useAccount();

  // redirect
  useEffect(() => {
    if (pathname !== "/" && !isConnected) {
      // navigate("/");
    }
  }, [isConnected, navigate, pathname]);

  return <>{!ld || isNavigating || (isConnecting && <Loading />)}</>;
}
