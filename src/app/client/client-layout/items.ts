import { bellIcon, calendarIcon, circleIcon, envelopeLinkIcon, inboxIcon, pencilIcon, starOutlineIcon } from "@progress/kendo-svg-icons";
import { DemoComponent } from "../demo/demo.component";
import { ClientLayoutComponent } from "./client-layout.component";
import { LoginComponent } from "src/app/login/login.component";

  export const items = [
  {
    text: "Dashboard",
    icon: "k-i-inbox",
    svgIcon: inboxIcon,
    selected: true,
    id: 0,
    path:"login1",
    component:LoginComponent
  },
  {
    separator: true,
    id: 1,
    path:"demo",
    component:DemoComponent
  },
  {
    text: "Current Investments",
    icon: "k-i-bell",
    svgIcon: bellIcon,
    id: 2,
    parentId: 3,
    path:"demo",
    component:DemoComponent
  },
  {
    text: " Investments",
    icon: "k-i-calendar",
    svgIcon: calendarIcon,
    id: 3,
    path:"demo",
    component:DemoComponent
  },
  {
    separator: true,
    path:"demo",
    component:DemoComponent
  },
  {
    text: "Projects",
    icon: "k-i-envelop-link",
    svgIcon: envelopeLinkIcon,
    path:"demo",
    component:DemoComponent
  },
  {
    text: "Wishlist",
    icon: "k-i-star-outline",
    svgIcon: starOutlineIcon,
    path:"demo",
    component:DemoComponent
  },
  {
    text: "Voting",
    icon: "k-i-star-outline",
    svgIcon: starOutlineIcon,
    path:"demo",
    component:DemoComponent
  },
  {
    text: "History",
    icon: "k-i-edit",
    svgIcon: pencilIcon,
    id: 4,
    parentId: 3,
    path:"demo",
    component:DemoComponent
  },
  
];
    
  
  