import { Global, Module } from '@nestjs/common';
import { MessageService } from '../../base/message/service/message.service';
import {ConfigService} from '../../base/config/config.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [ConfigService],
  // 共享模块，加入此模块的资源可以被整个 TestModule 使用
  exports: [ConfigService],
})
export class GlobalModule {
}
