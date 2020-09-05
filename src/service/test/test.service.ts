import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

  getMessage():string{
    return "this is a test message...";
  }

}
