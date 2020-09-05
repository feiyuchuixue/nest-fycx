import { Injectable, NestMiddleware } from '@nestjs/common';

/**
 * @Auth INS6+
 * @Msg log middleware
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("=======logger========")
    //console.log(req)
    //console.log("=======end========")
    next();
  }
}


