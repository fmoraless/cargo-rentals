"use client";
import { useForm, UseFormReturnType } from "@mantine/form";
import { ISignupFormDetails } from "app/models";

export const useSignupForm = (): UseFormReturnType<ISignupFormDetails> => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },
    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val: string) =>
        val.length < 6 ? "Password must be at least 6 characters long" : null,
      confirmPassword: (val: string, { password }) =>
        val !== password ? "Passwords do not match" : null,
      terms: (terms: boolean) => (!terms ? "You must accept terms" : null),
    },
  });

  return form;
};
