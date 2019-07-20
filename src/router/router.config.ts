export interface RouterConfig {
  path: string,
  component?: any
  routes?: RouterConfig[],
  title?: string,
  icon?: string,
}
const routerConfig: RouterConfig[] = [
  {
    path: '/',
    component: require("../layout/index").default,
    routes: [
      {
        path: '/',
        title: '1122221',
        icon: 'user',
        routes: [
          { path: "/index", component: require("../pages/home").default }
        ]
      },
      // { path: '/about', component: require("../pages/about").default }
    ]
  },
]

export default routerConfig