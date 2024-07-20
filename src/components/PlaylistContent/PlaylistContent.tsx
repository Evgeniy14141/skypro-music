import { PlaylistTitle } from "@components/PlaylistTitle/PlaylistTitle";
import styles from "./PlaylistContent.module.css";
import { Playlist } from "@components/Playlist/Playlist";

export function PlaylistContent() {
  return (
    <div className={styles.centerblockContent}>
      <PlaylistTitle />
      <Playlist />
    </div>
  );
}