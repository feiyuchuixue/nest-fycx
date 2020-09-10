import { Injectable, NestMiddleware } from '@nestjs/common';
import { logger } from '../utils/log4js';
import { Request, Response } from 'express';
/**
 * @Auth INS6+
 * @Msg log middleware
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const code = res.statusCode; // 响应状态码
    //logger.error("");
    //console.log("=======logger========")
    //console.log(req)
    //console.log("=======end========")
    next();
/*
    // 组装日志信息
    const logFormat = `Method: ${req.method} \n Request original url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n`;
    // 根据状态码，进行日志类型区分
    if (code >= 500) {
      logger.error(logFormat);
    } else if (code >= 400) {
      logger.warn(logFormat);
    } else {
      logger.access(logFormat);
      logger.log(logFormat);
    }*/
  }
}

// 函数式中间件
export function loggerMiddle(req: Request, res: Response, next: () => any) {
  const code = res.statusCode; // 响应状态码
  next();
  // 组装日志信息
  const logFormat = ` ======Start====== \n  URL: ${req.originalUrl} \n  HTTP Method: ${req.method} \n  IP: ${req.ip} \n  Status code: ${code} \n  Params: ${JSON.stringify(req.params)} \n  Query: ${JSON.stringify(req.query)} \n  Body: ${JSON.stringify(req.body)} \n  ======End======`;
  // 根据状态码，进行日志类型区分
  if (code >= 500) {
    logger.error(logFormat);
  } else if (code >= 400) {
    logger.warn(logFormat);
  } else {
    logger.access(logFormat);
    // logger.log(logFormat);
  }
}


