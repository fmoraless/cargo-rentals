import { Select } from "@mantine/core";
import React from "react";

export const SelectCountry = () => {
  return (
    <Select
      label="País"
      placeholder="Chile"
      data={["Chile", "Paraguay", "Perú", "Ecuador"]}
      searchable
      nothingFoundMessage="No se encontraron resultados"
    />
  );
};
