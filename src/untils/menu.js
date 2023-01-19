import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  GrEmptyCircle,
  FiPieChart,
  IoIosRadio,
  BsMusicPlayer,
} = icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá Nhân",
    icons: <MdOutlineLibraryMusic size={21} />,
  },
  {
    path: "",
    text: "Khám Phá",
    end: true,
    icons: <GrEmptyCircle size={21} />,
  },
  {
    path: "/zing-chart",
    text: "#zingchart",
    icons: <FiPieChart size={21} />,
  },
  {
    path: "radio",
    text: "Radio",
    icons: <IoIosRadio size={21} />,
  },
  {
    path: "follow",
    text: "Theo Dõi",
    icons: <BsMusicPlayer size={21} />,
  },
];
