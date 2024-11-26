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
} from "@mantine/core";
import { GoogleButton } from "./GoogleButton";
import classes from "./Style.module.css";
import { Logo } from "app/components/Navbar/Logo";
import Link from "next/link";

export function Signup() {
  return (
    <>
      <Box px="md" py="xl">
        <Paper className={classes.formPaper} withBorder>
          <Text size="lg" fw={500}>
            Welcome to <Logo />
          </Text>
          <GoogleButton />
          <Divider label="or continue with" labelPosition="center" my="md" />
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
              <PasswordInput
                required
                label="Confirm Password"
                placeholder="Confirm Your password"
                radius="md"
              />
              <Checkbox label="Accept terms and conditions" />
            </Stack>

            <Group justify="apart" mt="xl">
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
  );
}
