import styles from "./PlaylistTitle.module.css";
import cn from "classnames";

export function PlaylistTitle() {
  return (
    <div className={styles.contentTitle}>
      <div className={cn(styles.playlistTitleCol, styles.col01)}>Трек</div>
      <div className={cn(styles.playlistTitleCol, styles.col02)}>
        Исполнитель
      </div>
      <div className={cn(styles.playlistTitleCol, styles.col03)}>Альбом</div>
      <div className={cn(styles.playlistTitleCol, styles.col04)}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  );
}