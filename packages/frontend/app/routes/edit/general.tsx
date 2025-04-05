import { useParams } from "react-router";
import Header from "~/components/Header";
import GeneralForm from "~/components/user/GeneralForm";
import useUserRecords from "~/hooks/useUserRecords";
import type { Route } from "./+types/general";

export default function EditGeneral({ loaderData }: Route.ComponentProps) {
  const { uid } = useParams();
  const { data, isLoading } = useUserRecords(uid, "form");

  console.log("data--", data);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="contianer max-w-screen-sm mx-auto w-full">
        <h3 className="pb-4 text-center font-bold font-serif text-3xl">
          ✍️ Edit Info
        </h3>
        {isLoading ? null : <GeneralForm uid={uid} data={data} />}
      </div>
    </div>
  );
}
