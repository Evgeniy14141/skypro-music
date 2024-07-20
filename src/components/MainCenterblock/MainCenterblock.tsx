import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import styles from "./MainCenterblock.module.css";
import { Search } from "@components/Search/Search";
import { Filter } from "@components/Filter/Filter";

export function MainCenterblock() {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <PlaylistContent />
    </div>
  );
}