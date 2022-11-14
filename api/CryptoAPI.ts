import { PriceChange, SupportedCurrencyGroup } from "./interfaces";

export class CryptoAPI {
  static baseAPI = `https://api.pintu.co.id/v2`

  static async getSupportedCurrencies(): Promise<SupportedCurrencyGroup[]>{
    return fetch(this.baseAPI + '/wallet/supportedCurrencies').then(res => res.json()).then(res => res.payload);
  }

  static async getPriceChanges() : Promise<PriceChange[]>{
    return fetch(this.baseAPI + '/trade/price-changes').then(res => res.json()).then(res => res.payload);
  }
}
