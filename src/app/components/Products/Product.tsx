"use client";
import { api } from "@/service/service-axios";
import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader";
import { toastSuccess } from "@/service/service-toast";
import Category from "../Category/index";

interface ItemProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Product: React.FC<ItemProps> = () => {
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState<ItemProps[]>([]);
  const { data: apiData, isFetching } = useQuery({
    queryKey: ["product"],
    queryFn: api,
  });

  if (isFetching) {
    return <Loader height="100%" />;
  }

  const search = (searchText: string) => {
    if (!apiData) return;

    if (searchText === "") {
      setFilterData(apiData);
    } else {
      const filteredData = apiData?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  const notify = () => toastSuccess("Added to Cart !!");

  return (
    <Box>
      <Flex my={2}>
        <Input
          placeholder="Search Products"
          size="md"
          mr={5}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <Button
          onClick={() => search(searchText)}
          colorScheme="teal"
          variant="solid"
        >
          Search
        </Button>
      </Flex>
      <Category />
      <Box>
        <Grid templateColumns={"repeat(3,1fr)"} gap={5}>
          {(filterData.length > 0 ? filterData : apiData)?.map((item) => (
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
                <Button onClick={notify}>
                  <Toaster />
                  {/* <Link href={"/cart"}>Add to Cart</Link> */}
                  Add to Cart
                </Button>
                <Button>
                  <Link href={`/details/${item.id}`}>View Details</Link>
                </Button>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;
