import styles from "./Filter.module.css";
import cn from "classnames";

export function Filter() {
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={cn(styles.filterButton, styles.btnText)}>исполнителю</div>
      <div className={cn(styles.filterButton, styles.btnText)}>
        году выпуска
      </div>
      <div className={cn(styles.filterButton, styles.btnText)}>жанру</div>
    </div>
  );
}