import React from "react";
import useBlogList from "./useBlogList";

interface BlogListProps {
  pinataJwt: string;
  pinataGateway: string;
  pinataGatewayKey: string;
  pinataGroup: string;
}

const BlogListComponent: React.FC<BlogListProps> = ({
  pinataJwt,
  pinataGateway,
  pinataGatewayKey,
  pinataGroup,
}) => {
  const { files, isLoading, error } = useBlogList(
    pinataJwt,
    pinataGateway,
    pinataGroup
  );

  return (
    <>
      <div className="overflow-hidden bg-white">
        <div className="px-4 py-3 bg-gray-50">
          <h2 className="font-medium text-gray-700">Blog</h2>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        <ul className="divide-y divide-gray-200">
          {files.map((file) => (
            <li key={file.id} className="hover:bg-gray-50">
              <div className="flex items-center px-4 py-3">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    CID: {file.cid}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    created_at: {new Date(file.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="flex-shrink-0 ml-2">
                  <button className="text-sm text-blue-500 hover:text-blue-700">
                    <a
                      href={`https://${pinataGateway}/ipfs/${file.cid}?pinataGatewayToken=${pinataGatewayKey}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>Read</strong>
                    </a>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogListComponent;
