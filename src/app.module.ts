import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import postServiceModule from './ClientProviders/options';

@Module({
  imports: [
    ClientsModule.register([
      postServiceModule
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
