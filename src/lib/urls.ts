type TEnv = "development" | "production";

const currentEnvironment: TEnv = "production";
const baseUrl = `api/v1`;
const serverUrls = {
  development: {
    server: `http://localhost:5000/${baseUrl}`,
  },
  production: {
    server: `https://chatbot-yuj1.onrender.com/${baseUrl}`,
  },
};

export const envBook = {
  chat: `${serverUrls[currentEnvironment].server}/chat/chat`,
};
