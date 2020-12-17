import { client } from "./client";

export type CompoundAsset = {
  ctoken: {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    logo_url: string;
    quote_rate: number;
  };
  underlying: {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    logo_url: string;
    quote_rate: number;
  };
  borrow_apr: number;
  supply_apr: number;
};

export const getCompoundAssets = async () => {
  // console.log('getCompoundAssets');
  try {
    const result = await client.get('https://api.covalenthq.com/v1/1/networks/compound/assets/')
    // console.log(result.data.data);
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