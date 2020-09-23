/**
 * @Author INS6+
 * @Date 2020/9/21 11:01
 * @Description:
 */
import {Module} from '@nestjs/common';
import { SysAdminController } from './sysAdmin.controller';
import { SysAdminService } from './sysAdmin.service';
import { sysAdminProviders } from './sysAdmin.providers';
import { mongoModule } from '../mongoDb/mongo.module';

@Module({
  imports:[mongoModule],
  controllers:[SysAdminController],
  providers:[SysAdminService,...sysAdminProviders]
})
export class SysAdminModule{}
