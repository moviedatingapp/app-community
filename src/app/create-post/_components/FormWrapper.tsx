"use client";
import React, { ReactNode } from "react";
// import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";

export default function FormWrapper({ children }: { children: ReactNode }) {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form>{children}</form>
    </FormProvider>
  );
}
