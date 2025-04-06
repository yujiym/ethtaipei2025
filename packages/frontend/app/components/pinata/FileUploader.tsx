import React, { useState } from "react";
import usePinataUpload from "./usePinataUpload";
import type { PinataUploadResult } from "./usePinataUpload";

interface UploaderProps {
  pinataJwt: string;
  pinataGateway: string;
}

const FileUploader: React.FC<UploaderProps> = ({
  pinataJwt,
  pinataGateway,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filename, setFilename] = useState<string>("");
  const [groupId, setGroupId] = useState<string>("");
  const { uploadFileSync, isUploading, error, uploadResult, reset } =
    usePinataUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      reset();
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    uploadFileSync(
      selectedFile,
      filename,
      pinataJwt,
      pinataGateway,
      groupId,
      (result: PinataUploadResult) => {
        console.log("Upload Successul:", result);
      },
      (error) => {
        console.error("Upload Error:", error);
      }
    );
  };

  return (
    <div>
      <h2>Pinata File Uploader</h2>

      <div>
        <input
          type="text"
          onChange={(e) => setGroupId(e.target.value)}
          placeholder="groupId(required)"
          disabled={isUploading}
        />
        <input
          type="text"
          onChange={(e) => setFilename(e.target.value)}
          placeholder="filename(optional)"
        />
        <input type="file" onChange={handleFileChange} disabled={isUploading} />
        <button onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? "Uploading..." : ">> Upload <<"}
        </button>
      </div>

      {isUploading && <p>File uploading...</p>}

      {error && (
        <div style={{ color: "red" }}>
          <h3>Error!</h3>
          <p>{error.message}</p>
        </div>
      )}

      {uploadResult && (
        <div style={{ color: "green" }}>
          <h3>Uplaod Successful</h3>
          <p>
            <strong>CID:</strong> {uploadResult.cid}
          </p>
          <p>
            <strong>size:</strong> {uploadResult.size} Byte
          </p>
          <p>
            <strong>IPFS URL:</strong> https://gateway.pinata.cloud/ipfs/
            {uploadResult.cid}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
