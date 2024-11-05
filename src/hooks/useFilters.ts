import { useState } from "react";

export type FilterItem = {
  label: string;
  value: string;
  group?: string;
};

export type UseFiltersProps = {
  defaultValues?: string[];
} | null;

export type UseFilters = {
  filters: string[];
  addFilter: (filter: FilterItem) => void;
  removeFilter: (filter: FilterItem) => void;
  findFilter: (filter: FilterItem) => boolean;
  clearFilters: () => void;
};

const useFilters = (props?: UseFiltersProps) => {
  const defaultValues = props?.defaultValues || [];
  const [filters, setFilters] = useState<string[]>(defaultValues);

  const addFilter = (filter: FilterItem) => {
    setFilters([...filters, filter.value]);
  };

  const removeFilter = (filter: FilterItem) => {
    setFilters(filters.filter(f => f !== filter.value));
  };

  const findFilter = (filter: FilterItem) => filters.includes(filter.value);

  const clearFilters = () => {
    setFilters([]);
  };

  return {
    filters,
    addFilter,
    removeFilter,
    findFilter,
    clearFilters,
  };
};

export default useFilters;
