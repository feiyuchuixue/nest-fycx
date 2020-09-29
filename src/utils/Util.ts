/**
 * @Author INS6+
 * @Date 2020/9/10 14:33
 * @Description: utils工具类
 */
import { Request, Response } from 'express';
import { logger } from './Log4jsUtil';
import {ConfigService} from '../base/config/config.service';
export class Util {

  /**
   * 获取真实IP
   * @param req
   */
  public static getRealIp(req: Request):string {
    let ipAddress;
    let forwardedIpsStr = req.header('x-forwarded-for');
    if (forwardedIpsStr) {
      let forwardedIps = forwardedIpsStr.split(',');
      ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
      ipAddress = req.connection.remoteAddress;
    }
    if (ipAddress.lastIndexOf(':') != -1) {
      ipAddress = ipAddress.substring(ipAddress.lastIndexOf(':') + 1, ipAddress.length);
    }
    return ipAddress;
  }

  public static objectToMap(obj):Map<any, any>{
    let map = new Map();
    for(let key in obj) {
      map.set(key,obj[key]);
    }
    return map;
  }

  public static jsonToMap(json:string|JSON):Map<any, any>{
    let map;
    if(typeof json === 'string'){
      map = this.objectToMap(JSON.parse(json));
    }

    if(typeof json === 'object'){
      map = this.objectToMap(json);
    }
    return map
  }

  public static mapToArray(map:Map<any,any>): any []{
    const array = [...map]
    return array;
  }

  /**
   * 系统配置文件获取
   */
  public static getEnvConf():ConfigService{
    const conf = new ConfigService();
    return conf;
  }


}

