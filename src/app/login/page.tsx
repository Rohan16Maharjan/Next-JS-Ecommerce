'use client';
import { Flex, Input } from '@chakra-ui/react';
// import { DevTool } from "@hookform/devtools";
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
    <Flex direction={'column'} alignItems={'center'} p={4}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex direction={'column'} gap={4} align={'center'}>
          <Input
            autoComplete="off"
            placeholder="Enter UserName"
            border="1px"
            type="text"
            id="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p>Username is required</p>}

          <Input
            autoComplete="off"
            placeholder="Enter password"
            border="1px"
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            required
          />
          {errors.password && <p>Password is required</p>}

          <Input type="submit" />
        </Flex>
      </form>
      {/* <DevTool control={control} /> */}
    </Flex>
  );
}
