"use client";
import { useState } from "react";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./Style.module.css";
import { GoogleButton } from "./GoogleButton";
import Link from "next/link";
import { useLoginForm } from "app/hooks/useLoginForm";
import { loginWithEmailPassword } from "app/services/auth.service";

import { NotRegisteredAlert } from "./NotRegisteredAlert";
import { NotVerifiedAlert } from "./NotVerifiedAlert";
import { useRouter } from "next/navigation";

const errorMessage = "Invalid login credentials";

export function Login(props: PaperProps) {
  const [notRegistered, setNotRegistered] = useState(false);
  const [notVerified, setNotVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useLoginForm();
  const { push } = useRouter();

  const handleLogin = async () => {
    const { email, password } = form.values;

    setIsSubmitting(true);
    const { error, data } = await loginWithEmailPassword(email, password);
    setIsSubmitting(false);

    if (error && error.message === errorMessage) {
      console.error(error);
      setNotRegistered(true);
    } else {
      if (data.user == null || data.session == null) {
        setNotVerified(true);
      }
      form.reset();
      setNotRegistered(false);
      setNotVerified(false);
      push("/");

      console.log("Login successful", data);
    }
  };

  return (
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
        {...props}
      >
        <LoadingOverlay
          visible={isSubmitting}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Text size="lg" fw={500}>
          Bienvenido
        </Text>
        <GoogleButton />
        <Divider
          label="or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => handleLogin())}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              radius="md"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
            />
          </Stack>

          {notRegistered && <NotRegisteredAlert />}
          {notVerified && <NotVerifiedAlert />}

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/signup"
              type="button"
              size="xs"
              c="dimmed"
            >
              Don{`'`} t have an account? Register
            </Anchor>
            <Button type="submit" radius="x1">
              Login
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
  );
}
