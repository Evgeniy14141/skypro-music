import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";
import styles from "./MainCenterblock.module.css";
import { Search } from "@/components/Search/Search";
import { Filter } from "@/components/Filter/Filter";
import { TrackType } from "@/types/tracks";

type MainCenterblockProps = {
  tracks: TrackType[];
};

export function MainCenterblock({ tracks }: MainCenterblockProps) {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </div>
  );
}