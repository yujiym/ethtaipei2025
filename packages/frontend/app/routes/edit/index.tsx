import { useParams } from "react-router";
import { Link } from "react-router";
import Header from "~/components/Header";
import GeneralForm from "~/components/user/GeneralForm";
import { useUserRecords } from "~/hooks/useUserRecords";
import type { Route } from "./+types/index";

export default function EditGeneral({ loaderData }: Route.ComponentProps) {
  const { uid } = useParams();
  const { data, isLoading } = useUserRecords(uid, "form");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="contianer max-w-screen-sm mx-auto w-full">
        <h3 className="pb-4 text-center font-bold font-serif text-3xl">
          ✍️ Edit Info
        </h3>
        {isLoading ? null : <GeneralForm uid={uid} data={data} />}
        <Link
          className="btn block text-center w-full mt-12 bg-black/20"
          to={`/${uid}`}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
