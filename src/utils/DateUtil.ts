/**
 * @Author INS6+
 * @Date 2020/9/10 14:44
 * @Description: 时间转换工具类
 */
import * as Moment from 'moment'; // 处理时间的工具

export class DateUtil {

  public static dateFormat(date?: (Date | number), format?: string) {
    if (!!format) {
      return Moment(date).format(format);
    } else {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  }

  public static getCurrentDate(format?: string) {
    if (!!format) {
      return Moment(new Date()).format(format);
    } else {
      return Moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
  }


}

