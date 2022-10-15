type AuthResponse = {
  permissions: string[];
  refreshToken: string;
  token: string;
  roles: string[];
};

export { AuthResponse };