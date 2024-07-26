import { Bar } from "@/components/Bar/Bar";
import styles from "./page.module.css";
import { Main } from "@/components/Main/Main";
import { getTracks } from "../api/getTracksApi";
import { TrackType } from "@/types/tracks";

export default async function Home() {
  let tracks: TrackType[] = [];
  let errorMessage = "";

  try {
    tracks = await getTracks();
  } catch (error: unknown) {
    errorMessage =
      error instanceof Error
        ? "Возникли проблемы при загрузке треков: " + error.message
        : "Неизвестная ошибка";
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <Main tracks={tracks} />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}