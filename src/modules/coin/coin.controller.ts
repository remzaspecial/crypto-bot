import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
import { CoinService } from './coin.service';

@Controller('coins')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get()
  async getAllCoins() {
    return await this.coinService.getAllCoins();
  }

  @Get(':id')
  async getCoinById(@Param('id') id: number) {
    return await this.coinService.getCoinById(id);
  }

  @Post()
  async createCoin(@Body() createCoinDto: CreateCoinDto) {
    return await this.coinService.createCoin(createCoinDto);
  }

  @Put(':id')
  async updateCoin(@Param('id') id: number, @Body() updateCoinDto: UpdateCoinDto) {
    return await this.coinService.updateCoin(id, updateCoinDto);
  }

  @Delete(':id')
  async deleteCoin(@Param('id') id: number) {
    return await this.coinService.deleteCoin(id);
  }
}
