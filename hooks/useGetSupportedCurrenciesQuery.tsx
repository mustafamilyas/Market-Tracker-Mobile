import { useQuery } from 'react-query';
import { CryptoAPI } from '../api/CryptoAPI';
import { SupportedCurrencyGroup } from '../api/interfaces';

export function useGetSupportedCurrenciesQuery() {
  return useQuery('supportedCurrencies', async () => {
    return await CryptoAPI.getSupportedCurrencies();
  });
}
