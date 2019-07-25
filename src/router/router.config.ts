export interface RouterConfig {
  path: string,
  component?: any
  routes?: RouterConfig[],
  title?: string,
  icon?: string,
  visible?: boolean
}
const routerConfig: RouterConfig[] = [
  {
    path: '/',
    component: require("../layout/index").default,
    routes: [
      {
        path: '/home',
        title: '1122221',
        icon: 'user',
        routes: [
          { path: "/home/index", title: '444', component: import("../pages/home") },
          { path: "/home/about", title: '344', component: require("../pages/about").default },
        ]
      },
      // { path: '/about', component: require("../pages/about").default }
    ]
  },
]

export default routerConfig