export interface SidebarMenuInterface{
  url: string;
  title: string;
  icon: string;
  subMenu: SidebarSubMenuInterface[];
  isActive: boolean;
}

export interface SidebarSubMenuInterface{
  url: string;
  title: string;
  isActive: boolean;
}

