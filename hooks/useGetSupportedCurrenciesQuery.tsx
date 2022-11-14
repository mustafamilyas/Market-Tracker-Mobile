import { useQuery } from 'react-query';
import { CryptoAPI } from '../api/CryptoAPI';

export function useGetSupportedCurrenciesQuery() {
  return useQuery('supportedCurrencies', () => CryptoAPI.getSupportedCurrencies())
};
