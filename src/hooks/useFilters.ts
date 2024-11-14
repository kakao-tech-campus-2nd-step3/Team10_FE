import { useState } from "react";

export type FilterItem = {
  label: string;
  value: string;
};

export type UseFiltersProps = {
  defaultValues?: string[];
} | null;

export type UseFilters = {
  filters: string[];
  addFilter: (filter: FilterItem) => void;
  removeFilter: (filter: FilterItem) => void;
  findFilter: (filter: FilterItem) => boolean;
  toggleFilter: (filter: FilterItem) => void;
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

  const setFilter = (filter: FilterItem) => {
    setFilters([filter.value]);
  };

  const findFilter = (filter: FilterItem) => filters.includes(filter.value);

  const toggleFilter = (filter: FilterItem) => {
    if (findFilter(filter)) {
      removeFilter(filter);
    } else {
      // addFilter(filter);
      setFilter(filter);
    }
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return {
    filters,
    addFilter,
    removeFilter,
    findFilter,
    toggleFilter,
    clearFilters,
  };
};

export default useFilters;
