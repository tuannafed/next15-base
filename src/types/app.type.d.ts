// app.type.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
type TLoading = 'idle' | 'loading';
type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type TClassName = HTMLAttributes<string>['className'];
type TRowAction = 'edit' | 'detail' | 'create' | 'delete' | 'cancel';

type TDate = string | number | Date;
type TAPIConfig = {
  endPoint: string;
  key: string[];
  method: TMethod;
  isAuthRequired?: boolean;
};

type TApiError<T = any> = {
  [key: string]: T;
};

type TApiResponseBase<T = any> = {
  data: T;
  statusCode: number;
  success: boolean;
  message: string;
  messageCode: string;
  messageErrors: string;
};

type TBaseState = {
  loading: TLoading;
  error?: any;
  requestId?: string;
  isSuccess?: boolean;
  isError?: boolean;
  isFetching?: boolean;
};
