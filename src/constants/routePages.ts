const routePages = {
  public: {
    HOME_PAGE: '/',
    DESIGN_SYSTEM: '/design-system',
    ABOUT: '/about',
    TERMS_PAGE: '/terms',
    PRIVACY_PAGE: '/privacy',
  },
  auth: {
    LOGIN_PAGE: '/login',
    REGISTER_PAGE: '/register',
    FORGOT_PASSWORD_PAGE: '/forgot-password',
    RESET_PASSWORD_PAGE: '/reset',
    NEW_PASSWORD_PAGE: '/new-password',
  },
  private: {
    DASHBOARD_PAGE: '/dashboard',
    USERS_PAGE: '/users',
    SETTINGS_PAGE: '/settings',
  },
} as const;

export default routePages;
