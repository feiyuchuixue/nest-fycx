/**
 * @Author INS6+
 * @Date 2020/9/21 10:39
 * @Description:
 */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from '../base/message/interfaces/message.interface';
import { SysAdmin } from './schemas/sysAdmin.schemas';
import { BaseService } from '../base/BaseService';
import { Util } from '../utils/Util';


@Injectable()
export class SysAdminService extends BaseService{
  constructor(
    @Inject('sysAdminProvide') private readonly sysAdminModel: Model<SysAdmin>
  ) {
    super();
  }

  async find(): Promise<Message> {
    let sysAdmin = await this.sysAdminModel.find({})
    for (const sysAdminElement of sysAdmin) {
      await this.redisClient.set(sysAdminElement.id, JSON.stringify(sysAdminElement),'EX',10);
    }


    return  this.msg.success(sysAdmin);
  }


}
