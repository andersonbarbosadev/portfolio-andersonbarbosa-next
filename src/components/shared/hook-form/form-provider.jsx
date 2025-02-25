"use client"

import { FormProvider as Form } from "react-hook-form"

export default function FormProvider({ children, onSubmit, methods, formProps }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...formProps}>
        {children}
      </form>
    </Form>
  )
}
