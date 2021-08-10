// eslint-disable-next-line no-shadow
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  ERROR = 'ERROR',
}

export interface LogMessage {
  message: string;
  level?: LogLevel;
  data?: any;
}
