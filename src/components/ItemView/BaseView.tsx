import type { Item } from "@type";

export type ViewProps<T> = {
  items: T[];
  ItemComponent: React.ComponentType<{ item: T }>;
};

type BaseViewProps<T> = ViewProps<T> & {
  BoxComponent: React.ComponentType<{ children: React.ReactNode }>;
};

const BaseView = <T extends Item>({ items, ItemComponent, BoxComponent }: BaseViewProps<T>) => (
  <BoxComponent>
    {items.map(item => (
      <ItemComponent key={item.id} item={item} />
    ))}
  </BoxComponent>
);

export default BaseView;
