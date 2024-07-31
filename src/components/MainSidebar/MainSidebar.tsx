//import Image from "next/image";
import styles from "./MainSidebar.module.css";
import { SidebarItem } from "@/components/SidebarItem/SidebarItem";

export function MainSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </div>
      </div>
    </div>
  );
}
