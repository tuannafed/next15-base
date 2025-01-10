/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { HTTP_STATUS_CODE } from '@/constants/httpCode';
import type { TLoginReq } from '@/schemas/signin/request';
import { LoginReq } from '@/schemas/signin/request';
import { LoginRes } from '@/schemas/signin/response';
import { postSigninApi } from '@/services/api/authentication';
import { fetchClientSide } from '@/utils';

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) return null;

        const res = await fetchClientSide({
          apiConfig: postSigninApi,
          requestSchema: LoginReq,
          responseSchema: LoginRes,
          payload: credentials as TLoginReq,
        });

        if (res.code !== HTTP_STATUS_CODE.OK || !res.data) return null;

        const { user, ...rest } = res.data;

        return {
          id: `${user.id}`,
          email: user.email,
          name: user.email.split('@')[0],
          user: { ...rest, ...user, name: user.email.split('@')[0] },
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Handle login with email and code
      if (user && account?.provider === 'credentials') {
        return { ...token, ...user };
      }

      // Handle refresh token
      // if (new Date().getTime() < token.) return token;

      return token;
      // return await refreshToken(token);
    },

    async session({ token, session }) {
      if (session.user) {
        (session.user as any) = token.user;
      }

      return session;
    },
  },
  session: { strategy: 'jwt' },
} satisfies NextAuthConfig;

export default authConfig;
