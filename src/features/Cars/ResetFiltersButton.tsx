import { Button, Text } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import React from "react";

const ResetFiltersButton = () => {
  return (
    <Button variant="subtle">
      <IconRefresh size="14px" />{" "}
      <Text component="span" mx={2}>
        Borrar filtros
      </Text>
    </Button>
  );
};

export default ResetFiltersButton;
