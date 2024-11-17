"use client";
import { Drawer, Button, Burger, Box, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavigationMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        title={<Logo />}
        transitionProps={{
          transition: "slide-right",
        }}
      >
        <AuthButtons />
        <Center hiddenFrom="sm" pos="fixed" bottom={0} w="90%" py={8}>
          <ThemeSwitcher />
        </Center>
      </Drawer>
      <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />
    </>
  );
};
