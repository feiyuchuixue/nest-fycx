import { Global, Module } from '@nestjs/common';
import { MessageService } from '../../base/message/service/message.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [MessageService],
  // 共享模块，加入此模块的资源可以被整个 TestModule 使用
  exports: [MessageService],
})
export class GlobalModule {
}
