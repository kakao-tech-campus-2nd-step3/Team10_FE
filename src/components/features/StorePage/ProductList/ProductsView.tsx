import GridView, { GridViewProps } from "@components/ItemView/GridView";
import ProductCard from "@components/features/StorePage/ProductCard";
import mockProducts from "@mocks/mockItem/mockProducts";
import { Product } from "@type/index";

type ProductsViewProps = {
  filters: string[];
} & Omit<GridViewProps<Product>, "items" | "ItemComponent">;

const ProductsView = ({ filters, ...props }: ProductsViewProps) => {
  const filteredProducts = mockProducts.filter(() => filters.length === 0);

  return <GridView items={filteredProducts} ItemComponent={ProductCard} {...props} />;
};

export default ProductsView;
