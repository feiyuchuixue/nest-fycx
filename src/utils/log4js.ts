import * as Path from 'path';
import * as Log4js from 'log4js';
import * as Util from 'util';
import * as Moment from 'moment'; // 处理时间的工具
import * as StackTrace from 'stacktrace-js';
import Chalk from 'chalk';
import log4jsConfig from '../config/log4js';

// 日志级别
export enum LoggerLevel {
  ALL = 'ALL',
  MARK = 'MARK',
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
  OFF = 'OFF',
}

// 内容跟踪类
export class ContextTrace {
  constructor(
    public readonly context: string,
    public readonly path?: string,
    public readonly lineNumber?: number,
    public readonly columnNumber?: number,
  ) {}
}


// 注入配置
Log4js.configure(log4jsConfig);

// 实例化
const log = Log4js.getLogger();
log.level = LoggerLevel.ALL;

export class logger {
  static trace(...args) {
    log.trace(logger.getStackTrace(), ...args);
  }

  static debug(...args) {
    log.debug(logger.getStackTrace(), ...args);
  }

  static log(...args) {
    log.info(logger.getStackTrace(), ...args);
  }

  static info(...args) {
    log.info(logger.getStackTrace(), ...args);
  }

  static warn(...args) {
    log.warn(logger.getStackTrace(), ...args);
  }

  static warning(...args) {
    log.warn(logger.getStackTrace(), ...args);
  }

  static error(...args) {
    log.error(logger.getStackTrace(), ...args);
  }

  static fatal(...args) {
    log.fatal(logger.getStackTrace(), ...args);
  }

  static access(...args) {
    const loggerCustom = Log4js.getLogger('http');
    loggerCustom.info(logger.getStackTrace(), ...args);
  }

  // 日志追踪，可以追溯到哪个文件、第几行第几列
  static getStackTrace(deep: number = 2): string {
    const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
    const stackInfo: StackTrace.StackFrame = stackList[deep];

    const lineNumber: number = stackInfo.lineNumber;
    const columnNumber: number = stackInfo.columnNumber;
    const fileName: string = stackInfo.fileName;
    const basename: string = Path.basename(fileName);
    return `${basename}(line: ${lineNumber}, column: ${columnNumber}): \n`;
  }
}
