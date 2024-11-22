import { Button, Container, Flex } from "@mantine/core";
import { primaryGradient } from "app/const/inedx";
import React from "react";
import classes from "./SearchEngine.module.css";
import { SelectCountry } from "../SelectCountry";
import { SelectRegion } from "../SelectRegion";
import { SelectCarMake } from "../SelectCarMake";
import { SelectDate } from "../SelectDate";

export const SearchEngine = () => {
  return (
    <Container className={classes.container}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify="center"
        align={{ base: "stretch", sm: "flex-end" }}
      >
        <SelectCountry />
        <SelectRegion />
        <SelectCarMake />
        <SelectDate
          label="Fecha de Retiro"
          value={new Date()}
          onChange={() => {}}
          minDate={new Date()}
        />
        <SelectDate
          label="Fecha de Devolución"
          value={new Date()}
          onChange={() => {}}
          minDate={new Date()}
        />

        <Button variant="gradient" gradient={primaryGradient}>
          Search for car
        </Button>
      </Flex>
    </Container>
  );
};
