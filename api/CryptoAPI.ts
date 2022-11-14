import { PriceChange, SupportedCurrencyGroup } from "./interfaces";

export class CryptoAPI {
  static baseAPI = "https://api.pintu.co.id/v2";

  static async getSupportedCurrencies(): Promise<SupportedCurrencyGroup[]> {
    const response = await fetch(
      this.baseAPI + "/wallet/supportedCurrencies"
    ).then((res) => res.json());
    return response.payload;
  }

  static async getPriceChanges(): Promise<PriceChange[]> {
    const response = await fetch(this.baseAPI + "/trade/price-changes").then(
      (res) => res.json()
    );
    return response.payload;
  }
}
