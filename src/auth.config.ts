import type { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import constants from '@/constants';
import { LoginResSchema } from '@/modules/auth/schemas/login/response';
import { fetcher } from '@/utils/fetcher';

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials.username || !credentials.password) return null;

        const response = await fetcher({
          apiConfig: {
            endPoint: constants.routeApis.AUTH.LOGIN,
            key: ['auth-login'],
            method: constants.shared.API_REQUEST_METHODS.POST,
            isAuthRequired: false,
          },
          responseSchema: LoginResSchema,
          payload: {
            username: credentials.username,
            password: credentials.password,
            expiresInMins: 30,
          },
        });

        if (!response) return null;

        return {
          id: '1',
          name: 'Test User',
          email: 'test@gmail.com',
          image: 'https://www.gravatar.com/avatar/',
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
        session.user = token.user;
      }

      return session;
    },
  },
  trustHost: true,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    error: '/error',
  },
} satisfies NextAuthConfig;

export default authConfig;
