import Image from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

export function SidebarItem() {
  return (
    <div className={styles.sidebarItem}>
      <Link className={styles.sidebarLink} href="/tracks/selection/1">
        <Image
          className={styles.sidebarImg}
          src="/img/playlist01.png"
          alt="day's playlist"
          width={250}
          height={150}
          priority
        />
      </Link>
    </div>
  );
}
