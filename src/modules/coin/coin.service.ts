import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Coin } from './coin.entity';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';

@Injectable()
export class CoinService {
  constructor(
    @InjectModel(Coin)
    private readonly coinRepository: typeof Coin,
  ) {}

  async getAllCoins(): Promise<Coin[]> {
    return await this.coinRepository.findAll();
  }

  async getCoinById(id: number): Promise<Coin> {
    return await this.coinRepository.findByPk(id);
  }

  async createCoin(createCoinDto: CreateCoinDto): Promise<Coin> {
    return await this.coinRepository.create(createCoinDto);
  }

  async updateCoin(id: number, updateCoinDto: UpdateCoinDto): Promise<Coin> {
    const [numOfRows, [updatedCoin]] = await this.coinRepository.update(updateCoinDto, {
      where: { id },
      returning: true,
    });
    if (numOfRows === 0) {
      throw new Error(`Coin with id ${id} not found`);
    }
    return updatedCoin;
  }

  async deleteCoin(id: number): Promise<void> {
    const numOfRows = await this.coinRepository.destroy({ where: { id } });
    if (numOfRows === 0) {
      throw new Error(`Coin with id ${id} not found`);
    }
  }
}
