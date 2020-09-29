import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { LoggerInterceptor } from './interceptor/logger.interceptor';
import { AnyExceptionFilter } from './filter/any-exception.filter';
import { Util } from './utils/Util';
import { logger } from './utils/Log4jsUtil';

async function bootstrap() {
  let conf = Util.getEnvConf();
  const app = await NestFactory.create(AppModule);
  // 全局中间件 的使用
  app.use(express.json());
  app.use(express.urlencoded({extended: true}))
  // app.use(loggerMiddle);
  //app.use()

  // 全局拦截器
  app.useGlobalInterceptors(new LoggerInterceptor());

  // 全局异常过滤器
  app.useGlobalFilters(new AnyExceptionFilter());
  // 全局过滤器
  // app.useGlobalFilters();
  // 配置项目前缀
  app.setGlobalPrefix('nest-fycx');
  // 跨域配置
  app.enableCors();
  // 启动shutdown 钩子
  app.enableShutdownHooks();

  await app.listen(conf.get('port'),() => logger.info( '=====|=====|======= nest.js is running in port=' + conf.get('port') + '=======|=====|=====' ));
}
bootstrap();
