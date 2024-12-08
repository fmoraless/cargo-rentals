import { SegmentedControl, Text } from "@mantine/core";

export const Transmission = () => {
  return (
    <>
      <Text my={16}>Transmisión</Text>
      <SegmentedControl
        color="pink"
        radius="lg"
        data={[
          { value: "automatica", label: "Automática" },
          { value: "manual", label: "Manual" },
          { value: "ambas", label: "Ambas" },
        ]}
      />
    </>
  );
};
