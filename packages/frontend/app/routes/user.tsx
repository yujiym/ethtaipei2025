import { useParams } from "react-router";
import { Link } from "react-router";
import { useAccount } from "wagmi";
import Header from "~/components/Header";
import Skill from "~/components/user/Skill";
import SocialLink from "~/components/user/SocialLink";
import Writing from "~/components/user/Writing";
import { useUserAddr, useUserRecords } from "~/hooks/useUserRecords";
import type { Route } from "./+types/user";

export default function User(_: Route.ComponentProps) {
  const { uid } = useParams();
  const { isConnected } = useAccount();
  const { data, isLoading } = useUserRecords(uid);
  const { dataAddr, isLoadingAddr } = useUserAddr(uid);
  console.log("data", uid, data, dataAddr);

  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-wrap">
        <div className="w-full p-6 md:w-1/3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={uid}
              className="mb-6 h-32 w-32 rounded-full"
            />
          ) : (
            <div className="mb-6 h-32 w-32 rounded-full bg-purple-400" />
          )}
          <h1 className="font-bold font-serif text-3xl">{data?.name ?? ""}</h1>
          <p className="pt-8">{data?.description}</p>
          {false && isConnected && (
            <Link
              className="btn block text-center w-full mt-12 bg-black/20"
              to={`/${uid}/edit`}
            >
              Edit
            </Link>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <div className="grid w-full gap-6 p-4 lg:grid-cols-4 grid-cols-2 auto-rows-auto">
            {data?.["id.fkey"] && (
              <SocialLink name="fkey" id={data?.["id.fkey"]} />
            )}
            {data?.["xyz.farcaster"] && (
              <SocialLink name="farcaster" id={data?.["xyz.farcaster"]} />
            )}
            {data?.["com.twitter"] && (
              <SocialLink name="twitter" id={data?.["com.twitter"]} />
            )}
            {data?.["com.github"] && (
              <SocialLink name="github" id={data?.["com.github"]} />
            )}
            {data?.["com.instagram"] && (
              <SocialLink name="instagram" id={data?.["com.instagram"]} />
            )}
          </div>
          <div className="grid w-full gap-6 p-4 lg:grid-cols-2 grid-cols-1 auto-rows-auto">
            <Skill skills={data?.skills ?? ""} />
            <Writing />
          </div>
        </div>
      </main>
    </div>
  );
}
