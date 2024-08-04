import { PlaylistTitle } from "@/components/PlaylistTitle/PlaylistTitle";
import styles from "./PlaylistContent.module.css";
import { Playlist } from "@/components/Playlist/Playlist";
import { TrackType } from "@/types/tracks";

type PlaylistContentProps = {
  tracks: TrackType[];
  setTrack: (track: TrackType) => void;
};

export function PlaylistContent({ tracks, setTrack }: PlaylistContentProps) {
  return (
    <div className={styles.centerblockContent}>
      <PlaylistTitle />
      <Playlist tracks={tracks} setTrack={setTrack} />
    </div>
  );
}
