import { Module } from '@nestjs/common';
import { TelegramBotService } from './telegram.service';

@Module({
  providers: [TelegramBotService],
})
export class TelegramModule {}
