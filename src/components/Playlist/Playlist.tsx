import { Track } from "@/components/Track/Track";
import styles from "./Playlist.module.css";
import { TrackType } from "@/types/tracks";

type PlaylistProps = {
  tracks: TrackType[];
  setTrack: (track: TrackType) => void;
};

export function Playlist({ tracks, setTrack }: PlaylistProps) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <Track track={track} key={track._id} onClick={() => setTrack(track)} />
      ))}
    </div>
  );
}
