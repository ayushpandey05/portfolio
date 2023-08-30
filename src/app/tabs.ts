import {
  AboutActiveIconImg,
  AboutIconImg,
  AboutPageActiveIconImg,
  AboutPageIconImg,
  HomeActiveIconImg,
  HomeIconImg,
  WorkActiveIconImg,
  WorkIconImg,
} from "../assets/images";

const tabs = [
  {
    route: "/",
    label: "Home",
    icon: HomeIconImg,
    activeIcon: HomeActiveIconImg,
  },
  {
    route: "/about",
    label: "About",
    icon: AboutIconImg,
    activeIcon: AboutActiveIconImg,
  },
  {
    route: "/work",
    label: "Work",
    icon: WorkIconImg,
    activeIcon: WorkActiveIconImg,
  },
  {
    route: "/about-this-page",
    label: "About this page",
    icon: AboutPageIconImg,
    activeIcon: AboutPageActiveIconImg,
  },
];

export { tabs };
