import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const NotVerifiedAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="Your account has not been verified"
      color="orange"
      my="sm"
    >
      Sorry! Your account has not been verified yet. Please check your email and
      verify your account.
    </Alert>
  );
};
