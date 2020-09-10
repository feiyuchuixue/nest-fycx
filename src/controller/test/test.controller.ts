import { All, Controller, Get ,Post} from '@nestjs/common';
import { TestService} from '../../service/test/test.service';

@Controller('test')
export class TestController{

  constructor(private readonly testService :TestService ) {}


  // @All("message")
  @Post("message")
  async getMessage():Promise<any>{
    let result :Message ={
      msg: this.testService.getMessage(),
      code:200
    }
    return result;
  }

}

export interface Message {
  msg:string;
  data?:{};
  code:200
}
