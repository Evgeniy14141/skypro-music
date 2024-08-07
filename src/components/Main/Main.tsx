import styles from "./Main.module.css";
import { MainNavigation } from "@/components/MainNavigation/MainNavigation";
import { MainCenterblock } from "@/components/MainCenterblock/MainCenterblock";
import { MainSidebar } from "@/components/MainSidebar/MainSidebar";
import { FC } from "react";
import { TrackType } from "@/types/tracks";

type MainProps = {
  tracks: TrackType[];
};

export const Main: FC<MainProps> = ({ tracks }) => {
  return (
    <main className={styles.main}>
      <MainNavigation />
      <MainCenterblock tracks={tracks} />
      <MainSidebar />
      <div className={styles.footer}></div>
    </main>
  );
};