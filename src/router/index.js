import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'
import topSecondaryHome from '@/assets/secondaryHome/dingb.png'
import navBG from '@/assets/secondaryHome/navBG1.png'
import topSpecialHome from '@/assets/home/bannerZhuanti.png'
// import departmentName from '@/assets/departmentHome/办公室.png'

const routes = [{
  path: '/',
  redirect: '/home'
},

{
  path: '/home',
  component: Layout,
  redirect: '/home/index',
  children: [{
    name: 'Home',
    path: '/home/index',
    component: () =>
      import ('@/views/home'),
    meta: { title: '首页' }
  }]
},

// 专题首页
{
  path: '/zhauntiHome',
  component: Layout,
  redirect: '/zhauntiHome/index',
  children: [{
    name: 'zhauntiHome',
    path: '/zhauntiHome/index',
    component: () =>
      import ('@/views/zhauntiHome'),
    meta: { title: '首页', bannerZhuanti: topSpecialHome }
  }]
},
//分类导航
{
  path: '/Navigation',
  component: Layout,
  redirect: '/Navigation/index',
  children: [{
    name: 'Navigation',
    path: '/Navigation/index',
    component: () =>
      import ('@/views/Navigation'),
    meta: { title: '导航',navBG: navBG ,banner: topSecondaryHome,}
  }]
},
// 榜样力量
{
  path: '/zhauntiHome',
  component: Layout,
  redirect: '/zhauntiHome/bangyang',
  children: [{
    name: 'bangyang',
    path: '/zhauntiHome/bangyang',
    component: () =>
      import ('@/views/zhauntiHome/bangyang'),
    meta: { title: '榜样力量', bannerZhuanti: topSpecialHome }
  }]
},

{
  path: '/secondaryHome',
  component: Layout,
  redirect: '/secondaryHome/index',
  children: [{
    name: 'SecondaryHome',
    path: '/secondaryHome/index',
    component: () =>
      import ('@/views/secondaryHome'),
    meta: { title: '二级首页', banner: topSecondaryHome, navBG: navBG }
  }]
},
{
  path: '/zhuanti',
  component: Layout,
  redirect: '/secondaryHome/zhuanti',
  children: [{
    name: 'Zhuanti',
    path: '/secondaryHome/zhuanti',
    component: () =>
      import ('@/views/secondaryHome/zhuanti'),
    meta: { title: '更多专题', banner: topSecondaryHome, navBG: navBG }
  }]
},
{
  path: '/details',
  component: Layout,
  redirect: '/secondaryHome/details',
  children: [{
    name: 'Details',
    path: '/secondaryHome/details',
    component: () =>
      import ('@/views/secondaryHome/details'),
    meta: { title: '详情页', banner: topSecondaryHome, navBG: navBG }
  }]
},
{
  path: '/moreList',
  component: Layout,
  redirect: '/secondaryHome/moreList',
  children: [{
    name: 'MoreList',
    path: '/secondaryHome/moreList',
    component: () =>
      import ('@/views/secondaryHome/moreList'),
    meta: { title: '新闻资讯/更多', banner: topSecondaryHome, navBG: navBG }
  }]
},
{
  path: '/common',
  component: Layout,
  redirect: '/common/commonlist',
  children: [
	{
	    name: 'commonList1',
	    path: '/common/commonlist1',
	    component: () =>
	      import ('@/views/common/commonlist2'),
	    meta: { title: '通用列表页', banner: topSecondaryHome, navBG: navBG }
	},
	{
	    name: 'commonList2',
	    path: '/common/commonlist2',
	    component: () =>
	      import ('@/views/common/commonlist2'),
	    meta: { title: '通用列表页', banner: topSecondaryHome, navBG: navBG }
	},
    {
      name: 'commonList',
      path: '/common/commonlist',
      component: () =>
        import ('@/views/common/commonlist'),
      meta: { title: '通用列表页', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistTwo',
      path: '/common/commonlistTwo',
      component: () =>
        import ('@/views/common/commonlistTwo'),
      meta: { title: '通用列表页2', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistThird',
      path: '/common/commonlistThird',
      component: () =>
        import ('@/views/common/commonlistThird'),
      meta: { title: '通用列表页2', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistFourth',
      path: '/common/commonlistFourth',
      component: () =>
        import ('@/views/common/commonlistFourth'),
      meta: { title: '通用列表页2', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistFifth',
      path: '/common/commonlistFifth',
      component: () =>
        import ('@/views/common/commonlistFifth'),
      meta: { title: '通用列表页2', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistSix',
      path: '/common/commonlistSix',
      component: () =>
        import ('@/views/common/commonlistSix'),
      meta: { title: '通用列表(部门动态)', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlist2',
      path: '/common/commonlist2',
      component: () =>
        import ('@/views/common/commonlist2'),
      meta: { title: '通用列表(规则制度)', banner: topSecondaryHome, navBG: navBG }
    },
    {
      name: 'commonlistEight',
      path: '/common/commonlistEight',
      component: () =>
        import ('@/views/common/commonlistEight'),
      meta: { title: '通用列表(规则制度详情)', banner: topSecondaryHome, navBG: navBG }
    },

    {
      name: 'details',
      path: '/common/details',
      component: () =>
        import ('@/views/common/details'),
      meta: { title: '通用列表页2详情', banner: topSecondaryHome, navBG: navBG }
    }
  ]
},

{
  path: '/moreInfo',
  component: Layout,
  redirect: '/employment/moreInfo',
  children: [{
    name: 'MoreInfo',
    path: '/employment/moreInfo',
    component: () =>
      import ('@/views/employment/moreInfo'),
    meta: { title: '招生信息', banner: topSecondaryHome, navBG: navBG, departmentName: '招生就业' }
  }]
},
{
  path: '/employment',
  component: Layout,
  redirect: '/employment/index',
  children: [{
    name: 'employment',
    path: '/employment/index',
    component: () =>
      import ('@/views/employment/index'),
    meta: { title: '招生首页', banner: topSecondaryHome, navBG: navBG, departmentName: '招生就业' }
  }]
},

{
  path: '/departmentHome',
  component: Layout,
  redirect: '/departmentHome/index',
  children: [{
    name: 'DepartmentHome',
    path: '/departmentHome/index',
    component: () =>
      import ('@/views/departmentHome'),
    meta: { title: '部门首页', banner: topSecondaryHome, navBG: navBG, departmentName: '办公室' }
  }]
},

{
  path: '/college',
  component: Layout,
  redirect: '/collegeHome',
  children: [{
    name: 'collegeHome',
    path: '/collegeHome',
    component: () =>
      import ('@/views/collegeHome'),
    meta: { title: '学院首页', banner: topSecondaryHome, navBG: navBG, departmentName: '侦查学院' }
  }]
},

{
  path: '/organizationSetup',
  component: Layout,
  redirect: '/organizationSetup/index',
  children: [{
    name: 'organizationSetup',
    path: '/organizationSetup/index',
    component: () =>
      import ('@/views/organizationSetup'),
    meta: { title: '机构设置', banner: topSecondaryHome, navBG: navBG }
  }]
},

{
  path: '/404',
  name: '404',
  component: () =>
    import ('@/views/404.vue'),
  hidden: true
},

// 404 page must be placed at the end !!!
{ path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
