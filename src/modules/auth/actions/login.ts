'use server';

import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import type { TLoginReq } from '../schemas/login/request';
import { LoginReqSchema } from '../schemas/login/request';

export const login = async (values: TLoginReq, callbackUrl?: string | null) => {
  const validatedFields = LoginReqSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Your credentials are invalid.' };
  }

  const { username, password } = validatedFields.data;

  try {
    const response = await signIn('credentials', {
      username,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    if (!response) {
      return { error: 'Your credentials are invalid.' };
    }

    return response;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Your credentials are invalid!' };

        case 'CallbackRouteError':
          return { error: 'Invalid callback route!' };

        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
