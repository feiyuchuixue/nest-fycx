import { Global, Module } from '@nestjs/common';
import { TestService } from '../../service/test/test.service';
import { TestController } from '../../controller/test/test.controller';
import { MessageService } from '../../base/message/service/message.service';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
  // 共享模块，加入此模块的资源可以被整个 TestModule 使用
  exports: [],
})
export class TestModule {
}
