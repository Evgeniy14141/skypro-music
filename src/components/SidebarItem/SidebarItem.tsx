import Image from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

type SidebarProps = { src: string, alt: string, href: string }
export function SidebarItem({ src, alt, href}: SidebarProps) {
  return (
    <div className={styles.sidebarItem}>
      <Link className={styles.sidebarLink} href={href}>
        <Image
          className={styles.sidebarImg}
          src={src}
          alt={alt}
          width={250}
          height={150}
          priority
        />
      </Link>
    </div>
  );
}
