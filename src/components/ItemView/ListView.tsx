import { ViewProps } from "@components/ItemView/type";
import Card, { CardProps } from "@components/common/Card";
import type { Item } from "@type/index";

export type ListViewProps<T extends Item> = ViewProps<T> & CardProps;

const ListView = <T extends Item>({ items, ItemComponent, ...props }: ListViewProps<T>) => (
  <Card {...props}>
    {items.map(item => (
      <ItemComponent key={item.id} item={item} />
    ))}
  </Card>
);

export default ListView;
