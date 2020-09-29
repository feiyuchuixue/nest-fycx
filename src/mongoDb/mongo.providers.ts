/**
 * @Author INS6+
 * @Date 2020/9/21 10:22
 * @Description:
 */
import * as mongoose from 'mongoose';
import { Util } from '../utils/Util';


export const mongoProviders = [
  {
    provide: 'dbConnect',
    useFactory:
      async function(){

       const uri = 'mongodb://'+  Util.getEnvConf().get('mongo.host')+':'+ Util.getEnvConf().get('mongo.port')+'/'+ Util.getEnvConf().get('mongo.dbName')
       const user =  Util.getEnvConf().get('mongo.user');
       const pwd = Util.getEnvConf().get('mongo.pwd');
       const authSource =  Util.getEnvConf().get('mongo.authSource')
       const poolSize = Number( Util.getEnvConf().get('mongo.poolSize'));
       return await mongoose.connect(
         uri,
          {
            user: user,
            pass: pwd,
            authSource:authSource,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            poolSize:poolSize
          })


      }

  },
];


/**
 *
 *       async (conf:ConfigService): Promise<typeof mongoose> =>


 await mongoose.connect(
 //conf.get('ip'),
 new ConfigService().get('ip'),
 {
          user: 'liuty',
          pass: 'liuty8088',
          authSource: 'admin',
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
 *
 *
 */
