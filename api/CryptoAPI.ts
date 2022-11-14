export class CryptoAPI {
  static baseAPI = `https://api.pintu.co.id/v2`

  static async getSupportedCurrencies() {
    return fetch(this.baseAPI + '/wallet/supportedCurrencies').then(res => res.json());
  }

  static async getPriceChanges() {
    return fetch(this.baseAPI + '/trade/price-changes').then(res => res.json());
  }
}
