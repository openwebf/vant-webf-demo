import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: '/',
    path: '/',
    redirect: {
      name: 'button',
    },
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'button',
    path: '/button',
    component: () => import('./view/components/button'),
    meta: {
      title: 'Button',
    },
  },
  {
    name: 'icon',
    path: '/icon',
    component: () => import('./view/components/icon'),
    meta: {
      title: 'Icon',
    },
  },
  {
    name: 'cell',
    path: '/cell',
    component: () => import('./view/components/cell'),
    meta: {
      title: 'Cell',
    },
  },
  {
    name: 'image',
    path: '/image',
    component: () => import('./view/components/image'),
    meta: {
      title: 'Image',
    },
  },
  {
    name: 'layout',
    path: '/layout',
    component: () => import('./view/components/layout'),
    meta: {
      title: 'Layout',
    },
  },
  {
    name: 'popup',
    path: '/popup',
    component: () => import('./view/components/popup'),
    meta: {
      title: 'Popup',
    },
  },
  {
    name: 'space',
    path: '/space',
    component: () => import('./view/components/space'),
    meta: {
      title: 'Space',
    },
  },
  {
    name: 'toast',
    path: '/toast',
    component: () => import('./view/components/toast'),
    meta: {
      title: 'Toast',
    },
  },
  {
    name: 'overlay',
    path: '/overlay',
    component: () => import('./view/components/overlay'),
    meta: {
      title: 'Overlay',
    },
  },
    {
    name: 'transition',
    path: '/transition',
    component: () => import('./view/components/transition'),
    meta: {
      title: 'Transition',
    },
  },
      {
    name: 'checkbox',
    path: '/checkbox',
    component: () => import('./view/components/checkbox'),
    meta: {
      title: 'Checkbox',
    },
  },
        {
    name: 'datetimePicker',
    path: '/datetimePicker',
    component: () => import('./view/components/datetimePicker'),
    meta: {
      title: 'datetimePicker',
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
