import { FormProvider, getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import ConfirmDialog from "~/components/ConfirmDialog";
import Transaction from "~/components/CustomTransaction";
import InputWithError from "~/components/Input";
import SkillSelector from "~/components/SkillSelector";
import { setTextCalls } from "~/lib/calls";
import { GeneralSchema } from "~/schema/general";

export default function GeneralForm({
  uid,
  children,
  data,
}: { uid: string; children?: React.ReactNode; data: Record<string, string> }) {
  const [form, fields] = useForm({
    defaultValue: {
      name: data.name || "",
      avatar: data.avattar || "",
      description: data.description || "",
      com_twitter: data["com.twitter"] || "",
      com_instagram: data["com.instagram"] || "",
      com_github: data["com.github"] || "",
      xyz_farcaster: data["xyz.farcaster"] || "",
      id_fkey: data["id.fkey"] || "",
      url: data.url || "",
      url2: data.url2 || "",
      url3: data.url3 || "",
      url4: data.url4 || "",
      skills: data.skills || "",
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
    setCalls(setTextCalls(uid, values));
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
        <InputWithError label="Twitter/X" field={fields.com_twitter} />
        <InputWithError label="Github" field={fields.com_github} />
        <InputWithError label="Farcaster" field={fields.xyz_farcaster} />
        <InputWithError label="Intagram" field={fields.com_instagram} />
        <InputWithError
          label="FluidKey"
          field={fields.id_fkey}
          placeholder="yourname.fkey.id"
        />
        <a
          href="https://www.fluidkey.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="block text-right text-sm text-teal-600 hover:underline -mt-2"
        >
          ↗ Claim your fluidkey
        </a>
        <InputWithError
          label="Website"
          field={fields.url}
          placeholder="https://xxx.com"
        />
        <InputWithError field={fields.url2} />
        <InputWithError field={fields.url3} />
        <InputWithError field={fields.url4} />
        <label htmlFor="skills">Skills</label>
        <SkillSelector field={fields.skills} />
        <button className="btn w-full mt-6 mb-12" type="submit">
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
