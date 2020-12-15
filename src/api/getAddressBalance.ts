import axios from 'axios';

const client = axios.create({
  auth: {
    username: 'ckey_f1fbf169cdc04b9dbb6ceea07af',
    password: ''
  }
})

export const getAddressBalance = async (address: string, withNft: boolean = false) => {
  return await client.get(`https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?nft=${withNft ? 'true' : 'false'}`)
}