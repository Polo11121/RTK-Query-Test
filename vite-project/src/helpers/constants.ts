import { IoCalendarNumberSharp, IoGameController } from "react-icons/io5";
import {
  AiFillStar,
  AiFillFire,
  AiFillFolderOpen,
  AiFillWindows,
  AiFillAndroid,
  AiFillCar,
} from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { RiBarChart2Fill } from "react-icons/ri";
import {
  GiQueenCrown,
  GiPistolGun,
  GiBasketballBall,
  GiCastle,
  GiAncientSword,
  GiBrain,
  GiExplodingPlanet,
} from "react-icons/gi";
import { RiDownloadFill } from "react-icons/ri";
import {
  BsFillChatFill,
  BsPeopleFill,
  BsPhoneFill,
  BsPuzzleFill,
} from "react-icons/bs";
import { FaGhost, FaPlaystation, FaXbox } from "react-icons/fa";
import { BiHash, BiCodeAlt } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { SiNintendoswitch } from "react-icons/si";
import moment from "moment";

export const navbarContent = [
  { title: "Home" },
  { title: "Reviews" },
  {
    title: "New Releases",
    links: [
      { link: "Last 30 days", Icon: AiFillStar },
      { link: "This week", Icon: AiFillFire },
      { link: "Next week", Icon: TbPlayerTrackNext },
      { link: "Release calendar", Icon: IoCalendarNumberSharp },
    ],
  },
  {
    title: "Top",
    links: [
      { link: "Best of the year", Icon: TfiCup },
      { link: "Popular in 2022", Icon: RiBarChart2Fill },
      { link: "All time top 250", Icon: GiQueenCrown },
    ],
  },
  {
    title: "All Games",
  },
  {
    title: "Browse",
    hideButton: true,
    links: [
      { link: "Platforms", Icon: IoGameController },
      { link: "Stores", Icon: RiDownloadFill },
      { link: "Collections", Icon: AiFillFolderOpen },
      { link: "Reviews", Icon: BsFillChatFill },
      { link: "Genres", Icon: FaGhost },
      { link: "Creators", Icon: BsPeopleFill },
      { link: "Tags", Icon: BiHash },
      { link: "Developers", Icon: BiCodeAlt },
      { link: "Publishers", Icon: HiUserGroup },
    ],
  },
  {
    title: "Platforms",
    hideButton: true,
    links: [
      { link: "PC", Icon: AiFillWindows },
      { link: "PlayStation 4", Icon: FaPlaystation },
      { link: "Xbox One", Icon: FaXbox },
      { link: "Nintendo Switch", Icon: SiNintendoswitch },
      { link: "ioS", Icon: BsPhoneFill },
      { link: "Android", Icon: AiFillAndroid },
    ],
  },
  {
    title: "Genres",
    hideButton: true,
    links: [
      { link: "Action", Icon: GiExplodingPlanet },
      { link: "Strategy", Icon: GiBrain },
      { link: "RPG", Icon: GiAncientSword },
      { link: "Shooter", Icon: GiPistolGun },
      { link: "Adventure", Icon: GiCastle },
      { link: "Puzzle", Icon: BsPuzzleFill },
      { link: "Racing", Icon: AiFillCar },
      { link: "Sports", Icon: GiBasketballBall },
    ],
  },
];

const dateFormat = "YYYY-MM-DD";
const currentDate = moment();

export const gamesParams = [
  {
    path: "news-and-trending",
    params: {
      dates: `${currentDate
        .clone()
        .startOf("year")
        .format(dateFormat)},${currentDate
        .clone()
        .endOf("year")
        .format(dateFormat)}`,
      ordering: "-popularity",
    },
  },
  {
    path: "this-week",
    params: {
      dates: `${currentDate
        .clone()
        .startOf("week")
        .format(dateFormat)},${currentDate
        .clone()
        .endOf("week")
        .format(dateFormat)}`,
    },
  },
  {
    path: "last-30-days",
    params: {
      dates: `${currentDate
        .clone()
        .add(-30, "days")
        .format(dateFormat)},${currentDate.clone().format(dateFormat)}`,
    },
  },
  {
    path: "next-week",
    params: {
      dates: `${currentDate.clone().format(dateFormat)},${currentDate
        .clone()
        .add(7, "days")
        .format(dateFormat)}`,
    },
  },
  {
    path: "best-of-the-year",
    params: {
      dates: `${currentDate
        .clone()
        .startOf("year")
        .format(dateFormat)},${currentDate
        .clone()
        .endOf("year")
        .format(dateFormat)}`,
      ordering: "-metacritic",
    },
  },
  {
    path: "popular-in-2022",
    params: {
      dates: `${currentDate
        .clone()
        .subtract(1, "year")
        .startOf("year")
        .format(dateFormat)},${currentDate
        .clone()
        .subtract(1, "year")
        .endOf("year")
        .format(dateFormat)}`,
    },
  },
  {
    path: "all-time-top-250",
    params: {
      ordering: "-metacritic",
    },
  },
  {
    path: "all-games",
    params: {},
  },
];
