import { Carousel } from "@mantine/carousel";
import { Center, Image } from "@mantine/core";

const images = [
  "https://res.cloudinary.com/fcomosan/image/upload/v1731869300/rentacar/cars/about_ogzzec.png",
  "https://res.cloudinary.com/fcomosan/image/upload/v1731869301/rentacar/cars/5cb748963fd74_gw8ejp.png",
  "https://res.cloudinary.com/fcomosan/image/upload/v1731869300/rentacar/cars/van-hire_nburhh.png",
];
export const Slider = () => {
  return (
    <Carousel withIndicators loop>
      {images.map((image) => (
        <Carousel.Slide key={image} mt="2rem">
          <Center h={{ base: 300, md: 400, xl: 600 }} mx="auto">
            <Image src={image} alt="" />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
