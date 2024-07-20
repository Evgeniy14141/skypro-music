import styles from "./Player.module.css";
import cn from "classnames";

export function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.playerControls}>
        <div className={styles.playerBtnPrev}>
          <svg className={styles.playerBtnPrevSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div className={styles.playerBtnPlay}>
          <svg className={styles.playerBtnPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </svg>
        </div>
        <div className={styles.playerBtnNext}>
          <svg className={styles.playerBtnNextSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div className={cn(styles.playerBtnRepeat, styles.btnIcon)}>
          <svg className={styles.playerBtnRepeatSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className={cn(styles.playerBtnShuffle, styles.btnIcon)}>
          <svg className={styles.playerBtnShuffleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>

      <div className={styles.trackPlay}>
        <div className={styles.trackPlayContain}>
          <div className={styles.trackPlayImage}>
            <svg className={styles.trackPlaySvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.trackPlayAuthor}>
            <a className={styles.trackPlayAuthorLink} href="http://">
              Ты та...
            </a>
          </div>
          <div className={styles.trackPlayAlbum}>
            <a className={styles.trackPlayAlbumLink} href="http://">
              Баста
            </a>
          </div>
        </div>

        <div className={styles.trackPlayLikeDis}>
          <div className={cn(styles.trackPlayLike, styles.btnIcon)}>
            <svg className={styles.trackPlayLikeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div className={cn(styles.trackPlayDislike, styles.btnIcon)}>
            <svg className={styles.trackPlayDislikeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}