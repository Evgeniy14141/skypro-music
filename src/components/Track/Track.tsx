import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";

type TrackProps = {
  track: TrackType;
};

export function Track({ track }: TrackProps) {
  const { name, author, album, duration_in_seconds } = track;
  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div>
            <a className={styles.trackTitleLink} href="http://">
              {name} <span className={styles.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {album}
          </a>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>

          <span className={styles.trackTimeText}>{duration_in_seconds}</span>
        </div>
      </div>
    </div>
  );
}
