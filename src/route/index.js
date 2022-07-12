import VueRouter from 'vue-router'
import AdminPage from '../views/public/AdminPage.vue'
import MainShow from '../components/MainShow.vue'
import MainLogin from '../views/public/MainLogin.vue'
import SortDetail from '../views/main/SortDetail.vue'
import HomePage from '../views/main/HomePage.vue'
import PersonDetail from '../views/main/PersonDetail.vue'
import Vue from 'vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
    routes:[
        //登陆界面
        {   path:'/mainlogin',
            name:'MainLogin',
            component:MainLogin,
            meta:{
                role:[0,1]
            }
        },
        //展示界面
        {
            path:'/',
            name:'MainShow',
            component:MainShow,
            meta:{
               role:[0,1]
            },
            redirect:'/homepage',
            children:[
                //主页
                {
                    path:'/homepage',
                    name:'HomePage',
                    component:HomePage,
                    meta:{
                        role:[0,1]
                    },
                },
                 //个人信息
                 {
                    path:'/persondetail',
                    name:'PersonDetail',
                    component:PersonDetail,
                    meta:{
                        role:[1]
                    }, 
                },
                //照片分类
                {
                    path:'/sortdetail',
                    name:'SortDetail',
                    component:SortDetail,
                    meta:{
                        role:[0,1]
                    },
                },
                {
                    //后台管理员系统
                    path:'/adminpage',
                    name:'AdminPage',
                    component:AdminPage,
                    meta:{
                        role:[0]
                    },
                    children:[
                        {
                            path:'/addadmin',
                            name:'AddAdmin',
                            component:AddAdmin,
                            meta:{
                                role:[0,1]
                            }, 
                        },{
                            path:'/addadmin',
                            name:'AddAdmin',
                            component:AddAdmin,
                            meta:{
                                role:[0,1]
                        }, 
                    },{
                        
                        path:'/addadmin',
                        name:'AddAdmin',
                        component:AddAdmin,
                        meta:{
                            role:[0,1] 
                    }
                    }
                    ] 
                },
            ],
        },
                    
    ]}
)
