/**
 * @Author INS6+
 * @Date 2020/9/18 17:42
 * @Description:
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { stringify } from 'querystring';

export class SysAdmin extends Document {

  // @Prop()
  // _id:string

  @Prop()
  id:string

  @Prop()
  name: string;
  @Prop()
  nickName: string;
  @Prop()
  password: string;
  @Prop()
  phone: string;
  @Prop()
  createTime: string;


}

export const SysAdminSchema = SchemaFactory.createForClass(SysAdmin);
