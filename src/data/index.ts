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
    menuItemIcon: "/assets/icons/house.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Posts",
    menuItemLink: "/profile",
    menuItemIcon: "/assets/icons/messages-square.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Settings",
    menuItemLink: "/profile",
    menuItemIcon: "/assets/icons/settings.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Premium",
    menuItemLink: "/profile",
    menuItemIcon: "/assets/icons/banknote.svg",
    menuItemAlternateName: "profile-icon",
  },
  {
    menuItemName: "Log Out",
    menuItemLink: "/profile",
    menuItemIcon: "/assets/icons/log-out.svg",
    menuItemAlternateName: "profile-icon",
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

// Text Images&Videos Link Poll

export const createPostNavItems = [
  {
    itemName: "Text",
    itemType: "Text",
    itemValue: "text",
  },
  {
    itemName: "Images & Video",
    itemType: "Image",
    itemValue: "image",
  },
  {
    itemName: "Link",
    itemType: "Link",
    itemValue: "link",
  },
  {
    itemName: "Poll",
    itemType: "Poll",
    itemValue: "poll",
  },
];

export const editableIcons = [
  {
    iconName: "Bold",
    iconSrc: "/assets/icons/bold.svg",
    iconAlt: "bold-icon",
    iconApplyFormat: "bold",
  },
  {
    iconName: "Italic",
    iconSrc: "/assets/icons/italic.svg",
    iconAlt: "italic-icon",
    iconApplyFormat: "italic",
  },
  {
    iconName: "Underline",
    iconSrc: "/assets/icons/underline.svg",
    iconAlt: "underline-icon",
    iconApplyFormat: "underline",
  },
  {
    iconName: "Ordered List",
    iconSrc: "/assets/icons/list-ordered.svg",
    iconAlt: "ordered-list-icon",
    iconApplyFormat: "insertOrderedList",
  },
  {
    iconName: "Unordered List",
    iconSrc: "/assets/icons/list-collapse.svg",
    iconAlt: "unordered-list-icon",
    iconApplyFormat: "insertUnorderedList",
  },
  {
    iconName: "Link",
    iconSrc: "/assets/icons/link.svg",
    iconAlt: "link-icon",
    iconApplyFormat: "createLink",
  },
];

export interface EditableIconsType {
  iconName: string;
  iconSrc: string;
  iconAlt: string;
  iconApplyFormat: string;
}

export interface CreatePostNavItemType {
  itemName: string;
  itemType: string;
}

export interface MenuItemsType {
  menuItemName: string;
  menuItemLink: string;
  menuItemImageLink: string;
  menuItemImageAltName: string;
}
export interface ProfileMenuItemsType {
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
