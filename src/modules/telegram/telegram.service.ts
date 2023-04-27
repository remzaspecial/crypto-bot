import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import config from '../../config/config';

@Injectable()
export class TelegramBotService {
  private bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);
  }

  async sendMessage(chatId: number, message: string) {
    try {
      await this.bot.telegram.sendMessage(chatId, message);
    } catch (error) {
      console.error(error);
    }
  }
}
