import { useState, useEffect } from "react";
import { PinataSDK, type FileListItem } from "pinata";

export interface PinataFile {
  id: string;
  cid: string;
  name: string;
  size: number;
  timestamp: string;
  [key: string]: any;
}

const useBlogList = (
  pinataJwt: string,
  pinataGateway: string,
  pinataGroupId: string
) => {
  const [files, setFiles] = useState<FileListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      if (!pinataGroupId) {
        setFiles([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const pinata = new PinataSDK({
          pinataJwt,
          pinataGateway,
        });

        const fileList = await pinata.files.public.list().group(pinataGroupId);
        setFiles(fileList.files || []);
      } catch (err) {
        console.error("Failed to fetch files:", err);
        const fetchError =
          err instanceof Error ? err : new Error("Failed to fetch file list");
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFiles();
  }, [pinataJwt, pinataGateway, pinataGroupId]);

  return { files, isLoading, error };
};

export default useBlogList;
