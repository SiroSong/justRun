const routerConfig: RouterConfig[] = [
  {
    path: '/',
    component: require("../layout/index").default,
    routes: [
      {
        path: '',
        title: '一级菜单',
        icon: 'user',
        routes: [
          {
            path: "/index",
            title: '二级菜单1',
            component: require("../pages/home").default,
            icon: 'user',
          },
          {
            path: "/about",
            title: '二级菜单2',
            icon: 'user',
            routes: [
              {
                path: "/home/about",
                title: '三级菜单1',
                icon: 'user',
                component: require("../pages/about").default
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    component: require("../layout/Login").default,
  },
]

export default routerConfig