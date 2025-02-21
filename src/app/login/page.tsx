'use client';
// import { DevTool } from "@hookform/devtools";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type LoginProps = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const onSubmit = (data: LoginProps) => {
    console.log('Form Submitted', data);
  };
  return (
    // <Flex direction={'column'} alignItems={'center'} p={4}>
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit(onSubmit)} noValidate>
    //     <Flex direction={'column'} gap={4} align={'center'}>
    //       <Input
    //         autoComplete="off"
    //         placeholder="Enter UserName"
    //         border="1px"
    //         type="text"
    //         id="username"
    //         {...register('username', { required: 'Username is required' })}
    //       />
    //       {errors.username && <p>Username is required</p>}

    //       <Input
    //         autoComplete="off"
    //         placeholder="Enter password"
    //         border="1px"
    //         type="password"
    //         id="password"
    //         {...register('password', { required: 'Password is required' })}
    //         required
    //       />
    //       {errors.password && <p>Password is required</p>}

    //       <Input type="submit" />
    //     </Flex>
    //   </form>
    //   {/* <DevTool control={control} /> */}
    // </Flex>

    <Flex
      minH={'85vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Login in
              </Button>
              <Text display={'inline'}>OR</Text>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Register Now
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
