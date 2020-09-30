/**
 * @Author INS6+
 * @Date 2020/9/21 10:39
 * @Description:
 */
import { Inject, Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from '../base/message/interfaces/message.interface';
import { SysAdmin } from './schemas/sysAdmin.schemas';
import { BaseService } from '../base/BaseService';
import { Util } from '../utils/Util';
import { logger } from '../utils/Log4jsUtil';


@Injectable()
export class SysAdminService extends BaseService  {
  constructor(
    @Inject('sysAdminProvide') private readonly sysAdminModel: Model<SysAdmin>,
  ) {
    super();
  }

  async find(): Promise<Message> {
    let sysAdmin = await this.sysAdminModel.find({});
    for (const sysAdminElement of sysAdmin) {

      await this.redisClient.set(sysAdminElement.id, JSON.stringify(sysAdminElement), 'Ex', 10);
    }
    // redis 消息发布
    await this.redisPubClient.publish('news', 'this is a redis pub message ...');
    return this.msg.success(sysAdmin);
  }


}
