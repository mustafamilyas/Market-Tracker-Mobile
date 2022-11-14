import { useQuery } from 'react-query';
import { CryptoAPI } from '../api/CryptoAPI';

export function useGetPriceChangesQuery() {
  return useQuery('priceChanges', async () => {
    return await CryptoAPI.getPriceChanges();
  });
}
