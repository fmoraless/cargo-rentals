import { ReactNode, useState } from "react";
import { DateInput, DateValue } from "@mantine/dates";

interface Props {
  label?: ReactNode;
  value?: DateValue | Date;
  onChange?: (value: DateValue | Date) => void;
  minDate?: Date;
}
export const SelectDate = ({ label, value, onChange, minDate }: Props) => {
  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select date"
      minDate={minDate}
      width="100%"
    />
  );
};
