import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { base, baseSepolia } from "viem/chains";
import { WagmiProvider, cookieToInitialState } from "wagmi";
import { getWagmiConfig } from "~/lib/wagmi";

export default function AppProviders({
  children,
  ld,
}: {
  children: ReactNode;
  ld: RootLoader;
}) {
  const [wagmiConfig] = useState(() => getWagmiConfig(ld?.ENV));
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={cookieToInitialState(wagmiConfig, ld?.cookie)}
    >
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={ld?.ENV?.CDP_CLIENT_API_KEY}
          chain={baseSepolia}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
