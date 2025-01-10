export const APP_NAME = 'Telair';
export const APP_LOADING = 'app-loading';

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';
export const API_URL = process.env.NEXT_PUBLIC_BASE_API || '';
export const ASSET_URL = process.env.NEXT_PUBLIC_ASSETS_URL || '';
export const TIME_ZONE = process.env.TIME_ZONE;

export const NOTIFICATION = {
  DURATION: 3000,
  MAX_SNACK: 3,
};

export const PAGINATION_SIZE = {
  XS: 10,
  SM: 20,
  MD: 30,
  XL: 50,
  XXL: 100,
};

export const PAGINATION_DEFAULT = {
  pageSize: PAGINATION_SIZE.XS,
  page: 1,
};

export const IMG_MAX_LIMIT = 3;
