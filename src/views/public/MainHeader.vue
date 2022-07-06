<!-- 头页面 -->
<template>
<div>
<div class="headerTop" >
<img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" class="logo-img" data-v-02e25b00="">
<el-menu 
 :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router:true
  >
    <!-- @open="handleOpen"
    @close="handleClose" -->
    <el-menu-item
      v-for="item in noChildren "
      :key="item.path"
      index="item.path"
    >
    {{item.label}}
    </el-menu-item>
     <el-submenu v-for="item in hasChildren" index="item.path" :key="item.path">
    <template slot="title">{{item.label}}</template>
    <el-menu-item v-for="subItem in item.children" index="subItem.index" :key="subItem.path">{{subItem.label}}</el-menu-item>

  </el-submenu>
    
  </el-menu>
    </div>

</div>
</template>

<script>



export default {
  name:'MainHeader',
  components: {},
  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1',
        menus:[
            {
                index:1,
                name:'HomePage',
                path:'/homepage',
                label:'首页',
                url:'HomePage'
            },{
                index:2,
                name:'SortDetail',
                path:'/sortdetail',
                label:'照片分类',
                children:[
                    {   index:2-1,
                        name:'111',
                        path:'/111',
                        label:'人文古迹',
                        url:'111'
                        },{ 
                            index:2-2,
                            name:'222',
                            path:'/222',
                            label:'游玩圣地',
                            url:'222'
                         },
                ]
            },{
                index:3,
                name:'333',
                path:'/333',
                label:'个人中心',
                url:'333',
                 children:[
                    {   index:3-1,
                        name:'444',
                        path:'/444',
                        label:'个人中心',
                        url:'444'
                        },{ 
                            index:3-2,
                            name:'555',
                            path:'/555',
                            label:'退出',
                            url:'555'
                         },
                ]
            }
    ]}
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },


    },
  computed: {
    noChildren(){
        return this.menus.filter(item=>!item.children)
    },
    hasChildren(){
        return this.menus.filter(item=>item.children)
    }
  },
  watch: {},
  created () {

  },
  mounted () {

  },
  beforeCreate () { },
  beforeMount () { }, 
  beforeUpdate () { },
  updated () { }, 
  beforeDestroy () { },
  destroyed () { }, 
  activated () { }, 
}
</script>

<style scoped>
.el-header{
    width:100%;
}

img{
  width:80px;
  height:60px;
  padding-left: 10px;
}
.el-menu{
    float:right;
}
.el-menu .el-menu-item{
    padding:0px 30px;

}
</style>


