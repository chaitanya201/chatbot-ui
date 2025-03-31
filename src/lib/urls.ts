type TEnv = "development" | "production";

const currentEnvironment: TEnv = "development";
const baseUrl = `api/v1`;
const serverUrls = {
  development: {
    server: `http://localhost:5000/${baseUrl}`,
  },
  production: {
    server: `http://localhost:5000/${baseUrl}`,
  },
};

export const envBook = {
  chat: `${serverUrls[currentEnvironment].server}/chat/chat`,
};
