import RouterConfig from './type'

const routerConfig: RouterConfig[] = [
  {
    path: '/',
    component: require("../layout/index").default,
    routes: [
      {
        path: '/home',
        title: '一级菜单',
        icon: 'user',
        routes: [
          { path: "/home/index", title: '二级菜单1', component: require("../pages/home").default },
          { path: "/home/about", title: '二级菜单2', component: require("../pages/about").default },
        ]
      },
      // { path: '/about', component: require("../pages/about").default }
    ]
  },
]

export default routerConfig