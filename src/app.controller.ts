import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/api_health')
  apiHealth(): string {
    console.log('api_health check')
    return this.appService.checkTCPHealth();
  }

  @Get('/event_health')
  eventHealth(): void {
    console.log('event_health check')
    try {
      this.appService.checkServiceHealth();
    } catch (error) {
      console.log(error)
    }
  }

  @Get('/message_health')
  messageHealth(): void {
    console.log('message_health controller')
    let res = this.appService.getHello();
    res.subscribe({
      next: (res) => console.log(res),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

}
