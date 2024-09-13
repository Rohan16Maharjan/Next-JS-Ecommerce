"use client";
import Loader from "@/app/components/Loader";
import { productApi } from "@/service/service-axios";
import { Box, Button, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

interface ParamsProps {
  params: {
    detailId: number;
  };
}

const Details: React.FC<ParamsProps> = ({ params }) => {
  const { data } = useQuery({
    queryKey: ["pro", params.detailId],
    queryFn: () => productApi(params.detailId),
  });

  return (
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
          <Button>
            <Link href={"/cart"}>Add to Cart</Link>
          </Button>
          <Button>
            {/* <Link href={`/details/${item.id}`}>View Details</Link> */}
          </Button>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Details;
