/**
 * @Author INS6+
 * @Date 2020/9/21 14:01
 * @Description:
 */

import { MessageService } from './message/service/message.service';
import { Redis } from 'ioredis';
import { Util } from '../utils/Util';
import { OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { logger } from '../utils/Log4jsUtil';

const Redis = require('ioredis');

export class BaseService implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy {
  protected readonly msg = new MessageService();
  protected readonly redisClient: Redis;
  protected readonly redisPubClient: Redis;
  protected readonly redisSubClient: Redis;

  constructor() {
    let conf = Util.getEnvConf();
    this.redisClient = new Redis(
      conf.get('redis.port'),
      conf.get('redis.host'),
      {
        password: conf.get('redis.pwd'),
        db: conf.get('redis.db'),
      });

    this.redisPubClient = new Redis(
      conf.get('redis.port'),
      conf.get('redis.host'),
      {
        password: conf.get('redis.pwd'),
        db: conf.get('redis.db'),
      });

    this.redisSubClient = new Redis(
      conf.get('redis.port'),
      conf.get('redis.host'),
      {
        password: conf.get('redis.pwd'),
        db: conf.get('redis.db'),
      });

  }

  // ==================== nestjs生命周期 ===========================
  // ## 初始化主模块后调用
  onModuleInit(): any {
    logger.info('on module 【init】 ...');
  }



  // ## 在应用程序完全启动并引导后调用
  onApplicationBootstrap(): any {
    logger.info('on application 【bootstrap】 ...');
    // # 订阅 news channel
    this.redisSubClient.subscribe('news', ((err, listenCount) => {
      logger.info(' redis sub , the channel: [ "news" ] , listen channel count = ' + listenCount);
    }));

    // # 订阅  message 的 接收
    this.redisSubClient.on('message', (channel, message) => {
      logger.info('Receive message :【' + message + '】 from channel :【' + channel + '】');
    });

  }

// ## 响应系统信号(当应用程序关闭时，例如SIGTERM)
  onApplicationShutdown(signal?: string): any {
    logger.info('on application 【shutdown】... ,signal = ' +signal);

  }

  // 在Nest销毁主模块(app.close()方法之前进行清理)
  onModuleDestroy(): any {
    logger.info('on module 【destroy】 ...');
  }


}
