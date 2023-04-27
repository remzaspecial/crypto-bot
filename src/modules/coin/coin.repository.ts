import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
import { Coin } from './coin.entity';

@Injectable()
export class CoinRepository {
  constructor(
    @InjectModel(Coin)
    private readonly coinModel: typeof Coin,
  ) {}

  async create(createCoinDto: CreateCoinDto): Promise<Coin> {
    return await this.coinModel.create(createCoinDto);
  }

  async findAll(): Promise<Coin[]> {
    return await this.coinModel.findAll();
  }

  async findOne(id: number): Promise<Coin> {
    return await this.coinModel.findByPk(id);
  }

  async update(id: number, updateCoinDto: UpdateCoinDto): Promise<Coin> {
    const coin = await this.findOne(id);
    return await coin.update(updateCoinDto);
  }

  async remove(id: number): Promise<void> {
    const coin = await this.findOne(id);
    await coin.destroy();
  }
}
