import { useAccount } from "wagmi";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Route } from "./+types/edit";

export default function Edit({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <p>Edit</p>
      <Footer />
    </div>
  );
}
