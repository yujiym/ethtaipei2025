import { FormProvider, getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import ConfirmDialog from "~/components/ConfirmDialog";
import Transaction from "~/components/CustomTransaction";
import InputWithError from "~/components/Input";
import { setTextCalls } from "~/lib/calls";
import { SkillSchema } from "~/schema/skills";

export default function SkillForm({
  uid,
  children,
  data,
}: { uid: string; children?: React.ReactNode; data: Record<string, string> }) {
  const [form, fields] = useForm({
    defaultValue: {
      skills: data?.skills ?? "",
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SkillSchema });
    },
  });

  const [calls, setCalls] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    setConfirmOpen(true);
    setCalls(setTextCalls(uid, values));
  };

  return (
    <FormProvider context={form.context}>
      {children}
      <form className="form" {...getFormProps(form)} onSubmit={handleSubmit}>
        <InputWithError
          label="Skills"
          field={fields.name}
          placeholder="Your display name"
        />
        <button className="btn w-full" type="submit">
          Save
        </button>
        <SkillsConfirmDialog
          joinTitle="Update your skills"
          calls={calls}
          confirmOpen={confirmOpen}
          setConfirmOpen={setConfirmOpen}
        />
      </form>
    </FormProvider>
  );
}

export const SkillsConfirmDialog = ({
  joinTitle,
  confirmOpen,
  calls,
  setConfirmOpen,
}: {
  joinTitle: string;
  confirmOpen: boolean;
  calls: any[];
  setConfirmOpen: (open: boolean) => void;
}) => {
  return (
    <ConfirmDialog
      title={joinTitle}
      open={confirmOpen}
      onOpenChange={() => setConfirmOpen(!confirmOpen)}
    >
      <Transaction calls={calls} btnText="OK" btnClass="mt-7" />
    </ConfirmDialog>
  );
};
