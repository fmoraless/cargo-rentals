"use  client";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
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

export function Login(props: PaperProps) {
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
        <Text size="lg" fw={500}>
          Bienvenido
        </Text>
        <GoogleButton />
        <Divider
          label="or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              radius="md"
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
            />
          </Stack>

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
