import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件 的使用
  app.use(logger);
  // 全局过滤器
  // app.useGlobalFilters();
  await app.listen(3000);
}
bootstrap();

// 函数式 中间件
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};
