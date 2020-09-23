/**
 * @Author INS6+
 * @Date 2020/9/17 14:46
 * @Description:
 */

import { Message } from '../interfaces/message.interface';
import { Injectable } from '@nestjs/common';

// @Injectable()
export class MessageService {

  success(data?: {}, msg?: string, code?: number): Message {
    let prop = {} as Message;
    prop.data = data;
    prop.code = 0;
    prop.msg = 'success';

    if (!!msg) {
      prop.msg = msg;
    }
    if (!!code) {
      prop.code = code;
    }
    if (!!data) {
      prop.data = data;
    }

    return prop;
  }





  err(msg?: string, code?: number): Message {
    let prop = {} as Message;
    prop.data = {};
    prop.code = -1;
    prop.msg = 'fail';
    if (!!msg) {
      prop.msg = msg;
    }
    if (!!code) {
      prop.code = code;
    }
    return prop;
  }


}
