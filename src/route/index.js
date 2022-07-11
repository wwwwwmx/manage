import VueRouter from 'vue-router'
import AdminPage from '../views/public/AdminPage.vue'
import MainShow from '../components/MainShow.vue'
import MainLogin from '../views/public/MainLogin.vue'
import UserDetail from '../views/main/UserDetail.vue'
import SortDetail from '../views/main/SortDetail.vue'
import HomePage from '../views/main/HomePage.vue'
import PersonDetail from '../views/main/PersonDetail.vue'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
    routes:[
        {   path:'/mainlogin',
            name:'MainLogin',
            component:MainLogin,
            meta:{
                role:[0,1]
            }
        },{
            path:'/mainshow',
            name:'MainShow',
            component:MainShow,
            meta:{
               role:[0,1]
            },
            redirect:'/homepage',
            children:[
                {
                    path:'/adminpage',
                    name:'AdminPage',
                    component:AdminPage,
                    meta:{
                        role:[0]
                    },
                    children:[
                        {
                            path:'/homepage',
                            name:'HomePage',
                            component:HomePage,
                            meta:{
                                role:[0,1]
                            }, 
                        }
                    ] 
                },
                {
                    path:'/homepage',
                    name:'HomePage',
                    component:HomePage,
                    meta:{
                        role:[0,1]
                    },
                    children:[
                        {
                            path:'/sortdetail',
                            name:'SortDetail',
                            component:SortDetail,
                            meta:{
                                role:[0,1]
                            },
                        },
                        {
                            path:'/userdetail',
                            name:'UserDetail',
                            component:UserDetail,
                            meta:{
                                role:[0,1]
                            },
                        },
                        {
                            path:'/',
                            name:'SortDetail',
                            component:SortDetail,
                            meta:{
                                role:[0,1]
                            },
                        },
                    ]}
                    ,{
                        path:'/persondetail',
                        name:'PersonDetail',
                        component:PersonDetail,
                        meta:{
                            role:[1]
                        }, 
                    }
    ]}
]})

