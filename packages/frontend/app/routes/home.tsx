import { useEffect, useState } from "react";
import { useActionData } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import FlowContainer from "~/components/home/FlowContainer";
import RegisterForm, {
  submittion,
  RegisterConfirmDialog,
} from "~/components/home/RegisterForm";
import type { Route } from "./+types/home";

export const action = async ({ request, context }: Route.ActionArgs) => {
  const formData = await request.formData();
  const res = await submittion(
    formData,
    request.url,
    context?.cloudflare?.env as Env,
  );

  if (res.status !== "success") {
    return {
      result: res.reply(),
      showConfirm: false,
    };
  }
  return {
    result: res.reply(),
    showConfirm: true,
  };
};

export function meta(_: Route.MetaArgs) {
  return [
    { title: "EPO - Your HOME for *" },
    { name: "description", content: "Your HOME for *" },
  ];
}

export default function Home(_: Route.ComponentProps) {
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const data = useActionData();

  useEffect(() => {
    if (data?.showConfirm) {
      setConfirmOpen(true);
    }
  }, [data?.showConfirm]);

  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <h1 className="mt-20 text-center font-bold font-serif text-5xl">
          Your HOME for *
        </h1>
        <FlowContainer>
          <div className="-mt-24">
            <RegisterForm lastResult={data?.result}>
              <RegisterConfirmDialog
                joinTitle="👋 Claim your name"
                confirmOpen={confirmOpen}
                setConfirmOpen={setConfirmOpen}
              />
            </RegisterForm>
          </div>
        </FlowContainer>
      </main>
      <Footer />
    </div>
  );
}
