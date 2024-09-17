"use client";
import Loader from "@/app/components/Loader";
import { productApi } from "@/service/service-axios";
import { toastSuccess } from "@/service/service-toast";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { format } from "date-fns";

interface ParamsProps {
  params: {
    detailId: number;
  };
}

const Details = ({ params }: ParamsProps) => {
  const { data } = useQuery({
    queryKey: ["pro", params.detailId],
    queryFn: () => productApi(params.detailId),
  });

  const notify = () => toastSuccess("Added to Cart !!");

  return (
    <Flex direction={"column"} gap={5}>
      <Box>
        {data?.thumbnail ? (
          <>
            <Image
              src={data.thumbnail}
              width={250}
              height={250}
              priority
              alt="detailImage"
            />
            <Text>{data.title}</Text>
            <Text>{data.price}</Text>
            <Text>Brand: {data.brand}</Text>

            <Button onClick={notify}>
              <Toaster />
              {/* <Link href={"/cart"}>Add to Cart</Link> */}
              Add to Cart
            </Button>

            <Text>{data?.returnPolicy}</Text>
          </>
        ) : (
          <Loader />
        )}
      </Box>
      <Box>
        <Heading as="h4">Customer FeedBack</Heading>
        <Flex my={5} gap={5}>
          {data?.reviews.map((item) => (
            <Box p={5} border="1px" key={item.comment}>
              <Heading as="h4" size="md">
                {item?.reviewerName}
              </Heading>
              <Text>Rating:{item?.rating}</Text>
              <Text>Comment: {item?.comment}</Text>
              <Text>Date: {format(`${item?.date}`, "yyyy/MM/dd")}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Details;
