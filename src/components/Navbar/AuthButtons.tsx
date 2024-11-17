import { Button, Group } from "@mantine/core";
import { primaryGradient } from "app/const/inedx";
import Link from "next/link";
import React from "react";

export const AuthButtons = () => {
  return (
    <Group>
      <Button component={Link} href="/login" variant="default">
        Sign in
      </Button>
      <Button
        component={Link}
        href="/signup"
        variant="gradient"
        gradient={primaryGradient}
      >
        Sign up
      </Button>
    </Group>
  );
};
