/**
 * @Author INS6+
 * @Date 2020/9/21 10:34
 * @Description:
 */
import { Mongoose } from 'mongoose';

import { SysAdminSchema } from './schemas/sysAdmin.schemas';

export const sysAdminProviders = [
  {

    provide: 'sysAdminProvide',
    useFactory: (mongoose: Mongoose) => mongoose.model('sysAdmin', SysAdminSchema,'sys_admin'),
    inject: ['dbConnect'],
  },
];
