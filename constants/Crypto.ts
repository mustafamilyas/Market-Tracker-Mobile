interface Category {
  id: string;
  title: string;
  image?: string;
}

export const CRYPTO_CATEGORIES: Category[] = [
  {
    id: "MarketNew",
    title: "New",
  },
  {
    id: "MarketDeFi",
    title: "DeFi",
  },
  {
    id: "MarketNFT",
    title: "NFT/Gaming",
  },
  {
    id: "MarketCEX",
    title: "CEX",
  },
  {
    id: "MarketDEX",
    title: "DEX",
  },
  {
    id: "MarketLayer1",
    title: "Layer-1",
  },
  {
    id: "MarketInfrastructure",
    title: "Infrastructure",
  },
  {
    id: "MarketLending",
    title: "Lending",
  },
  {
    id: "MarketLayer2",
    title: "Layer-2",
  },
  {
    id: "MarketStablecoin",
    title: "Stablecoin",
  },
];
