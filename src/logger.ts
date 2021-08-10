import { LogLevel, LogMessage } from './models/logging';

/**
 * Lookup map for getting the log color based on the LogLevel
 */
const logColors = new Map<LogLevel, string>([
  [LogLevel.DEBUG, '#2c3e50'],
  [LogLevel.INFO, '#2980b9'],
  [LogLevel.ERROR, '#c0392b'],
]);

export default class Logger {
  /**
   * Internal message to perform the actually logging. Does the following things:
   * - Format the message given the type (debug, error...)
   * - Figures out if the message should be loged (debug messages are not always logged)
   * - Prints the message in a formatted way.
   */
  private static log(logMessage: LogMessage) {
    const level = logMessage.level ?? LogLevel.DEBUG;

    const prefix = `[Licensephobia] - ${level}`;

    const prefixStyle = `border-right: 2px solid #fefefe; background-color: ${logColors.get(level)}; color: #fefefe`;
    const messageStyle = '';

    const log = (message: any, data?: any) => {
      console.log(`%c ${prefix} %c ${message}`, prefixStyle, messageStyle);

      if (data) {
        console.log(data);
      }
    };

    const error = (message: any, data?: any) => {
      console.error(`%c ${prefix} %c ${message}`, prefixStyle, messageStyle);

      if (data) {
        console.log(data);
      }
    };

    if (logMessage.level === LogLevel.DEBUG) {
      log(logMessage.message, logMessage.data);
    } else if (logMessage.level === LogLevel.ERROR) {
      error(logMessage.message, logMessage.data);
    } else if (logMessage.level === LogLevel.INFO) {
      log(logMessage.message, logMessage.data);
    }
  }

  /**
   * Logs the message as debug type
   */
  public static debug(message: string, data: any = null) {
    Logger.log({
      message,
      level: LogLevel.DEBUG,
      data,
    });
  }

  /**
   * Logs the message as info type.
   */
  public static info(message: string, data: any = null) {
    Logger.log({
      message,
      level: LogLevel.INFO,
      data: data ?? undefined,
    });
  }

  /**
   * Logs the message as error type.
   */
  public static error(message: string, data: any = null) {
    Logger.log({
      message,
      level: LogLevel.ERROR,
      data: data ?? undefined,
    });
  }
}
