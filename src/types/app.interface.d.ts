// app.interface.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
interface IOption<T = any> {
  label: string;
  value: T;
}

interface IQueryParamsBase {
  page?: number;
  perPage?: number;
  order?: 'ASC' | 'DESC';
  orderBy?: string;
}

interface IUseHookBaseReturn<T = any, P extends IQueryParamsBase> {
  data?: T;
  isLoading?: boolean;
  pagination?: TPagination;
  queryParams?: P;
  setQueryParams?: (params: P) => void;
  onAction?: (action: TRowAction, data: T) => void;
}

interface IEndPointParameter {
  [index: string]: string | number;
}
