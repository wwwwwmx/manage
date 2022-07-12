<!-- 头页面 -->
<template>
<div>
<div class="headerTop" >
<img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" class="logo-img" data-v-02e25b00="">
<el-menu 
  class="el-menu-demo" mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  :default-active="activeIndex"
  >
    <!-- @open="handleOpen"
    @close="handleClose" -->
    <el-menu-item
      v-for="item in noChildren "
      :key="item.path"
      :index="item.index"
      @click="clickChange(item)"
    >
    {{item.label}}
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.index" :key="item.path"  :default-active="activeIndex">
    <template slot="title"><span slot="title">{{item.label}}</span></template>
    <el-menu-item v-for="subItem in item.children"  :key="subItem.path" :index="subItem.index"  @click="clickChange(subItem)">{{subItem.label}} 
     </el-menu-item> 

  </el-submenu>
    
  </el-menu>
    </div>

</div>
</template>

<script>
export default {
  name:'MainHeader',
  data () {
    return {
          activeIndex:'',
          menus:[
            {
                index:'1',
                name:'HomePage',
                path:'/homepage',
                label:'首页',
                url:'HomePage'
            },
            {
                index:'2',
                name:'SortDetail',
                path:'/sortdetail',
                label:'照片分类',
                url:'SortDetail',
                children:[
                    {   index:'2-1',
                        name:'11',
                        path:'/11',
                        label:'人文古迹',
                        url:'11'
                        },{ 
                            index:'2-2',
                            name:'222',
                            path:'/222',
                            label:'游玩圣地',
                            url:'222'
                         },
                ]
            },{
                index:'3',
                name:'PersonDetail',
                path:'/persondetail',
                label:'个人中心',
                url:'PersonDetail',
            },
             {
              index:'4',
              name:'AdminPage',
              path:'/adminpage',
              label:'后台',
              url:'AdminPage'
            },
    ]}
  },
  methods: {
        //跳转到不同的url
    clickChange(item) {
      this.$router.push({
        name: item.name,
      });
      // console.log(item)
    },
    },
  computed: {
    noChildren(){
        return this.menus.filter(item=>!item.children)
    },
    hasChildren(){
        return this.menus.filter(item=>item.children)
    },
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


