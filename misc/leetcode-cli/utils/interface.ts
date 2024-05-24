export interface HttpRequestOptions {
  method?: string;
  url: string;
  referer?: string;
  body?: string | object;
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
  checkStatus: string;
}

export interface GraphQLRequestOptions {
  origin?: string;
  referer?: string;
  query: string;
  variables?: object;
}

export interface AllSubmissionsResponse {
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

export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

export type ProblemStatus = "Accepted" | "Not Accepted" | "Not Started";
export const problemStatus: Record<string, ProblemStatus> = {
  Accepted: "Accepted",
  notac: "Not Accepted",
  "Not Started": "Not Started",
};

export interface QuestionResponse {
  question: {
    questionId: number;
    title: string;
    difficulty: string;
    likes: number;
    dislikes: number;
    isLiked: boolean;
    isPaidOnly: boolean;
    stats: string;
    status: string;
    content: string;
    topicTags: {
      name: string;
    }[];
    codeSnippets: {
      lang: string;
      langSlug: string;
      code: string;
    }[];
    sampleTestCase: string;
  };
}

export interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
}

export interface SubmissionResponse {
  submissionDetails: {
    runtime: string;
    runtimeDisplay: string;
    runtimePercentile: string;
    runtimeDistribution: string;
    memory: number;
    memoryDisplay: string;
    memoryPercentile: string;
    memoryDistribution: string;
    code: string;
    timestamp: number;
    statusCode: number;
    user: {
      username: string;
      profile: {
        realName: string;
        userAvatar: string;
      };
    };
    lang: {
      name: string;
      verboseName: string;
    };
    question: {
      title: string;
      questionId: number;
      titleSlug: string;
      hasFrontendPreview: boolean;
    };
    notes: string;
    flagType: string;
    topicTags: {
      tagId: number;
      slug: string;
      name: string;
    }[];
    runtimeError: string;
    compileError: string;
    lastTestcase: string;
    codeOutput: string;
    expectedOutput: string;
    totalCorrect: number;
    totalTestcases: number;
    fullCodeOutput: string;
    testDescriptions: {
      testId: number;
      testCase: string;
      expectedOutput: string;
      actualOutput: string;
    }[];
    testBodies: {
      testId: number;
      testCase: string;
      body: string;
    }[];
    testInfo: string;
    stdOutput: string;
  };
}

export type SubmissionStatus =
  | "Accepted"
  | "Compile Error"
  | "Wrong Answer"
  | "Time Limit Exceeded"
  | "Memory Limit Exceeded"
  | "Output Limit Exceeded"
  | "Runtime Error"
  | "Internal Error"
  | "Timeout"
  | "Status not found";

export const submissionStatus: Record<string, SubmissionStatus> = {
  10: "Accepted",
  11: "Wrong Answer",
  12: "Memory Limit Exceeded",
  13: "Output Limit Exceeded",
  14: "Time Limit Exceeded",
  15: "Runtime Error",
  16: "Internal Error",
  20: "Compile Error",
  30: "Timeout",
};

export interface CheckStatusResponse {
  code_output: string;
  compare_result: string;
  elapsed_time: number;
  expected_output: string;
  finished: boolean;
  lang: string;
  last_testcase: string;
  memory: number;
  memory_percentile: number;
  pretty_lang: string;
  question_id: string;
  run_success: boolean;
  runtime_percentile: number;
  state: CheckStatusStatus;
  status_code: number;
  status_memory: string;
  status_msg: SubmissionStatus;
  status_runtime: string;
  std_output: string;
  submission_id: string;
  task_finish_time: number;
  task_name: string;
  total_correct: number;
  total_testcases: number;
  compile_error?: string;
  full_compile_error?: string;
  runtime_error?: string;
  full_runtime_error?: string;
}
export type CheckStatusStatus = "PENDING" | "STARTED" | "SUCCESS";

export interface UserData {
  userStatus: {
    userId: number;
    isSignedIn: boolean;
    isMockUser: boolean;
    isPremium: boolean;
    isVerified: boolean;
    username: string;
    avatar: string;
    isAdmin: boolean;
    isSuperuser: boolean;
    permissions: string;
    isTranslator: boolean;
    activeSessionId: string;
    checkedInToday: boolean;
    notificationStatus: {
      lastModified: number;
      numUnread: number;
    };
  };
}
