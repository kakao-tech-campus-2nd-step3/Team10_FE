import { Divider, Text } from "@chakra-ui/react";
import { ViewProps } from "@components/ItemView/BaseView";
import Card, { CardProps } from "@components/common/Card";
import type { Item } from "@type";

export type ListViewProps<T> = ViewProps<T> & {
  maxItems: number;
  title?: string;
} & CardProps;

const ListView = <T extends Item>({ items, ItemComponent, maxItems = 10, title, ...props }: ListViewProps<T>) => {
  const itemsToShow = items.slice(0, maxItems);

  return (
    <Card {...props}>
      {title && [
        <Text color="#22543D" fontSize="x-large" fontWeight="bold">
          {title}
        </Text>,
        <Divider mt="2" opacity="1" borderWidth="2px" borderColor="#22543D" />,
      ]}
      {itemsToShow.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </Card>
  );
};

export default ListView;
