import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { GlobalModule } from './module/global/global.module';
import { ConfigService } from './base/config/config.service';
import { SysAdminModule } from './sysAdmin/sysAdmin.module';

const uriFormat = require('mongodb-uri')
function encodeMongoURI (urlString) {
  if (urlString) {
    let parsed = uriFormat.parse(urlString)
    urlString = uriFormat.format(parsed);
  }
  return urlString;
}


@Module({
  imports: [
    GlobalModule,
    SysAdminModule
  ],
  providers: [ConfigService],
  // controllers: [AppController],
  //providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      // 配置log 中间件
      .apply(LoggerMiddleware)
      // 设置路由过滤规则,匹配所有接口(可指定某一或某一类路由)
      .forRoutes('*');
  }

}
