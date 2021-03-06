// eslint-disable-next-line prettier/prettier
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string;
    ENVIRONMENT: Environment;
    GIT_CLIENT_ID?: string;
    GIT_CLIENT_SECRETS?: string;
    GIT_CALLBACK_URL?: string;
    IN_CONTAINER?: string;
    JWT_SECRET?: string;
  }
  export type Environment = 'DEVELOPMENT' | 'PRODUCTION' | 'TEST';
}
