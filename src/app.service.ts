import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, timeout } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    @Inject(process.env.POST_SERVICE_NAME) private postServiceClient: ClientProxy,
  ) { }


  checkTCPHealth(): string {
    return 'OK!';
  }

  checkServiceHealth(): Observable<number> {
    return this.postServiceClient.emit<number>('check_health', { user: "pepe", id: "1" });
  }

  getHello(): Observable<string> {
    return this.postServiceClient
      .send<string>({ cmd: 'greeting' }, 'Hi Coder')
      .pipe(timeout(5000));
  }
}