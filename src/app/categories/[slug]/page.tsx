'use client';
import { getAllCategoryApi } from '@/service/service-axios';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { toastSuccess } from '@/service/service-toast';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

interface CategoryProps {
  params: {
    slug: string;
  };
}

const Category = ({ params }: CategoryProps) => {
  const upper = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  const { data } = useQuery({
    queryKey: ['cat', params.slug],
    queryFn: () => getAllCategoryApi(params.slug),
  });

  const [sort, setSort] = useState(data?.products || []);

  useEffect(() => {
    if (data?.products) {
      setSort(data.products);
    }
  }, [data]);

  const best = () => {
    const sorted = [...sort];
    setSort(sorted);
  };

  const sortAscending = () => {
    const sorted = [...sort].sort((a, b) => a.price - b.price);
    setSort(sorted);
  };

  const sortDescending = () => {
    const sorted = [...sort].sort((a, b) => b.price - a.price);
    setSort(sorted);
  };

  const notify = () => toastSuccess('Added to Cart !!');

  return (
    <>
      <Flex justifyContent={'space-between'} my={5}>
        <Box>
          <h1>
            {data?.total} items found in {upper}
          </h1>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort By:
            </MenuButton>
            <MenuList>
              <MenuItem onClick={best}>Best Match</MenuItem>
              <MenuItem onClick={sortAscending}>Low to High</MenuItem>
              <MenuItem onClick={sortDescending}>High To Low</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box>
        <SimpleGrid columns={[2, 3, 4]} spacing={5}>
          {sort?.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="5"
            >
              {/* <Text>{item}</Text> */}
              <Text fontWeight="bold">{item.title}</Text>
              <Text>Price: ${item.price}</Text>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={100}
                height={100}
              />
              <Flex justifyContent={'space-around'}>
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
    </>
  );
};

export default Category;
