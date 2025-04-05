import { abi as REGISTRAR_ABI } from "~/abis/L2Registrar";
import { abi as REGISTRY_ABI } from "~/abis/L2Registry";
import { abi as REVERSE_REGISTRY_ABI } from "~/abis/L2ReverseResolver";
import { abi as REVERSE_REGISTRY2_ABI } from "~/abis/L2ReverseResolver2";

// BASE SEPOLIA
const L2_REGISTRY_ADDRESS = "0x10f609f3a940c065afa3e0ee034e9812092b2d39";
const L2_REGISTRAR_ADDRESS = "0x22d99f3e0caf06db1335f6f0fcdee5ad19b84e2b";
const L2_REVERSE_REGISTRY_ADDRESS =
  "0xa12159e5131b1eEf6B4857EEE3e1954744b5033A";
const L2_REVERSE_REGISTRY2_ADDRESS =
  "0x00000BeEF055f7934784D6d81b6BC86665630dbA";
// const L2_REGISTRY_ADDRESS = "0xde364581c00a929edbf80cabbd6aaafb7f2edf62";
import { namehash, normalize } from "viem/ens";

export const registerCalls = (
  owner: `0x${string}` | undefined,
  label: string,
) =>
  !!owner && !!label
    ? [
        {
          address: L2_REGISTRAR_ADDRESS,
          abi: REGISTRAR_ABI,
          functionName: "register",
          args: [label, owner],
        },
        {
          address: L2_REVERSE_REGISTRY2_ADDRESS,
          abi: REVERSE_REGISTRY2_ABI,
          functionName: "setNameForAddr",
          args: [owner, normalize(`${label}.epo.eth`)],
        },
      ]
    : [];

export const setTextCalls = (
  node: `0x${string}` | undefined,
  key: string,
  value: string,
) =>
  !!node && !!key && !!value
    ? [
        {
          address: L2_REGISTRY_ADDRESS,
          abi: REGISTRY_ABI,
          functionName: "setText",
          args: [node, key, value],
        },
      ]
    : [];
