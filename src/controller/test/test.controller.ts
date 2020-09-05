import { Controller, Get } from '@nestjs/common';
import { TestService} from '../../service/test/test.service';

@Controller('test')
export class TestController {

  constructor(private readonly testService :TestService ) {}

  @Get("message")
  async getMessage():Promise<string>{
    return this.testService.getMessage();
  }

}
