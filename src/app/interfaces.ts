export interface Config {
  isDev: boolean,
  version: string,
  apiBaseURL: string
}

export interface BuildRequestParams {
  body?: any,
  query?: any
}

export interface requestRegisterParams {
  email:string,
  username: string,
  first_name:string,
  last_name:string,
  password:string
}

export interface requestLoginParams {
  username: string,
  password:string
}

export interface FetchArticleParams {
  token?: string
}

export interface DeleteArticleParams {
  token?: string
}
