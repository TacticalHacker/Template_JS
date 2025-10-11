export const appStages = {
  DEV: 'dev',
  TEST: 'test',
  PROD: 'prod',
} as const;

export const commonLambdaConfig = {
  runtime: 'nodejs22.x',
  memory: '256 MB',
  timeout: '10 seconds',
} as const;
