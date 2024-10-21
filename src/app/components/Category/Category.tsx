import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { getAllCategory } from "@/service/service-axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import Link from "next/link";

const Category = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });

  if (isFetching) {
    return <Loader height="100%" />;
  }

  return (
    <Box mb={5}>
      <h1>Categories</h1>
      <SimpleGrid columns={[2, 4, 6, 8]} spacing={5}>
        {data?.map((item, index: number) => (
          <Link href={`/categories/${item.slug}`} key={index}>
            <Button
              _hover={{
                bg: "black",
                color: "white",
              }}
              bg={"green"}
              border={"5px"}
              height="80px"
              display="flex"
              width={"100%"}
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold">
                {item.name}
              </Text>
            </Button>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
