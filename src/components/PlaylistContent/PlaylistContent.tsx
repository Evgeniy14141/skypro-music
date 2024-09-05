"use client";

import { PlaylistTitle } from "@/components/PlaylistTitle/PlaylistTitle";
import styles from "./PlaylistContent.module.css";
import { Playlist } from "@/components/Playlist/Playlist";
import { TrackType } from "@/types/tracks";

import { useAppSelector } from "@/store/store";

type PlaylistContentProps = {
  tracks: TrackType[];
};

export function PlaylistContent({ tracks }: PlaylistContentProps) {
  const filterPlaylist = useAppSelector(
    (state) => state.playlist.filteredTracks
  );
  return (
    <div className={styles.centerblockContent}>
      <PlaylistTitle />
      <Playlist tracks={filterPlaylist} />
    </div>
  );
}
