import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {logger} from '../utils/log4js';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const code = res.statusCode;

    return next.handle().pipe(
      map(data =>{
        console.log("status code *********************" + code)
        //console.log("data =========================",data);
        // 组装日志信息
        const logFormat = ` ======Start====== \n  URL: ${req.originalUrl} \n  HTTP Method: ${req.method} \n  IP: ${req.ip} \n  Status code: ${code} \n  Params: ${JSON.stringify(req.params)} \n  Query: ${JSON.stringify(req.query)} \n  Body: ${JSON.stringify(req.body)} \n  Response Args:\n ${JSON.stringify(data)} \n  ======End======`;
        // 根据状态码，进行日志类型区分
        if (code >= 500) {
          logger.error(logFormat);
        } else if (code >= 400) {
          logger.warn(logFormat);
        } else {
          logger.access(logFormat);
          logger.log(logFormat);
        }
        return data;
      })
    );
  }
}
