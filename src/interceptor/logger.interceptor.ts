import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { logger } from '../utils/Log4jsUtil';
import { Util } from '../utils/Util';
import { DateUtil } from '../utils/DateUtil';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const code = res.statusCode;
    const startTime = new Date();

    return next.handle().pipe(
      map(data => {

        // 组装日志信息
        const logFormat = ` ======Start====== \n  Date : ${DateUtil.dateFormat(startTime)} \n  OperatorId :  \n  URL: ${req.originalUrl} \n  HTTP Method : ${req.method} \n  IP : ${Util.getRealIp(req)} \n  Status code : ${code} \n  Request Args : ${JSON.stringify(req.body)} \n  +++++++++++++++++++++++++ \n  Response Args : ${JSON.stringify(data)} \n  Times : ${Date.now() - startTime.getTime()}ms \n  ======End======`;
        // 根据状态码，进行日志类型区分
        if (code >= 400 && code < 500) {
          logger.warn(logFormat);
        } else if (code < 400) {
          logger.access(logFormat);
          /*logger.log("【log】"+logFormat);
          logger.error("【error】"+logFormat);
          logger.warn("【warn】"+logFormat);
          logger.info("【info】"+logFormat);*/
          // logger.request("【request http】"+logFormat);
        }
        return data;
      }),
    );
  }

}



