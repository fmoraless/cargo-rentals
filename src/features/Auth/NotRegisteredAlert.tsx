import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const NotRegisteredAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User not found"
      color="red"
      my="sm"
    >
      We{"'"}re sorry! Your account has not been verified yet. Please check your
      email and verify your account.
    </Alert>
  );
};
