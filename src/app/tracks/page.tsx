import styles from "./page.module.css";
import { TrackType } from "@/types/tracks";
import { getTracks } from "@/api/getTracksApi";
import { MainCenterblock } from "@/components/MainCenterblock/MainCenterblock";

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
    <>
      {errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <MainCenterblock tracks={tracks} title={"Все треки"} />
      )}
    </>
  );
}