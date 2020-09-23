/**
 * @Author INS6+
 * @Date 2020/9/21 14:01
 * @Description:
 */

import { MessageService } from './message/service/message.service';


export class BaseService {
  protected readonly msg = new MessageService();

}
