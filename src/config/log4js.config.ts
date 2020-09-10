import * as path from 'path';
const baseLogPath = 'G:/GitHub/nest-fycx/app-log';

const log4jsConfig = {
  appenders: {
    console: {
      type: 'console', // 会打印到控制台
      layout: {
        type: "pattern",
        // 配置模式，下面会有介绍
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c %z  %m%n',
      },
    },
    access: {
      type: 'dateFile', // 会写入文件，并按照日期分类
      filename: `${baseLogPath}/access/access.log`, // 日志文件名，会命名为：access.20200320.log
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd',
      layout: {
        type: "pattern",
        // 配置模式，下面会有介绍
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c %z  %m%n',
      },
      daysToKeep: 0,//  指定日志保留的天数 ( 默认为 0，始终保留 )
      numBackups: 3,
      category: 'http',
      keepFileExt: true, // 是否保留文件后缀
    },
    http: {
      type: 'dateFile',
      filename: `${baseLogPath}/request/request.log`,
      alwaysIncludePattern: true,
      layout: {
        type: "pattern",
        // 配置模式，下面会有介绍
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c %z  %m%n',
      },
      pattern: 'yyyy-MM-dd',
      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
    errorFile: {
      type: 'dateFile',
      filename: `${baseLogPath}/errors/error.log`,
      layout: {
        type: "pattern",
        // 配置模式，下面会有介绍
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c %z  %m%n',
      },
      alwaysIncludePattern: true,
      // 日志文件按日期（天）切割
      pattern: 'yyyy-MM-dd',
      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
/*    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorFile',
    },*/
  },
  categories: {
    default: {
      appenders: ['access'],
      level: 'info',
    },
    info: { appenders: ['console', 'access'], level: 'info' },
    access: { appenders: ['console', 'access'], level: 'info' },
    http: { appenders: ['console','http'], level: 'info' },
    err:{ appenders: ['console', 'errorFile'], level: 'error' }
  },
  pm2: false, // 使用 pm2 来管理项目时，打开
  pm2InstanceVar: 'INSTANCE_ID', // 会根据 pm2 分配的 id 进行区分，以免各进程在写日志时造成冲突
};

export default log4jsConfig;
