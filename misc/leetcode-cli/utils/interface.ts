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
  graphql: string;
  submit: string;
  allMySubmissions: string;
}

export interface GraphQLRequestOptions {
  origin?: string;
  referer?: string;
  query: string;
  variables?: object;
}

export interface SubmissionsResponse {
  has_next: boolean;
  last_key: string;
  submissions_dump: Submission[];
}

export interface Submission {
  code: string;
  compare_result: string;
  flag_type: number;
  has_notes: boolean;
  id: number;
  is_pending: string;
  lang: string;
  lang_name: string;
  memory: string;
  question_id: number;
  runtime: string;
  status: number;
  status_display: string;
  time: string;
  timestamp: number;
  title: string;
  title_slug: string;
  url: string;
}
