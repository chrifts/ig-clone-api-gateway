import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'redis',
        port: 6379        
      }
    })
  }

  checkHealth(): string {
    return 'OK!';
  }

  emitTestEvent(): void {
    this.client.emit<number>('user_created', {user: "pepe", id: "1"});
  }
}
