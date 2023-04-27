import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';
import { Coin } from './coin.entity';

@Module({
  imports: [SequelizeModule.forFeature([Coin])],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinModule {}
