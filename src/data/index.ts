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

export const profileMenuItems = [
  {
    menuItemName: "profile",
    menuItemLink: "/profile",
    menuItemIcon:"/assets/icons/house.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Posts",
    menuItemLink: "/profile",
    menuItemIcon:"/assets/icons/messages-square.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Settings",
    menuItemLink: "/profile",
    menuItemIcon:"/assets/icons/settings.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Premium",
    menuItemLink: "/profile",
    menuItemIcon:"/assets/icons/banknote.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Log Out",
    menuItemLink: "/profile",
    menuItemIcon:"/assets/icons/log-out.svg",
    menuItemAlternateName: "profile-icon",
  },
]
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
export interface ProfileMenuItemsType{
  menuItemName: string;
  menuItemLink: string;
  menuItemIcon: string;
  menuItemAlternateName: string;
}
export interface DropDownMenuItemsType {
  menuItemName: string;
  subMenuItems: {
    subMenuItemName: string;
    subMenuItemLink: string;
  }[];
}
