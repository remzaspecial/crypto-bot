import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import config from './config/config';
import { CoinService } from './modules/coin/coin.service';
import { TelegramBotService } from './modules/telegram/telegram.service';
import { getPriceChangePercentage } from './utils/coinmarketcap';

@Injectable()
export class AppService {
  constructor(private readonly coinService: CoinService, private readonly telegramService: TelegramBotService) {}

  // Запускаем cron job каждый день в полночь
  @Cron('0 0 * * *')
  async handleCron() {
    try {
      const coins = await this.coinService.getAllCoins();
      const promises = coins.map(async (coin) => {
        const { symbol } = coin;
        const data = await getPriceChangePercentage(symbol);
        if (data) {
          const { percentChange24h } = data;
          const percentThreshold = 5; // Пороговый процент изменения цены для уведомления
          if (percentChange24h >= percentThreshold || percentChange24h <= -percentThreshold) {
            const message = `⚠️ ${symbol} price has changed by ${percentChange24h.toFixed(2)}% over the last 24 hours`;
            await this.telegramService.sendMessage(config.TELEGRAM_CHAT_ID, message);
          }
        }
      });
      await Promise.all(promises);
    } catch (error) {
      console.error(error);
    }
  }
}
