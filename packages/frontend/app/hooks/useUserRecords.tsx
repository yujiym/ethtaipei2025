import { namehash } from "viem/ens";
import { useReadContracts } from "wagmi";
import { abi as REGISTRY_ABI } from "~/abis/L2Registry";
import { L2_REGISTRY_ADDRESS, TEXT_FORM_KEYS, TEXT_KEYS } from "~/lib/calls";

const l2RegistryContract = {
  address: L2_REGISTRY_ADDRESS,
  abi: REGISTRY_ABI,
} as const;

export default function useUserRecords(
  uid: string,
  mode: "read" | "form" = "read",
) {
  const TEXTS = mode === "read" ? TEXT_KEYS : TEXT_FORM_KEYS;
  const result = useReadContracts({
    contracts: TEXTS.map((key) => ({
      ...l2RegistryContract,
      functionName: "text",
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
