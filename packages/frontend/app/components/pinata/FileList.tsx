import React, { useState } from "react";
import usePinataFileList from "./usePinataList";

interface FileListProps {
  pinataJwt: string;
  pinataGateway: string;
  pinataGatewayKey: string;
  pinataGroup: string;
}

const FileListComponent: React.FC<FileListProps> = ({
  pinataJwt,
  pinataGateway,
  pinataGatewayKey,
}) => {
  const [groupId, setGroupId] = useState("");

  const { files, isLoading, error, fetchFiles } = usePinataFileList(
    pinataJwt,
    pinataGateway
  );

  // 明示的に検索を実行する
  const handleLookup = () => {
    fetchFiles(groupId);
  };

  return (
    <div>
      <h2>File List</h2>

      <input
        type="text"
        onChange={(e) => setGroupId(e.target.value)}
        placeholder="groupId(required)"
        disabled={isLoading}
      />
      <button onClick={handleLookup} disabled={isLoading || !groupId.trim()}>
        {isLoading ? "Looking up..." : ">> Lookup Group <<"}
      </button>

      {files.length === 0 ? (
        <p>File is not exists</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              <strong>{file.name}</strong>
              {" / "}
              <a
                href={`https://${pinataGateway}/ipfs/${file.cid}?pinataGatewayToken=${pinataGatewayKey}`}
                target="_blank"
                rel="noreferrer"
              >
                view file
              </a>
              <small>
                <p>CID: {file.cid}</p>
                <p>Size: {file.size} Byte</p>
                <p>Created At: {new Date(file.created_at).toLocaleString()}</p>
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileListComponent;
