import { Box, SimpleGrid, Text } from "@chakra-ui/react";
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
		return <Loader height='100%' />;
	}

	return (
		<Box mb={5}>
			<h1>Categories</h1>
			<SimpleGrid columns={[2, 4, 6, 8]} spacing={5}>
				{data?.map((item, index) => (
					<Box
						key={index}
						bg={"green"}
						border={"5px"}
						height='80px'
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Link href={`/categories/${item.slugType}`}>
							<Text color='white' fontWeight='bold'>
								{item.name}
							</Text>
						</Link>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Category;
