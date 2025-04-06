import type { Route } from "./+types/blog";
import BlogList from "../components/pinata/BlogList";

export default function Pinata(_: Route.ComponentProps) {
  const pinata_jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YTYzYzlmMy00N2Q0LTRiZTYtYWU1NC0xOTIwZjZhOGI1NzEiLCJlbWFpbCI6InNpbG1pbjRAcHJvdG9uLm1lIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY1MzI0ZWI5NjkyOGExNGI3YmIzIiwic2NvcGVkS2V5U2VjcmV0IjoiMjUzM2QzZTIzNjhlZWYzN2IyMzhmNDVhMTExMmY4MDYwYjg2NDc2NmUzMDFiZTlhNjkwOGNlMTA5ZjAyODZhMCIsImV4cCI6MTc3NTM2NjMxMn0.Zt7lDW8AqHZ9Hfmn_w7iOtiMhSS2qacJPRKotVv0ytY";
  const pinata_gateway = "tan-petite-lynx-603.mypinata.cloud";
  const pinata_group = "2bdec488-b02b-4263-8c2d-513059c1e1d1";
  const pinata_gateway_key =
    "SqIgGiWXt9n5wKQGB_VyEnujRR2AHr6GxbxdnzwVvH-RAzRTaIFzqdjmJPiW32dv";
  return (
    <>
      <BlogList
        pinataJwt={pinata_jwt}
        pinataGateway={pinata_gateway}
        pinataGatewayKey={pinata_gateway_key}
        pinataGroup={pinata_group}
      />
    </>
  );
}
