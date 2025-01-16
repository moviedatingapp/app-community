export const menuItems = [
  {
    menuItemName: "home",
    menuItemLink: "/home",
    menuItemImageLink: "/assets/icons/house.svg",
    menuItemImageAltName: "home-icon",
  },
  {
    menuItemName: "explore",
    menuItemLink: "/explore",
    menuItemImageLink: "/assets/icons/binoculars.svg",
    menuItemImageAltName: "explore-icon",
  },
  {
    menuItemName: "popular",
    menuItemLink: "/trending",
    menuItemImageLink: "/assets/icons/circle-arrow-out-up-right.svg",
    menuItemImageAltName: "popular-icon",
  },
  {
    menuItemName: "all",
    menuItemLink: "/home",
    menuItemImageLink: "/assets/icons/loader-pinwheel.svg",
    menuItemImageAltName: "all-icon",
  },
];

export const dropDownMenuItems = [
  {
    menuItemName: "custom feeds",
    subMenuItems: [
      {
        subMenuItemName: "",
        subMenuItemLink: "",
      },
    ],
  },
  {
    menuItemName: "recent",
    subMenuItems: [
      {
        subMenuItemName: "",
        subMenuItemLink: "",
      },
    ],
  },
  {
    menuItemName: "communities",
    subMenuItems: [
      {
        subMenuItemName: "",
        subMenuItemLink: "",
      },
    ],
  },
  {
    menuItemName: "resources",
    subMenuItems: [
      {
        subMenuItemName: "",
        subMenuItemLink: "",
      },
    ],
  },
];

export interface MenuItemsType {
  menuItemName: string;
  menuItemLink: string;
  menuItemImageLink: string;
  menuItemImageAltName: string;
}

export interface DropDownMenuItemsType {
  menuItemName: string;
  subMenuItems: {
    subMenuItemName: string;
    subMenuItemLink: string;
  }[];
}
