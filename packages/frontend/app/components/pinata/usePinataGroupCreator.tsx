import { useState } from "react";
import { PinataSDK } from "pinata";

interface CreateGroupResult {
  id: string;
  name: string;
  createdAt: string;
  [key: string]: any;
}

interface UsePinataGroupCreatorProps {
  pinataJwt: string;
  pinataGateway: string;
}

const usePinataGroupCreator = ({
  pinataJwt,
  pinataGateway,
}: UsePinataGroupCreatorProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [createdGroup, setCreatedGroup] = useState<CreateGroupResult | null>(
    null
  );

  // グループ作成関数
  const createGroup = async (groupName: string) => {
    if (!groupName.trim()) {
      setError(new Error("Group name cannot be empty"));
      return null;
    }

    setIsCreating(true);
    setError(null);

    try {
      const pinata = new PinataSDK({
        pinataJwt,
        pinataGateway,
      });

      const result = await pinata.groups.public.create({
        name: groupName,
      });

      setCreatedGroup(result);
      return result;
    } catch (err) {
      console.error("Failed to create group:", err);
      const error =
        err instanceof Error ? err : new Error("Failed to create group");
      setError(error);
      return null;
    } finally {
      setIsCreating(false);
    }
  };

  return {
    createGroup,
    isCreating,
    error,
    createdGroup,
  };
};

export default usePinataGroupCreator;
