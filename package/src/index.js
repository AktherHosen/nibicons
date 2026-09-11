import { createElement } from "react";

const iconMarkup = {
  home: '<path d="M4 12 12 4l8 8"/><path d="M6 10.5V20h4v-6h4v6h4v-9.5"/>',
  menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  arrowRight:
    '<line x1="4" y1="12" x2="18" y2="12"/><polyline points="13 7 18 12 13 17"/>',
  arrowLeft:
    '<line x1="20" y1="12" x2="6" y2="12"/><polyline points="11 7 6 12 11 17"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  mapPin:
    '<path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/>',
  grid: '<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
  list: '<line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  search:
    '<circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.5" y1="15.5" x2="20.5" y2="20.5"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  plus: '<line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>',
  minus: '<line x1="4" y1="12" x2="20" y2="12"/>',
  check: '<polyline points="4 13 9 18 20 6"/>',
  x: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
  edit: '<path d="M4 20l1-4 11-11 3 3-11 11-4 1Z"/><line x1="14" y1="6" x2="18" y2="10"/>',
  trash:
    '<path d="M5 7h14"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M7 7l1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"/>',
  link: '<path d="M9 15 15 9"/><path d="M11 6h3a4 4 0 0 1 0 8h-2"/><path d="M13 18h-3a4 4 0 0 1 0-8h2"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  unlock:
    '<rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/>',
  file: '<path d="M7 3h7l4 4v14H7Z"/><polyline points="14 3 14 7 18 7"/>',
  folder: '<path d="M4 6h6l2 2h8v11H4Z"/>',
  download:
    '<path d="M12 4v11"/><polyline points="7 11 12 16 17 11"/><line x1="5" y1="20" x2="19" y2="20"/>',
  upload:
    '<path d="M12 20V9"/><polyline points="7 13 12 8 17 13"/><line x1="5" y1="4" x2="19" y2="4"/>',
  calendar:
    '<rect x="4" y="5" width="16" height="15" rx="1"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
  clock: '<circle cx="12" cy="12" r="8"/><polyline points="12 7 12 12 16 14"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/>',
  mail: '<rect x="3" y="6" width="18" height="13" rx="1"/><polyline points="3 7 12 14 21 7"/>',
  bell: '<path d="M6 10a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  phone:
    '<path d="M6 4h3l2 5-2.5 2a12 12 0 0 0 5.5 5.5l2-2.5 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2Z"/>',
  share:
    '<circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><line x1="8" y1="11" x2="16" y2="7"/><line x1="8" y1="13" x2="16" y2="17"/>',
  wifi: '<path d="M5 9a11 11 0 0 1 14 0"/><path d="M8 12.5a7 7 0 0 1 8 0"/><path d="M11 16a3 3 0 0 1 2 0"/>',
  camera:
    '<path d="M4 8h3l2-2h6l2 2h3v11H4Z"/><circle cx="12" cy="13.5" r="3.5"/>',
  image:
    '<rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="8.5" cy="9.5" r="1.7"/><polyline points="4 17 9 12 13 16 16 13 20 17"/>',
  heart:
    '<path d="M12 20 4.5 12.5a4.5 4.5 0 0 1 6.4-6.3L12 7l1.1-.8a4.5 4.5 0 0 1 6.4 6.3Z"/>',
  star: '<polygon points="12 3 14.6 9 21 9.6 16 14 17.5 20.5 12 17 6.5 20.5 8 14 3 9.6 9.4 9"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4Z"/>',
  tag: '<path d="M11 3H4v7l10 10 7-7Z"/><circle cx="8" cy="8" r="1.3"/>',
  shoppingCart:
    '<path d="M3 4h3l2 11h10l2-7H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
  creditCard:
    '<rect x="3" y="6" width="18" height="13" rx="1"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  cloud:
    '<path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.4 1.8A4 4 0 0 1 17 18Z"/>',
};

function createIcon(markup, displayName) {
  function Icon({ size = 24, strokeWidth = 1.75, ...props }) {
    return createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": props["aria-label"] ? undefined : true,
      ...props,
      dangerouslySetInnerHTML: { __html: markup },
    });
  }

  Object.defineProperty(Icon, "displayName", { value: displayName });
  return Icon;
}

export const Home = createIcon(iconMarkup.home, "Home");
export const Menu = createIcon(iconMarkup.menu, "Menu");
export const ArrowRight = createIcon(iconMarkup.arrowRight, "ArrowRight");
export const ArrowLeft = createIcon(iconMarkup.arrowLeft, "ArrowLeft");
export const ChevronDown = createIcon(iconMarkup.chevronDown, "ChevronDown");
export const MapPin = createIcon(iconMarkup.mapPin, "MapPin");
export const Grid = createIcon(iconMarkup.grid, "Grid");
export const List = createIcon(iconMarkup.list, "List");
export const Search = createIcon(iconMarkup.search, "Search");
export const Settings = createIcon(iconMarkup.settings, "Settings");
export const Eye = createIcon(iconMarkup.eye, "Eye");
export const Plus = createIcon(iconMarkup.plus, "Plus");
export const Minus = createIcon(iconMarkup.minus, "Minus");
export const Check = createIcon(iconMarkup.check, "Check");
export const X = createIcon(iconMarkup.x, "X");
export const Edit = createIcon(iconMarkup.edit, "Edit");
export const Trash = createIcon(iconMarkup.trash, "Trash");
export const Link = createIcon(iconMarkup.link, "Link");
export const Lock = createIcon(iconMarkup.lock, "Lock");
export const Unlock = createIcon(iconMarkup.unlock, "Unlock");
export const File = createIcon(iconMarkup.file, "File");
export const Folder = createIcon(iconMarkup.folder, "Folder");
export const Download = createIcon(iconMarkup.download, "Download");
export const Upload = createIcon(iconMarkup.upload, "Upload");
export const Calendar = createIcon(iconMarkup.calendar, "Calendar");
export const Clock = createIcon(iconMarkup.clock, "Clock");
export const User = createIcon(iconMarkup.user, "User");
export const Mail = createIcon(iconMarkup.mail, "Mail");
export const Bell = createIcon(iconMarkup.bell, "Bell");
export const Phone = createIcon(iconMarkup.phone, "Phone");
export const Share = createIcon(iconMarkup.share, "Share");
export const Wifi = createIcon(iconMarkup.wifi, "Wifi");
export const Camera = createIcon(iconMarkup.camera, "Camera");
export const Image = createIcon(iconMarkup.image, "Image");
export const Heart = createIcon(iconMarkup.heart, "Heart");
export const Star = createIcon(iconMarkup.star, "Star");
export const Bookmark = createIcon(iconMarkup.bookmark, "Bookmark");
export const Tag = createIcon(iconMarkup.tag, "Tag");
export const ShoppingCart = createIcon(iconMarkup.shoppingCart, "ShoppingCart");
export const CreditCard = createIcon(iconMarkup.creditCard, "CreditCard");
export const Sun = createIcon(iconMarkup.sun, "Sun");
export const Moon = createIcon(iconMarkup.moon, "Moon");
export const Cloud = createIcon(iconMarkup.cloud, "Cloud");

export const iconNames = Object.keys(iconMarkup);
