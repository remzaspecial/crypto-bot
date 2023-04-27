import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoinModule } from './modules/coin/coin.module';
import { TelegramModule } from './modules/telegram/telegram.module';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: databaseConfig.dialect,
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      autoLoadModels: true,
      synchronize: true,
    }),
    CoinModule,
    TelegramModule,
  ],
  providers: [AppService],
})
export class AppModule {}
