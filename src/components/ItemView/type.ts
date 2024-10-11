import type { Item } from "@type";

export type ViewProps<T extends Item> = {
  items: T[];
  ItemComponent: React.ComponentType<{ item: T }>;
};
