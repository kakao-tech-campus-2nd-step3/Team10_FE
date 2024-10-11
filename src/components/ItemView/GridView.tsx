import { GridItem, SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { ViewProps } from "@components/ItemView/type";
import type { Item } from "@type";

export type GridViewProps<T extends Item> = ViewProps<T> & SimpleGridProps;

const GridView = <T extends Item>({ items, ItemComponent, ...props }: GridViewProps<T>) => (
  <SimpleGrid {...props}>
    {items.map(item => (
      <GridItem key={item.id} as={ItemComponent} item={item} />
    ))}
  </SimpleGrid>
);

export default GridView;
