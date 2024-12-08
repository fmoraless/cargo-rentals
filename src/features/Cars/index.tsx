import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Space,
  Title,
} from "@mantine/core";
import classes from "./Styles.module.css";
import { SearchEngine } from "app/components/SearchEngine";
import { IconBrandGoogleMaps } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import ResetFiltersButton from "./ResetFiltersButton";
import { BodyType } from "./BodyType";
import { PriceRange } from "app/components/PriceRange";
import { YearModel } from "app/components/YearModel";
import { Transmission } from "app/components/Transmission";
import { FuelType } from "./FuelType";

const Map = dynamic(() => import("app/components/Map"), {
  ssr: false,
});

export const CarsLayout = () => {
  return (
    <Container className={classes.parentContainer} size="xl" my="sm" py="md">
      <SearchEngine />
      <Flex justify="flex-end">
        <Button className={classes.mapToggle} size="sm" variant="subtle">
          <IconBrandGoogleMaps size="16px" />
          Show Map
        </Button>
      </Flex>

      <Map />

      <Flex
        direction={{ base: "column", md: "row" }}
        className={classes.container}
      >
        <Card w={{ base: "100%", md: "350px" }}>
          <Flex align="center" justify="space-between">
            <Title order={4}>Filtros</Title>

            <Box display={{ base: "none", md: "inline-block" }}>
              <ResetFiltersButton />
            </Box>
          </Flex>

          <Divider my={16} display={{ base: "none", md: "block" }} />

          <Box display={{ base: "none", md: "block" }}>
            <BodyType />
            <PriceRange />
            <YearModel />
            <Transmission />
            <Space my="lg" />
            <FuelType />
          </Box>
        </Card>
        {/* Car list */}
      </Flex>
    </Container>
  );
};
