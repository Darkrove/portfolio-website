import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiBookOpen,
  FiBookmark,
  FiCode,
  FiZap,
} from "react-icons/fi";

export const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
    section: "Navigation",
    icon: FiHome({ size: "1rem" }),
  },
  {
    id: "snippets",
    name: "Snippets",
    shortcut: ["s"],
    keywords: "snippets code",
    perform: () => (window.location.pathname = "snippets"),
    section: "Navigation",
    icon: FiCode({ size: "1rem" }),
  },
  {
    id: "links",
    name: "Links",
    shortcut: ["l"],
    keywords: "email link discord twitter github",
    perform: () => (window.location.pathname = "links"),
    section: "Navigation",
    icon: FiPaperclip({ size: "1rem" }),
  },
  //   {
  //     id: "now",
  //     name: "Now",
  //     shortcut: ["n"],
  //     keywords: "now",
  //     perform: () => (window.location.pathname = "now"),
  //     section: "Navigation",
  //     icon: FiClock({ size: "1rem" }),
  //   },
  //   {
  //     id: "dashboard",
  //     name: "Dashboard",
  //     shortcut: ["d"],
  //     keywords: "dashboard stars age stats",
  //     perform: () => (window.location.pathname = "dashboard"),
  //     section: "Navigation",
  //     icon: FiZap({ size: "1rem" }),
  //   },
  //   {
  //     id: "spotify",
  //     name: "Spotify Stats",
  //     shortcut: ["s"],
  //     keywords: "spotify stats",
  //     perform: () => (window.location.pathname = "spotify"),
  //     section: "Navigation",
  //     icon: FiHeadphones({ size: "1rem" }),
  //   },
  //   {
  //     id: "guestbook",
  //     name: "Guestbook",
  //     shortcut: ["g"],
  //     keywords: "guestbook",
  //     perform: () => (window.location.pathname = "guestbook"),
  //     section: "Navigation",
  //     icon: FiBookOpen({ size: "1rem" }),
  //   },
  //   {
  //     id: "blog",
  //     name: "Blog",
  //     shortcut: ["b"],
  //     keywords: "writing words article",
  //     perform: () => window.open("https://dev.to/asheeshh", "_blank"),
  //     section: "External",
  //     icon: FiBookmark({ size: "1rem" }),
  //   },
  {
    id: "projects",
    name: "Projects",
    shortcut: ["p"],
    keywords: "projects",
    perform: () => window.open("https://github.com/darkrove", "_blank"),
    section: "External",
    icon: FiCode({ size: "1rem" }),
  },
];
