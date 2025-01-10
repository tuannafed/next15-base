const routeApis = {
  HEALTH_CHECK: '/health-check',
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
    REFRESH_TOKEN: '/auth/refresh-token',
    CHANGE_PASSWORD: '/auth/change-password',
  },
} as const;

export default routeApis;
