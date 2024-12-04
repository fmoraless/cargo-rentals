"use client";
import {
  Box,
  Paper,
  Divider,
  Text,
  Stack,
  TextInput,
  PasswordInput,
  Group,
  Anchor,
  Button,
  Checkbox,
  LoadingOverlay,
} from "@mantine/core";
import { GoogleButton } from "./GoogleButton";
import classes from "./Style.module.css";
import { Logo } from "app/components/Navbar/Logo";
import Link from "next/link";
import { useSignupForm } from "app/hooks/useSignupForm";
import { signupWithEmailPassword } from "app/services/auth.service";
import { useState } from "react";
import { EmailConfirmation } from "app/components/EmailConfirmation";

export function Signup() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signupForm = useSignupForm();

  const handleSignup = async () => {
    const { email, password } = signupForm.values;

    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password);

    if (error) {
      console.error(error);
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
      setIsSubmitted(true);
      /* TODO: continuar ddesde 1: 06 */
      console.log("Signup successful");
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={signupForm.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <Box px="md" py="xl">
            <Paper
              maw="450px"
              radius="sm"
              w="100%"
              p="xl"
              my="xl"
              mx="auto"
              className={classes.formPaper}
              withBorder
            >
              <Text size="lg" fw={500}>
                Bienvenido a <Logo />
              </Text>
              <GoogleButton />
              <Divider
                label="or continue with"
                labelPosition="center"
                my="md"
              />
              <form onSubmit={signupForm.onSubmit(() => handleSignup())}>
                <Stack>
                  <TextInput
                    required
                    label="Email"
                    placeholder="hello@cargo.com"
                    radius="md"
                    value={signupForm.values.email}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "email",
                        event.currentTarget.value
                      )
                    }
                    error={signupForm.errors.email && signupForm.errors.email}
                  />
                  <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    radius="md"
                    value={signupForm.values.password}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "password",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.password && signupForm.errors.password
                    }
                  />
                  <PasswordInput
                    required
                    label="Confirm Password"
                    placeholder="Confirm Your password"
                    radius="md"
                    value={signupForm.values.confirmPassword}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "confirmPassword",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.confirmPassword &&
                      signupForm.errors.confirmPassword
                    }
                  />
                  <Checkbox
                    label="Accept terms and conditions"
                    checked={signupForm.values.terms}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "terms",
                        event.currentTarget.checked
                      )
                    }
                    error={signupForm.errors.terms && signupForm.errors.terms}
                  />
                </Stack>

                <Group justify="space-between" mt="xl">
                  <Anchor
                    component={Link}
                    href="/login"
                    type="button"
                    size="xs"
                    c="dimmed"
                  >
                    Already have an account? Login
                  </Anchor>
                  <Button type="submit" radius="x1">
                    Sign up
                  </Button>
                </Group>

                <Group mt="xl">
                  <Anchor
                    component={Link}
                    href="/providers"
                    type="button"
                    size="xs"
                    c="dimmed"
                  >
                    Want to rent your car? Create Provider Account.
                  </Anchor>
                </Group>
              </form>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
