import {
  FormProvider,
  getFormProps,
  useField,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useCallback } from "react";
import { Form, useNavigate } from "react-router";
import { useAccount } from "wagmi";
import ConfirmDialog from "~/components/ConfirmDialog";
import Transaction from "~/components/CustomTransaction";
import InputWithError from "~/components/Input";
import { registerCalls } from "~/lib/calls";
import { createRegisterSchema } from "~/schema/register";

export const submittion = async (formData: any, url: string, env: Env) =>
  await parseWithZod(formData, {
    schema: createRegisterSchema({
      async isIdUnique(id: string) {
        return true;
      },
    }),
    async: true,
  });

export default function RegisterForm({
  lastResult,
  children,
}: { lastResult: any; children?: React.ReactNode }) {
  const [form, fields] = useForm({
    defaultValue: {
      id: "",
    },
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createRegisterSchema() });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <FormProvider context={form.context}>
      {children}
      <Form method="post" {...getFormProps(form)}>
        <div className="relative">
          <InputWithError
            className="home-search z-10 min-w-[200px] bg-white"
            field={fields.id}
            placeholder="Your NAME"
          />
          <button className="absolute top-4 right-4" type="submit">
            <ph-magnifying-glass weight="bold" size="38" />
          </button>
        </div>
      </Form>
    </FormProvider>
  );
}

export const RegisterConfirmDialog = ({
  joinTitle,
  confirmOpen,
  setConfirmOpen,
}: {
  joinTitle: string;
  confirmOpen: boolean;
  setConfirmOpen: (open: boolean) => void;
}) => {
  const fieldId = useField("id");
  const id = fieldId?.[0]?.value ?? "";
  const { address } = useAccount();
  const navigate = useNavigate();

  const handleOnStatus = useCallback(
    (status: LifecycleStatus) => {
      if (status.statusName === "success") {
        navigate(`/${id}`);
      }
    },
    [id, navigate],
  );

  return (
    <ConfirmDialog
      title={joinTitle}
      open={confirmOpen}
      onOpenChange={() => setConfirmOpen(!confirmOpen)}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="id">Your ID</label>
          <input readOnly type="text" value={id} />
        </div>
      </div>
      <Transaction
        onStatus={handleOnStatus}
        calls={registerCalls(address, id, "")}
        disabled={!address || !id}
        btnText="Start"
        btnClass="mt-7"
      />
    </ConfirmDialog>
  );
};
