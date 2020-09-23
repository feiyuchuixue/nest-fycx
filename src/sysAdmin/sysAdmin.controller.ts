/**
 * @Author INS6+
 * @Date 2020/9/21 10:57
 * @Description:
 */
import { Controller, Post } from '@nestjs/common';

import {SysAdminService} from './sysAdmin.service';

import {Message} from '../base/message/interfaces/message.interface';
import { logger } from '../utils/Log4jsUtil';

@Controller('sysAdmin')
export class SysAdminController{


  constructor(protected readonly sysAdminService :SysAdminService) {
  }

  @Post('all')
  async findAll():Promise<Message>{
    return await this.sysAdminService.find();
  }


}
