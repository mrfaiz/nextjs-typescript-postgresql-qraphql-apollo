import {
  BsFilePost,
} from 'react-icons/bs';

import {
  MdFlag, MdNavigation, MdWeb
} from 'react-icons/md'

import { IoIosAdd, IoIosHome, IoMdCheckmark } from "react-icons/io";

type MenuOption = {
  name: string,
  icon: React.ComponentType,
  url: string,
  subItems?: MenuOption[],
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: IoIosHome,
    url: "/",
  },
  {
    name: "GraphQL",
    icon: MdFlag,
    url: "/graphql",
    subItems: [
      {
        name: "Apollo Client",
        icon: MdNavigation,
        url: "/graphql/apollo-client"
      }
    ]
  }, {
    name: "Rendering",
    icon: MdFlag,
    url: "/rendering",
    subItems: [
      {
        name: "Static Rendering",
        icon: MdWeb,
        url: "/rendering/static-rendering"
      },
      {
        name: "Server Side rendering",
        icon: MdWeb,
        url: "/rendering/server-side-rendering"
      },
      {
        name: "Client side Rendering",
        icon: MdWeb,
        url: "/rendering/client-side-rendering"
      }
    ]
  },
  {
    name: "Posts",
    icon: BsFilePost,
    url: "/posts"
  }
];

export type MenuItem = {
  name: string,
  icon: React.ComponentType,
  url: string,
  id: string,
  depth: number,
  subItems?: MenuItem[],
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);