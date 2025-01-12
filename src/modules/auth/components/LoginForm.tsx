'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { AuthCard, PasswordInput } from '@/components';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { login } from '@/modules/auth/actions/login';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import type { TLoginReq } from '../schemas/login/request';
import { LoginReqSchema } from '../schemas/login/request';

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [isPending, startTransition] = useTransition();

  const form = useForm<TLoginReq>({
    resolver: zodResolver(LoginReqSchema),
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });

  const onSubmit = async (formData: TLoginReq) => {
    startTransition(async () => {
      try {
        await login(formData, callbackUrl ?? DEFAULT_LOGIN_REDIRECT);
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new Error((err as any).message);
      }
    });
  };

  return (
    <AuthCard
      headerLabel="Welcome back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
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
                  <Input placeholder="Enter your username" disabled={isPending} {...field} />
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
                  <PasswordInput {...field} disabled={isPending} placeholder="******" />
                </FormControl>
                <FormMessage />
                <Button size="sm" variant="link" asChild className="px-0 text-muted-foreground">
                  <Link href="/">Forgot your password?</Link>
                </Button>
              </FormItem>
            )}
          />

          <Button disabled={isPending} className="ml-auto w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
