export type ProductsFilter = {
  limit: number;
  offset: number;
  sort: string;
  category: {
    name: string;
    checked: boolean;
  };
};
