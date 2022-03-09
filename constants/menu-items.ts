import {
    BsGrid3X3GapFill,
    BsPeople,
    BsShop,
    BsFilePost,

} from 'react-icons/bs';

import { IoIosAdd, IoIosHome, IoMdCheckmark  } from "react-icons/io";

  type MenuOption = {
    name: string,
    icon: React.ComponentType,
    url: string,
    subItems?: MenuOption[],
  };

const MENU_OPTIONS: MenuOption[] =  [
    {
      name: "Dashboard",
      icon: IoIosHome,
      url: "/",
    },
    {
      name: "Orders",
      icon: BsShop,
      url: "/orders",
      subItems: [
        {
          name: "New",
          icon: IoIosAdd,
          url: "/orders/new",
        },
        {
          name: "Completed",
          icon: IoMdCheckmark,
          url: "/orders/completed",
        },
      ],
    },
    {
      name: "Customers",
      icon: BsPeople,
      url: "/customers",
      subItems: [
        {
          name: "Corporate",
          icon: BsGrid3X3GapFill,
          url: "/customers/corporate",
        },
        {
          name: "SMB",
          icon: BsGrid3X3GapFill,
          url: "/customers/smb",
          subItems: [
            {
              name: "Retail",
              icon: BsPeople,
              url: "/customers/smb/retail",
            },
          ],
        },
      ],
    },
    {
      name: "Inventory",
      icon: BsGrid3X3GapFill,
      url: "/inventory",
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