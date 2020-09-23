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
    const logFormat = ` ${exception}`;
    logger.error(logFormat);

    res.status(status).json({
      data:"Error",
      code: -1,
      msg: `Service Error: ${exception}`,
    });
  }
}
