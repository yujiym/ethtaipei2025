import { GithubLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import FarcasterLogo from "~/assets/farcaster.png";
import FkeyLogo from "~/assets/fkey.avif";
import { cn } from "~/lib/utils";

export default function Fkey({ name, id }: { id: string; name: string }) {
  if (!id) return null;
  let link = "";
  let style = "";
  switch (name) {
    case "fkey":
      link = `https://${id}`;
      style = "bg-gray-300/10";
      break;
    case "github":
      link = `https://github.com/${id}`;
      style = "bg-gray-300/10";
      break;
    case "instagram":
      link = `https://www.instagram.com/${id}`;
      style = "bg-fuchsia-300/10";
      break;
    case "farcaster":
      link = `https://warpcast.com/${id}`;
      style = "bg-indigo-300/10";
      break;
    case "twitter":
      link = `https://x.com/${id}`;
      style = "bg-gray-300/10";
      break;
    default:
      link = `https://${id}`;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="overflow-hidden aspect-square"
    >
      <div
        className={cn(
          "rounded-xl border border-black/5 shadow-sm px-6 py-4 h-auto max-w-full aspect-square relative",
          style,
        )}
      >
        {name === "instagram" && (
          <InstagramLogo size={40} className="text-fuchsia-600" />
        )}
        {name === "fkey" && (
          <img
            src={FkeyLogo}
            width={40}
            alt="Fluidkey"
            className="rounded-lg"
          />
        )}
        {name === "farcaster" && (
          <img
            src={FarcasterLogo}
            width={40}
            alt="Farcaster"
            className="rounded-lg"
          />
        )}
        {name === "github" && <GithubLogo size={40} />}
        {name === "twitter" && <XLogo size={40} />}
        <div className="text-right absolute bottom-5 right-4">{id}</div>
      </div>
    </a>
  );
}
