import { useState } from "react";
import { PinataSDK } from "pinata";

export interface PinataUploadResult {
  cid: string;
  size: number;
  timestamp: string;
  [key: string]: any;
}

const usePinataUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [uploadResult, setUploadResult] = useState<PinataUploadResult | null>(
    null
  );

  function uploadFileSync(
    file: File,
    filename: string,
    pinataJwt: string,
    pinataGateway: string,
    pinataGroup: string,
    onSuccess?: (result: PinataUploadResult) => void,
    onError?: (error: Error) => void
  ) {
    setIsUploading(true);
    setError(null);

    try {
      const pinata = new PinataSDK({
        pinataJwt: pinataJwt,
        pinataGateway: pinataGateway,
      });

      pinata.upload.public
        .file(file)
        .name(filename)
        .group(pinataGroup)
        .then((upload: any) => {
          setUploadResult(upload);
          if (onSuccess) onSuccess(upload);
        })
        .catch((err: any) => {
          console.error("Upload Error:", err);
          const error =
            err instanceof Error
              ? err
              : new Error("An error occupied during file uploading");
          setError(error);
          if (onError) onError(error);
        })
        .finally(() => {
          setIsUploading(false);
        });
    } catch (initError) {
      console.error("Pinata SDK Init Error:", initError);
      const error =
        initError instanceof Error
          ? initError
          : new Error("Failed to initialize Pinata SDK");
      setError(error);
      if (onError) onError(error);
      setIsUploading(false);
    }
  }

  function reset() {
    setIsUploading(false);
    setError(null);
    setUploadResult(null);
  }

  return {
    uploadFileSync,
    isUploading,
    error,
    uploadResult,
    reset,
  };
};

export default usePinataUpload;
