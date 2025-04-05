import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Route } from "./+types/start";

export default function Start(_: Route.ComponentProps) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <h1 className="mt-20 text-center font-bold font-serif text-5xl">
          EPO: Your HOME
        </h1>
      </main>
      <Footer />
    </div>
  );
}
