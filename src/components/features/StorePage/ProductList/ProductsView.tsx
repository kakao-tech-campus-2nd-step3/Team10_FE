import { useGetProducts } from "@api/productApi";
import GridView, { GridViewProps } from "@components/ItemView/GridView";
import ProductCard from "@components/features/StorePage/ProductCard";
import { Product } from "@type/index";

type ProductsViewProps = {
  filters: string[];
} & Omit<GridViewProps<Product>, "items" | "ItemComponent">;

const ProductsView = ({ filters, ...props }: ProductsViewProps) => {
  const { data: products } = useGetProducts(filters[0] ? Number(filters[0]) : 0);

  return (
    <GridView
      items={(products || []).map((p: Product) => ({ ...p, link: `/store/${p.id}` }))}
      ItemComponent={ProductCard}
      {...props}
    />
  );
};

export default ProductsView;
