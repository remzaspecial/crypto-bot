import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Coin extends Model<Coin> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  symbol: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  price: number;

  @Column({ allowNull: false })
  changePercent24Hr: number;
}
