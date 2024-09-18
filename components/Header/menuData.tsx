import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Token Creator",
    path: "/",
    newTab: false,
    img: "/images/header/eth.svg"
  },
  {
    id: 2,
    title: "Solana Token Creator",
    path: "/about",
    newTab: false,
    img: "/images/header/solana.svg"
  },
  {
    id: 3,
    title: "Fair Launch",
    path: "/contact",
    newTab: false,
    img: "/images/header/fair.svg"
  },
  {
    id: 4,
    title: "Token Watcher",
    newTab: false,
    path: "/contact",
    img: "/images/header/watcher.svg"
  },
];
export default menuData;
