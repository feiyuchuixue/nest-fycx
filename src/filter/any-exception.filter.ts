import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import {logger} from '../utils/Log4jsUtil';
import * as Moment from 'moment';
import {Util} from '../utils/Util';
import {DateUtil} from '../utils/DateUtil';

/**
 * @Author INS6+
 * @Date 2020/9/10 14:33
 * @Description: 全局异常捕获
 */
@Catch()
export class AnyExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const req = host.switchToHttp().getRequest();
    const res = host.switchToHttp().getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const startTime = new Date();
    const logFormat = ` ======Start====== \n  Date : ${DateUtil.dateFormat(startTime)} \n  OperatorId :  \n  URL: ${req.originalUrl} \n  HTTP Method : ${req.method} \n  IP : ${Util.getRealIp(req)} \n  Status code : ${status} \n  Request Args : ${JSON.stringify(req.body)} \n  +++++++++++++++++++++++++ \n  Response Args : ${exception} \n  Times : ${Date.now() - startTime.getTime()}ms \n  ======End======`;
    logger.error(logFormat);
    res.status(status).json({
      statusCode: status,
      msg: `Service Error: ${exception}`,
    });
  }
}
