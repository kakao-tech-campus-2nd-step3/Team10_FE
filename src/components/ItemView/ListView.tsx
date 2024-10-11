import { ViewProps } from "@components/ItemView/type";
import Card, { CardProps } from "@components/common/Card";
import type { Item } from "@type";

export type ListViewProps<T extends Item> = ViewProps<T> & {
  maxItems: number;
} & CardProps;

const ListView = <T extends Item>({ items, ItemComponent, maxItems = 10, ...props }: ListViewProps<T>) => {
  const itemsToShow = items.slice(0, maxItems);

  return (
    <Card {...props}>
      {itemsToShow.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </Card>
  );
};

export default ListView;
