import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { loggerMiddle} from './middleware/logger.middleware';
import {LoggerInterceptor} from './interceptor/logger.interceptor';
import { AnyExceptionFilter } from './filter/any-exception.filter';
import { from } from 'rxjs';
import { MongooseCoreModule } from '@nestjs/mongoose/dist/mongoose-core.module';


async function bootstrap() {
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
  await app.listen(3000);
}
bootstrap();
