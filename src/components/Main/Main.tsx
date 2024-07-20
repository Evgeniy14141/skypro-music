//import Image from "next/image";
import styles from "./Main.module.css";
import { MainNavigation } from "@components/MainNavigation/MainNavigation";
import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";

export function Main() {
  return (
    <main className={styles.main}>
      <MainNavigation />
      <MainCenterblock />
      <MainSidebar />
    </main>
  );
}