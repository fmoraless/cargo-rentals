"use client";
import { Select } from "@mantine/core";
import { optionsFilter } from "app/functions";
import { ReactNode } from "react";

const fuelTypes = [
  { label: "Any", value: "Any" },
  { label: "Gasoline", value: "Gasoline" },
  { label: "Diesel", value: "Diesel" },
  { label: "Electric", value: "Electric" },
  { label: "Hybrid", value: "Hybrid" },
];

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
  addAny?: boolean;
  required?: boolean;
}

export const SelectFuelType = ({
  label,
  value,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAny,
  required,
}: Props) => {
  return (
    <Select
      width="100%"
      label={label || "Tipo compbustible"}
      placeholder="Gasoline"
      data={fuelTypes}
      value={value}
      onChange={onChange}
      maxDropdownHeight={280}
      searchable
      required={required}
      nothingFoundMessage="Nothing found"
      filter={optionsFilter}
    />
  );
};
