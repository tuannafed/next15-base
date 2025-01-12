'use client';

import { useTransition } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { TRegisterReq } from '../schemas/register/request';
import { RegisterReqSchema } from '../schemas/register/request';
import {
  AuthCard,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  PageContainer,
  PasswordInput,
} from '@/components';

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  // const { handleSignup } = useSignupLogic();

  const form = useForm<TRegisterReq>({
    resolver: zodResolver(RegisterReqSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = async (data: TRegisterReq) => {
    startTransition(() => {
      // eslint-disable-next-line no-console
      console.log('data', data);
      // handleSignup(data);
    });
  };

  return (
    <PageContainer scrollable={true}>
      <div className="flex w-full min-h-screen flex-col items-center justify-center mx-auto sm:max-w-[420px]">
        <AuthCard
          headerTitle="Sign Up"
          headerLabel="Register an account to get started!"
          backButtonLabel="Have an account already?"
          backButtonHref="/login"
          showSocial
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your username..."
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email..."
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your password..."
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem className="!mb-4">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your confirm password..."
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </AuthCard>
      </div>
    </PageContainer>
  );
}
