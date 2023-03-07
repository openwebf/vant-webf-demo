import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "/",
    path: "/",
    component: () => import("./view/Home"),
    meta: {
      title: "Home",
    },
  },
  {
    name: "button",
    path: "/button",
    component: () => import("./view/components/button"),
    meta: {
      title: "Button",
    },
  },
  {
    name: "icon",
    path: "/icon",
    component: () => import("./view/components/icon"),
    meta: {
      title: "Icon",
    },
  },
  {
    name: "cell",
    path: "/cell",
    component: () => import("./view/components/cell"),
    meta: {
      title: "Cell",
    },
  },
  {
    name: "image",
    path: "/image",
    component: () => import("./view/components/image"),
    meta: {
      title: "Image",
    },
  },
  {
    name: "layout",
    path: "/layout",
    component: () => import("./view/components/layout"),
    meta: {
      title: "Layout",
    },
  },
  {
    name: "popup",
    path: "/popup",
    component: () => import("./view/components/popup"),
    meta: {
      title: "Popup",
    },
  },
  {
    name: "popover",
    path: "/popover",
    component: () => import("./view/components/popover"),
    meta: {
      title: "popover",
    },
  },
  {
    name: "space",
    path: "/space",
    component: () => import("./view/components/space"),
    meta: {
      title: "Space",
    },
  },
  {
    name: "toast",
    path: "/toast",
    component: () => import("./view/components/toast"),
    meta: {
      title: "Toast",
    },
  },
  {
    name: "overlay",
    path: "/overlay",
    component: () => import("./view/components/overlay"),
    meta: {
      title: "Overlay",
    },
  },
  {
    name: "transition",
    path: "/transition",
    component: () => import("./view/components/transition"),
    meta: {
      title: "Transition",
    },
  },
  {
    name: "checkbox",
    path: "/checkbox",
    component: () => import("./view/components/checkbox"),
    meta: {
      title: "Checkbox",
    },
  },
  {
    name: "datetimePicker",
    path: "/datetimePicker",
    component: () => import("./view/components/datetimePicker"),
    meta: {
      title: "datetimePicker",
    },
  },
  {
    name: "radio",
    path: "/radio",
    component: () => import("./view/components/radio"),
    meta: {
      title: "radio",
    },
  },
  {
    name: "badge",
    path: "/badge",
    component: () => import("./view/components/badge"),
    meta: {
      title: "badge",
    },
  },
  {
    name: "tag",
    path: "/tag",
    component: () => import("./view/components/tag"),
    meta: {
      title: "tag",
    },
  },
  {
    name: "divider",
    path: "/divider",
    component: () => import("./view/components/divider"),
    meta: {
      title: "divider",
    },
  },
  {
    name: "collapse",
    path: "/collapse",
    component: () => import("./view/components/collapse"),
    meta: {
      title: "collapse",
    },
  },
  {
    name: "card",
    path: "/card",
    component: () => import("./view/components/card"),
    meta: {
      title: "card",
    },
  },
  {
    name: "treeSelect",
    path: "/treeSelect",
    component: () => import("./view/components/treeSelect"),
    meta: {
      title: "treeSelect",
    },
  },
  {
    name: "slider",
    path: "/slider",
    component: () => import("./view/components/slider"),
    meta: {
      title: "slider",
    },
  },
  {
    name: "switch",
    path: "/switch",
    component: () => import("./view/components/switch"),
    meta: {
      title: "switch",
    },
  },
  {
    name: "tab",
    path: "/tab",
    component: () => import("./view/components/tab"),
    meta: {
      title: "tab",
    },
  },
  {
    name: "nav",
    path: "/nav",
    component: () => import("./view/components/nav"),
    meta: {
      title: "nav",
    },
  },
  {
    name: "grid",
    path: "/grid",
    component: () => import("./view/components/grid"),
    meta: {
      title: "grid",
    },
  },
  {
    name: "noticeBar",
    path: "/noticeBar",
    component: () => import("./view/components/noticeBar"),
    meta: {
      title: "noticeBar",
    },
  },
  {
    name: "loading",
    path: "/loading",
    component: () => import("./view/components/loading"),
    meta: {
      title: "loading",
    },
  },
  {
    name: "picker",
    path: "/picker",
    component: () => import("./view/components/picker"),
    meta: {
      title: "picker",
    },
  },
  {
    name: "filed",
    path: "/filed",
    component: () => import("./view/components/filed"),
    meta: {
      title: "filed",
    },
  },
  {
    name: "form",
    path: "/form",
    component: () => import("./view/components/form"),
    meta: {
      title: "form",
    },
  },
  {
    name: "stepper",
    path: "/stepper",
    component: () => import("./view/components/stepper"),
    meta: {
      title: "stepper",
    },
  },
  {
    name: "numberKeyboard",
    path: "/numberKeyboard",
    component: () => import("./view/components/numberKeyboard"),
    meta: {
      title: "numberKeyboard",
    },
  },
  {
    name: "swipe",
    path: "/swipe",
    component: () => import("./view/components/swipe"),
    meta: {
      title: "swipe",
    },
  },
  {
    name: "notify",
    path: "/notify",
    component: () => import("./view/components/notify"),
    meta: {
      title: "notify",
    },
  },
  {
    name: "search",
    path: "/search",
    component: () => import("./view/components/search"),
    meta: {
      title: "search",
    },
  },
  {
    name: "dialog",
    path: "/dialog",
    component: () => import("./view/components/dialog"),
    meta: {
      title: "dialog",
    },
  },
  {
    name: "actionSheet",
    path: "/actionSheet",
    component: () => import("./view/components/actionSheet"),
    meta: {
      title: "actionSheet",
    },
  },
  {
    name: "shareSheet",
    path: "/shareSheet",
    component: () => import("./view/components/shareSheet"),
    meta: {
      title: "shareSheet",
    },
  },
  {
    name: "flutterSwiperPage",
    path: "/flutterSwiperPage",
    component: () => import("./view/components/flutterSwipePage"),
    meta: {
      title: "flutterSwiperPage",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
