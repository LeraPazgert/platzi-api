import { IProduct } from '../../../types';
import { CategorySummuryProducts } from '../types';

export const useProductsCategoriesTableController = (products: IProduct[]) => {
  const groupedByCategory = products.reduce(
    (accum: Record<number, CategorySummuryProducts>, product: IProduct) => {
      accum[product.category.id] ??= {} as CategorySummuryProducts;
      accum[product.category.id].categoryName ??= product.category.name;
      accum[product.category.id].categoryPrice ??= 0;
      accum[product.category.id].categoryPrice += product.price;
      accum[product.category.id].categoryProducts ??= [];
      accum[product.category.id].categoryProducts.push({
        name: product.title,
        price: product.price,
      });
      return accum;
    },
    {} as Record<number, CategorySummuryProducts>,
  );

  return { dataModel: Object.values(groupedByCategory) };
};
