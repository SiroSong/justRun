export default interface RouterConfig {
    path: string,
    component?: any
    routes?: RouterConfig[],
    title?: string,
    icon?: string,
    visible?: boolean
}