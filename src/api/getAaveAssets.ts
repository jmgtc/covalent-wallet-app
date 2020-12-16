import { client } from "./client";

export type AaveAsset = {
  atoken: {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    logo_url: string;
  };
  underlying: {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    logo_url: string;
    quote_rate: number;
  };
  variable_borrow_apr: number;
  stable_borrow_apr: number;
  supply_apy: number;
};

export const getAaveAssets = async () => {
  console.log('getCompoundAsset');
  try {
    const result = await client.get('https://api.covalenthq.com/v1/1/networks/aave/assets/')
    console.log(result.data.data);
    return result;
  } catch (error) {
    if (error.response) {
      console.log('api response error', error.response);
      if (error.response.data) {
        return error.response.data.error_message;
      }
      return error.response;
    } else if (error.request) {
      console.log('api request error', error.request);
      return error.request;
    } else {
      console.log('unexpected api error', error.message);
      return error.message;
    }
  }
}