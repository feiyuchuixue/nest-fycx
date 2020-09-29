/**
 * @Author INS6+
 * @Date 2020/9/21 14:01
 * @Description:
 */

import { MessageService } from './message/service/message.service';
import { Redis } from 'ioredis';
import { Util } from '../utils/Util';

const Redis = require('ioredis');

export class BaseService {
  protected readonly msg = new MessageService();
  protected readonly redisClient: Redis;

  constructor() {
    let conf = Util.getEnvConf();
    this.redisClient = new Redis(
      conf.get('redis.port'),
      conf.get('redis.host'),
      {
        password: conf.get('redis.pwd'),
        db: conf.get('redis.db'),
      });

  }

}
