import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";

import { Filter } from "@/components/Filter/Filter";
import { TrackType } from "@/types/tracks";

import styles from "./MainCenterblock.module.css";

type MainCenterblockProps = {
  tracks: TrackType[];
  title: string;
};

export function MainCenterblock({ tracks, title }: MainCenterblockProps) {
  return (
    <>
      <h2 className={styles.centerblockH2}>{title}</h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </>
  );
}