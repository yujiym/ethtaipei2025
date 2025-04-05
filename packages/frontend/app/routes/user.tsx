import { useParams } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Skill from "~/components/user/Skill";
import Writing from "~/components/user/Writing";
import type { Route } from "./+types/user";

export default function User(_: Route.ComponentProps) {
  const { uid } = useParams();

  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-wrap">
        <div className="w-full p-6 md:w-1/3">
          <img
            src="https://res.cloudinary.com/base-web/image/fetch/w_128/f_webp/https%3A%2F%2Fbase.mypinata.cloud%2Fipfs%2Fbafybeicmbmchjfn4ahlyxnqswdaeim4ornfkdf4ahlcc4txpr6y4r33rri%3FpinataGatewayToken%3Df6uqhE35YREDMuFqLvxFLqd-MBRlrJ1qWog8gyCF8T88-Tsiu2IX48F-kyVti78J"
            alt={uid}
            className="rounded-full w-32 h-32 mb-6"
          />
          <h1 className="font-bold font-serif text-3xl">Yuji Yamaguchi</h1>
          <p className="pt-8">My description aaaaaa.....</p>
        </div>
        <div className="w-full p-4 md:w-2/3 grid gap-6 grid-cols-1 md:grid-cols-2">
          <Writing />
          <Skill />
        </div>
      </main>
      <Footer />
    </div>
  );
}
