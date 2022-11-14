import { useEffect } from 'react';
import { useGetPriceChangesQuery } from './useGetPriceChangesQuery';
import { useGetSupportedCurrenciesQuery } from './useGetSupportedCurrenciesQuery';

export function useGetMarketChanges() {
  const currencies = useGetSupportedCurrenciesQuery();
  const priceChanges = useGetPriceChangesQuery();
  const marketPriceChanges = priceChanges.data?.map((pc) => {
    return {
      ...pc,
      ...currencies.data?.find(
        (c) => c.currencySymbol.toLowerCase() === pc.pair.split('/')[0],
      ),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      priceChanges.refetch();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return marketPriceChanges ?? [];
}
