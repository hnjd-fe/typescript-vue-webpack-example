import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'
import { makeHot, reload } from './utils/hot-reload'

const homeComponent = () => import('./components/home/home').then(({ HomeComponent }) => HomeComponent)
const aboutComponent = () => import('./components/about/about').then(({ AboutComponent }) => AboutComponent)
const listComponent = () => import('./components/list/list').then(({ ListComponent }) => ListComponent)

if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home'
  const aboutModuleId = './components/about'
  const listModuleId = './components/list'

  makeHot(homeModuleId, homeComponent,
    module.hot.accept('./components/home/home', () => reload(homeModuleId, (require('./components/home/home') as any).HomeComponent)))

  makeHot(aboutModuleId, aboutComponent,
    module.hot.accept('./components/about/about', () => reload(aboutModuleId, (require('./components/about/about') as any).AboutComponent)))

  makeHot(listModuleId, listComponent,
    module.hot.accept('./components/list/list', () => reload(listModuleId, (require('./components/list/list') as any).ListComponent)))
}

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent
  },
  {
    path: '/about',
    component: aboutComponent
  },
  {
    path: '/list',
    component: listComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
