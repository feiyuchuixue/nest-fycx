import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TestModule } from './module/test/test.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [TestModule],
 // controllers: [AppController],
  //providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      // 配置log 中间件
      .apply(LoggerMiddleware)
      // 设置路由过滤规则,匹配所有接口(可指定某一或某一类路由)
      .forRoutes('*')
  }
}
