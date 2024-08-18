"use client";

import { useInitLikedTracks } from "@/hooks/useInitLikedTracks";
import styles from "./SideBarPersonal.module.css";

export function SideBarPersonal() {
  useInitLikedTracks();

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
      <div className={styles.sidebarIcon}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}