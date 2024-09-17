import React from "react";
import { getAllCategoryApi } from "@/service/service-axios";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@chakra-ui/react";

interface CategoryProps {
	params: {
		slugName: string;
	};
}

const Category = ({ params }: CategoryProps) => {
	const { data } = useQuery({
		queryKey: ["cat", params.slugName],
		queryFn: () => getAllCategoryApi(params.slugName),
	});
	return (
		<Box>
			{data?.map((item, index) => (
				<Box key={index}>
					<h1>{item}</h1>
				</Box>
			))}
		</Box>
	);
};

export default Category;
