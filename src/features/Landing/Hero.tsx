import { Container } from "@mantine/core";
import React from "react";
import { Slider } from "./Slider";
import classes from "./Style.module.css";

export const Hero = () => {
  return (
    <Container fluid pb="4rem" className={classes.hero}>
      <Slider />
    </Container>
  );
};
