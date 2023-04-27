import axios from 'axios';

export interface CoinMarketCapData {
  symbol: string;
  percentChange24h: number;
}

export async function getPriceChangePercentage(symbol: string): Promise<CoinMarketCapData | null> {
  const apiKey = process.env.COINMARKETCAP_API_KEY;
  if (!apiKey) {
    console.error('CoinMarketCap API key not found.');
    return null;
  }

  try {
    const response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': apiKey,
        },
      },
    );

    const data = response.data.data[symbol];
    if (!data) {
      console.error(`Failed to get data for symbol ${symbol}`);
      return null;
    }

    const percentChange24h = data.quote.USD.percent_change_24h;
    return {
      symbol,
      percentChange24h,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
