import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EchoService } from './echo.service';
import { echoUpdate } from './echo.update';

@Module({
  imports: [ConfigModule],
  providers: [echoUpdate, EchoService],
})
export class EchoModule {}
