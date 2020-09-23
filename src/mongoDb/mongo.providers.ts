/**
 * @Author INS6+
 * @Date 2020/9/21 10:22
 * @Description:
 */
import * as mongoose from 'mongoose';
import {ConfigService} from '../base/config/config.service';


export const mongoProviders = [
  {
    provide: 'dbConnect',
    useFactory:
      async function(){
       let conf = new ConfigService()
       //console.log("conf 1111==",conf);
       let uri = 'mongodb://'+conf.get('host')+':'+conf.get('port')+'/'+conf.get('dbName')
       //console.log("uri ==========", uri);
       const user = conf.get('user');
       const pwd =conf.get('pwd');
       const authSource = conf.get('authSource')
       return await mongoose.connect(
         uri,
          {
            user: user,
            pass: pwd,
            authSource:authSource,
            useNewUrlParser: true,
            useUnifiedTopology: true,
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
