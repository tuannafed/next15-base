// environment.d.ts
declare namespace NodeJS {
  export interface Env {
    readonly TIME_ZONE: string;
    readonly NEXT_PUBLIC_APP_URL: string;
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_AUTH_URL: string;
    readonly NEXT_PUBLIC_AUTH_SECRET: string;
  }
}
