import icons from "./icons";

const { MdOutlineLibraryMusic } = icons;

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
    icons: <MdOutlineLibraryMusic size={21} />,
  },
  {
    path: "/zing-chart",
    text: "#zingchart",
    icons: <MdOutlineLibraryMusic size={21} />,
  },
  {
    path: "radio",
    text: "Radio",
    icons: <MdOutlineLibraryMusic size={21} />,
  },
  {
    path: "follow",
    text: "Theo Dõi",
    icons: <MdOutlineLibraryMusic size={21} />,
  },
];
