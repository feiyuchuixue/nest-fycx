import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { loggerMiddle} from './middleware/logger.middleware';
import {LoggerInterceptor} from './interceptor/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件 的使用
  app.use(express.json());
  app.use(express.urlencoded({extended: true}))
  // app.use(loggerMiddle);
  // 全局拦截器
  app.useGlobalInterceptors(new LoggerInterceptor());

  // 全局过滤器
  // app.useGlobalFilters();
  // 配置项目前缀
  app.setGlobalPrefix('nest-fycx');
  await app.listen(3000);
}
bootstrap();
