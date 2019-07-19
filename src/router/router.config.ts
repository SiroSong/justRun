export default [
  {
    path: '/',
    component: require("../pages/home").default,
    routes: [
      { path: 'about', component: require("../pages/about").default }
    ]
  },
]