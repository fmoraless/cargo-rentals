"use client";
import React from "react";
import { Hero } from "./Hero";
import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("app/components/Map"), {
  ssr: false,
});

export const Landing = () => {
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <Map />
      </Container>
    </>
  );
};
