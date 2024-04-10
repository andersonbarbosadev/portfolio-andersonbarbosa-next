"use client";

import { useId } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextField({
  name,
  label,
  helperText,
  type,
  ...other
}) {
  // Hooks
  const { control } = useFormContext();
  const id = useId();

  // Render
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-2">
          {!!label ? (
            <label htmlFor={id} className="text-base">
              {label}:
            </label>
          ) : null}

          <input
            {...field}
            id={id}
            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type={type}
            value={type === "number" && field.value === 0 ? "" : field.value}
            {...other}
            onChange={(event) => {
              if (type === "number") {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event.target.value);
              }

              if (other.onChange) {
                other.onChange(event);
              }
            }}
          />
          {!!helperText ? <span>{helperText}</span> : ""}
          {!!error && (
            <span className="text-sm text-red-400">{error?.message}</span>
          )}
        </div>
      )}
    />
  );
}
