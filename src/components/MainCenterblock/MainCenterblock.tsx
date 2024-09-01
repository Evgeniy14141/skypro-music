"use client"

import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";
import { Filter } from "@/components/Filter/Filter";
import { TrackType } from "@/types/tracks";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";

import styles from "./MainCenterblock.module.css";
import { setInitialPlaylist } from "@/store/features/tracksSlice";

type MainCenterblockProps = {
  tracks: TrackType[];
  title: string;
};

export function MainCenterblock({ tracks, title }: MainCenterblockProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialPlaylist(tracks))
  }, [tracks, dispatch]);
  return (
    <>
      <h2 className={styles.centerblockH2}>{title}</h2>
      {<Filter />}
      <PlaylistContent tracks={tracks} />
    </>
  );
}
