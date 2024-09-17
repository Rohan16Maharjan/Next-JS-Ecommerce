"use client";
import { getAllCategoryApi } from "@/service/service-axios";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { toastSuccess } from "@/service/service-toast";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

interface CategoryProps {
	params: {
		slug: string;
	};
}

const Category = ({ params }: CategoryProps) => {
	const { data } = useQuery({
		queryKey: ["cat", params.slug],
		queryFn: () => getAllCategoryApi(params.slug),
	});
	const notify = () => toastSuccess("Added to Cart !!");

	return (
		<Box>
			<h1>Category: {params.slug} is very good</h1>
			<SimpleGrid columns={[2, 3, 4]} spacing={5}>
				{data?.map((item, index) => (
					<Box
						key={index}
						borderWidth='1px'
						borderRadius='lg'
						overflow='hidden'
						p='5'
					>
						<Text fontWeight='bold'>{item.title}</Text>
						<Text>Price: ${item.price}</Text>
						<Image
							src={item.thumbnail}
							alt={item.title}
							width={100}
							height={100}
						/>
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
			</SimpleGrid>
		</Box>
	);
};

export default Category;
