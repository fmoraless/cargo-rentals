"use client";
import {
  Center,
  SegmentedControl,
  Text,
  useMantineColorScheme,
} from "@mantine/core";

import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  console.log(colorScheme);

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value) => setColorScheme(value as any)}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <IconSun size="1rem" stroke={1.5} />
              <Text ml="xs">Light</Text>
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon size="1rem" stroke={1.5} />
              <Text ml="xs">Dark</Text>
            </Center>
          ),
        },
      ]}
    />
  );
};
