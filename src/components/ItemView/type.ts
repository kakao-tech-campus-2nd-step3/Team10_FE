import type { Item } from "@type/index";

export type ViewProps<T extends Item> = {
  items: T[];
  ItemComponent: React.ComponentType<{ item: T }>;
};
