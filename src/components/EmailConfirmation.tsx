import { Alert, Button, Flex, Space, Text } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  email: string;
}
export const EmailConfirmation = ({ email }: Props) => {
  return (
    <Flex
      maw="600px"
      mx="auto"
      px="md"
      mih="400px"
      justify="center"
      align="center"
    >
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Email confirmation"
        color="cyan"
      >
        We have sent a confirmation email to {email}. Please check your inbox
        and
        <Text component="span" fw="bold">
          {email || "test@example.com"}
        </Text>
        to confirm your email address.
        <Space my="md" />
        <Button component={Link} href="/login" my="md">
          Login
        </Button>
      </Alert>
    </Flex>
  );
};
