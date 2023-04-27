import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCoinDto {
  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  volume: number;
}
