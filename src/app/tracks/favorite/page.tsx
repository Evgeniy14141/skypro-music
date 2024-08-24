"use client";

import { MainCenterblock } from "@/components/MainCenterblock/MainCenterblock";
import { useAppSelector } from "@/store/store";
//import styles from "@/app/tracks/favorite/page.module.css";

export default function FavoritePage() {
  const favoriteTracks = useAppSelector((state) => state.playlist.likedTracks);

  return <MainCenterblock tracks={favoriteTracks} title={"Мои треки"} />;
}
