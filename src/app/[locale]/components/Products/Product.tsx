"use client";
import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import React from "react";
import Loader from "../Loader";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/service/service-axios";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

interface ItemProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Product: React.FC<ItemProps> = () => {
  const t = useTranslations("Home.Hero");

  const { data: apiData, isFetching } = useQuery({
    queryKey: ["product"],
    queryFn: api,
  });

  if (isFetching) {
    return <Loader height="100%" />;
  }

  return (
    <Box>
      <Flex my={2}>
        <Input placeholder="Search Products" size="md" mr={5} />
        <Button colorScheme="teal" variant="solid">
          Search
        </Button>
      </Flex>
      <Box>
        <Grid templateColumns={"repeat(3,1fr)"} gap={5}>
          {apiData?.map((item) => (
            <Box border={"2px"} borderColor={"gray.200"} key={item.id} p={5}>
              <Image
                style={{ padding: "20%" }}
                src={item.thumbnail}
                alt="products"
                width={350}
                height={350}
              />
              <Text textAlign={"center"} fontSize="2xl">
                {item.title}
              </Text>
              <Text textAlign={"center"} fontSize="2xl">
                Rs:{item.price}
              </Text>
              <Flex justifyContent={"space-around"}>
                <Button>
                  <Link href={"/cart"}>{t("Cart")}</Link>
                </Button>
                <Link href={`/details/${item.id}`}>
                  <Button>{t("Details")}</Button>
                </Link>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;
