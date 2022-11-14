import { useQuery } from 'react-query';
import { CryptoAPI } from '../api/CryptoAPI';

export function useGetPriceChanges() {
  return useQuery('priceChanges', () => CryptoAPI.getPriceChanges);
};
