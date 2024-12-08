import { RangeSlider, Text } from "@mantine/core";

const currentYear = new Date().getFullYear();

export const YearModel = () => {
  return (
    <>
      <Text my={16}>Año</Text>
      <RangeSlider
        py="xl"
        step={10}
        min={1990}
        max={currentYear}
        labelAlwaysOn
        thumbSize={12}
        color="pink"
      />
    </>
  );
};
