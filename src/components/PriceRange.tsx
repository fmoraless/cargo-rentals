"use client";
import { Box, Flex, NumberInput, RangeSlider, Text } from "@mantine/core";

const LOWEST_PRICE = 0;
const HIGHEST_PRICE = 10000;

export const PriceRange = () => {
  const labelFormatter = (value: number) => {
    return `CLP ${value.toString()}`;
  };
  return (
    <>
      <Text my={16}>Rango Precio</Text>
      <RangeSlider
        py="xl"
        step={10}
        min={LOWEST_PRICE}
        max={HIGHEST_PRICE}
        labelAlwaysOn
        label={labelFormatter}
        thumbSize={12}
        color="pink"
      />
      <Flex gap={8}>
        <Box>
          <Text size="xs">Mín.</Text>
          <NumberInput step={10} min={LOWEST_PRICE} max={HIGHEST_PRICE} />
        </Box>
        <Box>
          <Text size="xs">Máx.</Text>
          <NumberInput step={10} min={LOWEST_PRICE} max={HIGHEST_PRICE} />
        </Box>
      </Flex>
    </>
  );
};
