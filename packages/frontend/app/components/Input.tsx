import { cn } from "~/lib/utils";

export default function Input({
  field,
  placeholder,
  hint,
  inputType = "text",
  className,
}: {
  field: any;
  placeholder?: string;
  hint?: string;
  inputType?: "number" | "text" | "email" | "password";
  className?: string;
}) {
  return (
    <div>
      <input
        key={field.key}
        name={field.name}
        type={inputType}
        className={cn(
          className,
          "w-full",
          field?.errors && "!border-red-300/50",
        )}
        placeholder={field.placeholder ?? placeholder}
        aria-describedby={field.ariaDescribedBy}
      />
      {hint && (
        <small id="displayname" className="px-2 pt-0.5 text-xs">
          ⓘ&nbsp;{hint}
        </small>
      )}
      {field?.errors?.map((_err) => (
        <p key={_err} className="px-2 text-red-400 text-xs">
          ❗ {_err}
        </p>
      ))}
    </div>
  );
}
