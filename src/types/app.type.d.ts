// app.type.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
type TLoading = 'idle' | 'loading';
type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type TClassName = HTMLAttributes<string>['className'];
type TRowAction = 'edit' | 'detail' | 'create' | 'delete' | 'cancel';

type TDate = string | number | Date;
type TAPIConfig = {
  keys: string[];
  endPoint: string;
  method: TMethod;
  accessToken?: boolean;
  factoryData?: object;
};

type TApiError = {
  input: string | null;
  msg: string;
  type: string;
  loc: string[];
};

type TApiResponseBase<T = any> = {
  data: T | { errors: TApiError[] };
  code: string;
  msg: string;
};
