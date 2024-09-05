import { SideBarPersonal } from "@/components/SideBarPersonal/SideBarPersonal";
import styles from "./MainSidebar.module.css";
import { SidebarItem } from "@/components/SidebarItem/SidebarItem";

const sidebarItems = [
  {
    id: 1,
    src: "/img/playlist01.png",
    alt: "Плейлист дня",
    href: "/tracks/selection/1",
  },
  {
    id: 2,
    src: "/img/playlist02.png",
    alt: "Танцевальные хиты",
    href: "/tracks/selection/2",
  },
  {
    id: 3,
    src: "/img/playlist03.png",
    alt: "Инди-заряд",
    href: "/tracks/selection/3",
  },
];
export function MainSidebar() {
  return (
    <div className={styles.sidebar}>
      <SideBarPersonal />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              src={item.src}
              alt={item.alt}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
