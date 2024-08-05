import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";

import { formatTime } from "@/utils/formatTime";

type TrackProps = {
  track: TrackType;
  onClick: () => void;
};

export function Track({ track, onClick }: TrackProps) {
  const { name, author, album, duration_in_seconds } = track;

  return (
    <div className={styles.playlistItem} onClick={onClick}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan}></span>
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>
            {author}
          </span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>
            {album}
          </span>
        </div>
        <div className={styles.trackItem}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>
            {formatTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}