const shared = {
  APP: {
    NAME: 'Web application',
    URL: process.env.NEXT_PUBLIC_APP_URL || '',
    LOADING: 'app-loading',
    TIME_ZONE: process.env.TIME_ZONE || 'UTC',
    AUTHOR: 'Develop Team',
  },
  API: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || '',
    TIMEOUT: 30000,
  },
  ENV: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
  },
  API_REQUEST_METHODS: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch',
  },
  REGEX_PATTERNS: {
    EMAIL: /^(?!.*\.\.)(?!\.)(?!.*\.$)[^\s@][^\s@]*(?<!\.)@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[1-9]\d{1,20}$/,
    URL: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/,
    DATE: /^(19|20)\d\d[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])$/,
    TIME: /^([01]\d|2[0-3]):([0-5]\d)$/,
    IP_ADDRESS:
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d])[A-Za-z\d\S]{8,}$/,
    ALPHA_NUMERIC: /^[a-zA-Z0-9]+$/,
    ALPHABET: /^[a-zA-Z]+$/,
  },
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_PER_PAGE: 10,
    DEFAULT_PAGE_SIZES: [10, 30, 50, 100],
  },
  LOCAL_STORAGE_KEYS: {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
  },
} as const;

export default shared;
