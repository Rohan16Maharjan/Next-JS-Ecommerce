import { Box, SimpleGrid, Text, useQuery } from "@chakra-ui/react";
import { getAllCategory } from "@/service/service-axios";
import Loader from "../Loader";

interface Category {
  id: string; // Adjust the type based on your actual data structure
  name: string;
}

const Category = () => {
  const { data, isFetching } = useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });

  if (isFetching) {
    return <Loader height="100%" />;
  }

  return (
    <Box>
      <h1>Categories</h1>
      <SimpleGrid columns={[2, 4, 6, 8]} spacing={5}>
        {data?.map((item) => (
          <Box
            key={item}
            bg="tomato"
            height="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontWeight="bold">
              {item}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
