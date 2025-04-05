import {
  FormProvider,
  getFormProps,
  useField,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { namehash } from "viem/ens";
import ConfirmDialog from "~/components/ConfirmDialog";
import Transaction from "~/components/CustomTransaction";
import InputWithError from "~/components/Input";
import { setTextCalls } from "~/lib/calls";
import { GeneralSchema } from "~/schema/general";

export default function GeneralForm({
  children,
}: { children?: React.ReactNode }) {
  const [form, fields] = useForm({
    defaultValue: {
      name: "",
      description: "",
      "com.twitter": "",
      "com.instagram": "",
      "com.github": "",
      "xyz.farcaster": "",
      url: "",
      url2: "",
      url3: "",
      url4: "",
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: GeneralSchema });
    },
  });

  const [calls, setCalls] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    setConfirmOpen(true);
    console.log(
      values,
      setTextCalls("test6", [
        { key: "name", value: values.name },
        { key: "description", value: values.description },
        { key: "com.twitter", value: values["com.twitter"] },
        { key: "com.instagram", value: values["com.instagram"] },
        { key: "com.github", value: values["com.github"] },
        { key: "xyz.farcaster", value: values["xyz.farcaster"] },
      ]),
    );
    setCalls(
      setTextCalls("test6", [
        { key: "name", value: values.name },
        { key: "description", value: values.description },
        { key: "com.twitter", value: values["com.twitter"] },
        { key: "com.instagram", value: values["com.instagram"] },
        { key: "com.github", value: values["com.github"] },
        { key: "xyz.farcaster", value: values["xyz.farcaster"] },
      ]),
    );
  };

  return (
    <FormProvider context={form.context}>
      {children}
      <form className="form" {...getFormProps(form)} onSubmit={handleSubmit}>
        <InputWithError
          label="Name"
          field={fields.name}
          placeholder="Your display name"
        />
        <InputWithError
          label="Description"
          inputType="textarea"
          field={fields.description}
          placeholder="Tell yourself"
        />
        <InputWithError label="Twitter/X" field={fields["com.twitter"]} />
        <InputWithError label="Github" field={fields["com.github"]} />
        <InputWithError label="Farcaster" field={fields["xyz.farcaster"]} />
        <InputWithError label="Intagram" field={fields["com.instagram"]} />
        <button className="btn w-full" type="submit">
          Save
        </button>
        <GeneralConfirmDialog
          joinTitle="Update your profile"
          calls={calls}
          confirmOpen={confirmOpen}
          setConfirmOpen={setConfirmOpen}
        />
      </form>
    </FormProvider>
  );
}

export const GeneralConfirmDialog = ({
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
