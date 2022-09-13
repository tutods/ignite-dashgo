type EnvVars = {
	apiUrl: string;
	authApiUrl: string;
};

const envVars: EnvVars = {
	apiUrl: process.env.NEXT_PUBLIC_API_URL,
	authApiUrl: process.env.NEXT_PUBLIC_AUTH_API_URL,
};

export { envVars };
