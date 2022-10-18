import { Module } from '@nestjs/common';
import { EchoService } from './echo.service';
import { echoUpdate } from './echo.update';

@Module({
  providers: [echoUpdate, EchoService],
})
export class EchoModule {}
