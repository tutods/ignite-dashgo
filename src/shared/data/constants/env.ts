type EnvVars = {
  apiUrl: string;
};

const envVars: EnvVars = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
};

export { envVars };