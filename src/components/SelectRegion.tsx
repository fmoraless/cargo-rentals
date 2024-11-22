import { Select } from "@mantine/core";
import React from "react";

export const SelectRegion = () => {
  return (
    <Select
      label="Región"
      placeholder="Metropolitana"
      data={["Metropolitana", "Valparaíso", "Biobío", "Maule"]}
      searchable
      nothingFoundMessage="No se encontraron resultados"
    />
  );
};
