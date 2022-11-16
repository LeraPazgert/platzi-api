export type ProductsFilter = {
  limit: number;
  offset: number;
  sort: string;
  categories: number[];
  text: string;
  prices: number[];
};
