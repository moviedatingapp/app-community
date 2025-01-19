export interface EditableIconsType {
  iconName: string;
  iconSrc: string;
  iconAlt: string;
  iconApplyFormat: string;
}

export interface CreatePostNavItemType {
  itemName: string;
  itemType: string;
  itemValue: string;
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
