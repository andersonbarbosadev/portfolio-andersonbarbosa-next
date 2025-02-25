"use client"

import { useId } from "react"
import { Controller, useFormContext } from "react-hook-form"

export default function RHFTextArea({ name, label, helperText, type, ...other }) {
  // Hooks
  const { control } = useFormContext()
  const id = useId()

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

          <textarea
            {...field}
            id={id}
            className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 ring-0 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
            type={type}
            value={field.value}
            rows="4"
            {...other}
            onChange={(event) => {
              field.onChange(event.target.value)

              if (other.onChange) {
                other.onChange(event)
              }
            }}
          />
          {!!helperText ? <span>{helperText}</span> : ""}
          {!!error && <span className="text-sm text-red-400">{error?.message}</span>}
        </div>
      )}
    />
  )
}
