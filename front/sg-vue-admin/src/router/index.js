import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }, {
      path: 'dashboard1',
      name: 'Dashboard1',
      component: () => import('@/views/content/article/write/index'),
      meta: { title: '写博客', icon: 'dashboard' }
    }, {
      path: 'user',
      name: '用户管理',
      component: () => import('@/views/system/user/index'),
      meta: { title: '用户管理', icon: 'user' }
    }, {
      path: 'role',
      name: 'Dashboard11',
      component: () => import('@/views/system/role/index'),
      meta: { title: '角色管理', icon: 'dashboard' }
    }, {
      path: 'menu',
      name: 'Dashboard21',
      component: () => import('@/views/system/menu/index'),
      meta: { title: '菜单管理', icon: 'dashboard' }
    }, {
      path: 'article',
      name: 'Dashboard1',
      component: () => import('@/views/content/article/index'),
      meta: { title: '文章管理', icon: 'dashboard' }
    }, {
      path: 'category',
      name: '用户管理',
      component: () => import('@/views/content/category/index'),
      meta: { title: '分类管理', icon: 'user' }
    }, {
      path: 'link',
      name: 'Dashboard11',
      component: () => import('@/views/content/link/index'),
      meta: { title: '友情链接', icon: 'dashboard' }
    }, {
      path: 'tag',
      name: 'Dashboard21',
      component: () => import('@/views/content/tag/index'),
      meta: { title: '标签管理', icon: 'dashboard' }
    }
    ]
  }
  // {
  //   path: '/write',
  //   component: () => import('@/views/content/article/write/index'),
  //   hidden: true
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
