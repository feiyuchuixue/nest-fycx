/**
 * @Author INS6+
 * @Date 2020/9/10 14:33
 * @Description: utils工具类
 */
import { Request, Response } from 'express';
import { logger } from './Log4jsUtil';

export class Util {

  /**
   * 获取真实IP
   * @param req
   */
  public static getRealIp(req: Request) {
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

  public static isNotNull(str: any): boolean {
    return !!str;
  }


}


