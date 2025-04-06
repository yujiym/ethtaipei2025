import { baseSepolia } from "viem/chains";
import { namehash } from "viem/ens";
import { useReadContract, useReadContracts } from "wagmi";
import { abi as REGISTRY_ABI } from "~/abis/L2Registry";
import { L2_REGISTRY_ADDRESS, TEXT_FORM_KEYS, TEXT_KEYS } from "~/lib/calls";

const l2RegistryContract = {
  address: L2_REGISTRY_ADDRESS,
  abi: REGISTRY_ABI,
} as const;

export function useUserRecords(uid: string, mode: "read" | "form" = "read") {
  const TEXTS = mode === "read" ? TEXT_KEYS : TEXT_FORM_KEYS;
  console.log("TEXTS", TEXTS);
  const result = useReadContracts({
    contracts: TEXTS.map((key) => ({
      ...l2RegistryContract,
      functionName: "text",
      chainId: baseSepolia.id,
      args: [namehash(`${uid}.epo.eth`), key],
    })),
  });

  return {
    data: result?.data
      ? Object.fromEntries(
          TEXTS.map((key, i) => [key, result.data?.[i]?.result || ""]),
        )
      : {},
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
  };
}

export function useUserRecord(uid: string, key: string) {
  const result = useReadContract({
    ...l2RegistryContract,
    functionName: "text",
    chainId: baseSepolia.id,
    args: [namehash(`${uid}.epo.eth`), key],
  });

  return {
    data: result?.data,
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
  };
}

export function useUserAddr(uid: string) {
  const result = useReadContract({
    ...l2RegistryContract,
    functionName: "addr",
    chainId: baseSepolia.id,
    args: [namehash(`${uid}.epo.eth`)],
  });

  return {
    data: result?.data,
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
  };
}
