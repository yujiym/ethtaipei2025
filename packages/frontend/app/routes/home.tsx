import Footer from "~/components/Footer";
import Header from "~/components/Header";
import FlowContainer from "~/components/home/FlowContainer";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "EPO" }, { name: "description", content: "EPO Indentity" }];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <h1 className="text-center text-5xl font-bold mt-20 font-serif">
          EPO: Your HOME for *
        </h1>
        <FlowContainer>
          <div className="relative -mt-24">
            <input
              className="home-search min-w-[200px] bg-white z-10"
              type="search"
              placeholder="YOUR NAME"
            />
            <div className="absolute right-4 top-4">
              <ph-magnifying-glass weight="bold" size="38" />
            </div>
          </div>
        </FlowContainer>
      </main>
      <Footer />
    </div>
  );
}
