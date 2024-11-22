import { Select } from "@mantine/core";
import React from "react";

export const SelectCarMake = () => {
  return (
    <Select
      label="Fabricante"
      placeholder="Toyota"
      data={["Toyota", "Chevrolet", "Ford", "Nissan"]}
      searchable
      nothingFoundMessage="No se encontraron resultados"
    />
  );
};
