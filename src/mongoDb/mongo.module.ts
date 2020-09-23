/**
 * @Author INS6+
 * @Date 2020/9/21 10:22
 * @Description:
 */
import {Module} from '@nestjs/common';
import {mongoProviders} from './mongo.providers';

@Module({
  providers:[...mongoProviders],
  exports:[...mongoProviders]
})

export class mongoModule{}
