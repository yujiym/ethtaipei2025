import { useActionData } from "react-router";
import Header from "~/components/Header";
import GeneralForm from "~/components/user/GeneralForm";
import type { Route } from "./+types/general";

export const action = async ({ request, context }: Route.ActionArgs) => {};

export default function EditGeneral({ loaderData }: Route.ComponentProps) {
  const data = useActionData();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="contianer max-w-screen-sm mx-auto w-full">
        <h3 className="pb-4 text-center font-bold font-serif text-3xl">
          ✍️ Edit Info
        </h3>
        <GeneralForm />
      </div>
    </div>
  );
}
