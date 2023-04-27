# IN PROGRESS
# crypto-bot

A Telegram bot that provides information on cryptocurrencies using the CoinMarketCap API. The bot is built with [NestJS](https://nestjs.com/) and uses [Telegraf](https://telegraf.js.org/) to interact with the Telegram API.

## Features

- Get a list of cryptocurrencies and their prices
- Get information about a specific cryptocurrency by symbol (e.g. BTC, ETH)
- Receive notifications via Telegram when a cryptocurrency's price changes by a specified percentage

## Technologies

- [NestJS](https://nestjs.com/)
- [Sequelize](https://sequelize.org/)
- [Telegraf](https://telegraf.js.org/)
- [CoinMarketCap API](https://coinmarketcap.com/api/)
- MySQL

## Installation

1. Clone the repository:

```bash
git clone https://github.com/remzaspecial/crypto-bot.git
```

2. Install dependencies:

```bash
cd crypto-bot
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Replace the `COINMARKETCAP_API_KEY` value with your own API key. You can obtain an API key by creating an account on the [CoinMarketCap API website](https://coinmarketcap.com/api/).

4. Create a MySQL database and set up the connection in the `database.config.ts` file.

5. Start the application:

```bash
npm run build
npm run start
```

## Usage

Start a chat with the bot on Telegram and use the following commands:

- `/list` - Get a list of all cryptocurrencies and their prices
- `/{symbol}` - Get information about a specific cryptocurrency (e.g. `/BTC` for Bitcoin)
- `/notify {percentage}` - Receive notifications when a cryptocurrency's price changes by a specified percentage (e.g. `/notify 5` to receive notifications when the price changes by 5% or more)

## Contributing

Contributions are welcome! Please open an issue or pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.