import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHello(): string {
    return this.appService.checkHealth();
  }

  @Get('/testEvents')
  emitTestEvent(): void {
    console.log('testEvents controller')
    this.appService.emitTestEvent();
  }


}
