import { useState } from "react";
import { PinataSDK, type FileListItem } from "pinata";

export interface PinataFile {
  id: string;
  cid: string;
  name: string;
  size: number;
  timestamp: string;
  [key: string]: any;
}
const usePinataFileList = (pinataJwt: string, pinataGateway: string) => {
  const [files, setFiles] = useState<FileListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchFiles = async (groupId: string) => {
    if (!groupId) return;

    setIsLoading(true);
    setError(null);

    try {
      const pinata = new PinataSDK({
        pinataJwt,
        pinataGateway,
      });

      const fileList = await pinata.files.public.list().group(groupId);
      setFiles(fileList.files || []);
    } catch (err) {
      console.error("Failed to fetch files:", err);
      const fetchError =
        err instanceof Error ? err : new Error("Failed to fetch file list");
      setError(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  return { files, isLoading, error, fetchFiles };
};

export default usePinataFileList;
