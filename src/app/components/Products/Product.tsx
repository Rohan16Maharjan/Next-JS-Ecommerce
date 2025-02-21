'use client';
import { api } from '@/service/service-axios';
import { toastSuccess } from '@/service/service-toast';
import { Box, Button, Flex, Grid, Input, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';
import Carousal from '../Carousal/Carousal';
import Category from '../Category/Category';
import Loader from '../Loader';

import { Center, Heading, Stack, useColorModeValue } from '@chakra-ui/react';

interface ItemProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Product: React.FC<ItemProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [filterData, setFilterData] = useState<ItemProps[]>([]);
  const { data: apiData, isFetching } = useQuery({
    queryKey: ['product'],
    queryFn: api,
  });

  if (isFetching) {
    return <Loader height="100%" />;
  }

  const search = (searchText: string) => {
    if (!apiData) return;

    if (searchText === '') {
      setFilterData(apiData);
    } else {
      const filteredData = apiData?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  const notify = () => toastSuccess('Added to Cart !!');

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
      <Carousal />
      <Category />
      <Box>
        <Grid templateColumns={'repeat(3,1fr)'} gap={5}>
          {(filterData.length > 0 ? filterData : apiData)?.map((item) => (
            <Center key={item.id} py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={item.thumbnail}
                    alt="#"
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    {item.brand}
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    {item.title}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={500} fontSize={'xl'}>
                      Rs.{item.price}
                    </Text>
                    <Text color={'gray.600'}>-{item.discountPercentage}%</Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;
