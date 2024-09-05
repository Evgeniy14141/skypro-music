"use client";

import styles from "./Filter.module.css";
import FilterItem from "@/components/FilterItem/FilterItem";
import { useState } from "react";
import { filters } from "@/components/FilterItem/data";
import { useAppSelector } from "@/store/store";

export function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const genresList = useAppSelector(
    (state) => state.playlist.filterOptions.genre
  );
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        isOpened={activeFilter === filters[0].title ? true : false}
        handleFilterClick={handleFilterClick}
        title={filters[0].title}
        value={filters[0].value}
        filterQuantity={authorsList.length}
      />
      <FilterItem
        isOpened={activeFilter === filters[1].title ? true : false}
        handleFilterClick={handleFilterClick}
        title={filters[1].title}
        value={filters[1].value}
        filterQuantity={genresList.length}
      />
      <FilterItem
        isOpened={activeFilter === filters[2].title ? true : false}
        handleFilterClick={handleFilterClick}
        title={filters[2].title}
        value={filters[2].value}
        filterQuantity={0}
      />
    </div>
  );
}
