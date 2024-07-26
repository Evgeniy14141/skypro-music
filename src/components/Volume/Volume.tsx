import styles from "./Volume.module.css";

export function Volume() {
  return (
    <div className={styles.volume}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={styles.volumeProgress}>
          <input
            className={styles.volumeProgressLine}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}