import React, { useState } from "react";
import usePinataGroupCreator from "./usePinataGroupCreator";

interface GroupCreatorProps {
  // created: (result: string) => void;
  pinataJwt: string;
  pinataGateway: string;
}

const GroupCreator: React.FC<GroupCreatorProps> = ({
  pinataJwt,
  // created,
  pinataGateway,
}) => {
  const [groupName, setGroupName] = useState("");

  const { createGroup, isCreating, error, createdGroup } =
    usePinataGroupCreator({
      pinataJwt: pinataJwt,
      pinataGateway: pinataGateway,
    });

  const handleCreateGroup = async () => {
    if (!groupName.trim()) return;

    const result = await createGroup(groupName);
    if (result) {
      console.log("Group created successfully:", result);
      setGroupName(""); // 入力フィールドをクリア
    }
  };

  return (
    <div>
      <h2>Create New Pinata Group</h2>

      <div>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
          disabled={isCreating}
        />

        <button
          onClick={handleCreateGroup}
          disabled={isCreating || !groupName.trim()}
        >
          {isCreating ? "Creating..." : ">> Create Group <<"}
        </button>
      </div>

      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}

      {createdGroup && (
        <div style={{ color: "green" }}>
          <h3>Group Created Successfully!</h3>
          <p>
            <strong>Group ID:</strong> {createdGroup.id}
          </p>
          <p>
            <strong>Group Name:</strong> {createdGroup.name}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(createdGroup.createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default GroupCreator;
