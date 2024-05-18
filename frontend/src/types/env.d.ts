// TODO: get env variables to work
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
    }
  }
}

export {};
