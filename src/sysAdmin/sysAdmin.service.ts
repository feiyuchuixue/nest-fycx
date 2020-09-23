/**
 * @Author INS6+
 * @Date 2020/9/21 10:39
 * @Description:
 */
import { Inject, Injectable, Module } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from '../base/message/interfaces/message.interface';
import { MessageService } from '../base/message/service/message.service';
import {SysAdmin} from './schemas/sysAdmin.schemas';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler';
import { BaseService } from '../base/BaseService';
import { ConfigService } from '../base/config/config.service';


@Injectable()
export class SysAdminService extends BaseService{


  constructor(
    @Inject('sysAdminProvide') private readonly sysAdminModel: Model<SysAdmin>
  ) {
    super();
  }

  async find(): Promise<Message> {
    let conf = new ConfigService();
    console.log("ip ===================",conf.get('ip'))
    let sysAdmin = await this.sysAdminModel.find({})
    for (const sysAdminElement of sysAdmin) {
        console.log("iter ...",sysAdminElement)
    }
    console.log("sysAdmin ===",sysAdmin);
    return  this.msg.success(sysAdmin);
  }


}
