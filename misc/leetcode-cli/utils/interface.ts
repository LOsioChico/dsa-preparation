export interface HttpRequestOptions {
  method?: string;
  url: string;
  referer?: string;
  body?: string;
}

export interface Credit {
  session?: string;
  csrfToken: string;
}

export interface Uris {
  base: string;
  login: string;
  graphql: string;
  problemsAll: string;
  problem: string;
  submit: string;
}

export interface GraphQLRequestOptions {
  origin?: string;
  referer?: string;
  query: string;
  variables?: object;
}
