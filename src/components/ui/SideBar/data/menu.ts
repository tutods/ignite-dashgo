import { Link } from "shared/@types/Link";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

type Menu = {
  label: string;
  links: Link[];
}[];

const menu: Menu = [
  {
    label: "General",
    links: [
      {
        icon: RiDashboardLine,
        path: "/dashboard",
        text: "Dashboard",
      },
      {
        icon: RiContactsLine,
        path: "/users",
        text: "Users",
      },
    ],
  },
  {
    label: "Automation",
    links: [
      {
        icon: RiInputMethodLine,
        path: "/forms",
        text: "Forms",
      },
      {
        icon: RiGitMergeLine,
        path: "/automation",
        text: "Automation",
      },
    ],
  },
];

export { menu };