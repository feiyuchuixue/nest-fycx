import { All, Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from '../../service/test/test.service';
import { MessageService } from '../../base/message/service/message.service';
import { Message } from '../../base/message/interfaces/message.interface';
import { TestDto } from './dto/testDto';

@Controller('test')
export class TestController {

  constructor(private readonly testService: TestService, private readonly msgService: MessageService) {
  }


  @Post('message')
  async getMessage(@Body() testDto: TestDto): Promise<Message> {
    // console.log('testDto start ==', (testDto.start -1) );
    //console.log('testDto start ==', (testDto.msgContent -1) );

    const ress = { start: 1, limit: 10, list: [] };
    return this.msgService.success(ress, 'success', 0);
  }


}




