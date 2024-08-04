
import styles from "./Main.module.css";
import { MainNavigation } from "@/components/MainNavigation/MainNavigation";
import { MainCenterblock } from "@/components/MainCenterblock/MainCenterblock";
import { MainSidebar } from "@/components/MainSidebar/MainSidebar";
import { TrackType } from "@/types/tracks";
import { FC } from "react";


type MainProps = {
  tracks: TrackType[];
  setTrack: (track: TrackType) => void;
};

export const Main: FC<MainProps> = ({ tracks, setTrack }) => {
  return (
    <main className={styles.main}>
      <MainNavigation />
      <MainCenterblock tracks={tracks} setTrack={setTrack} />
      <MainSidebar />
    </main>
  );
};