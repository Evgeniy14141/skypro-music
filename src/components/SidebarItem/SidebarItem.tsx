import Image from "next/image";
import styles from "./SidebarItem.module.css";

export function SidebarItem() {
  return (
    <div className={styles.sidebarItem}>
      <a className={styles.sidebarLink} href="#">
        <Image
          className={styles.sidebarImg}
          src="/img/playlist01.png"
          alt="day's playlist"
          width={250}
          height={150}
          priority
        />
      </a>
    </div>
  );
}