<!-- 管理员页面 -->
<template>
  <div class='adminPage'>
    <el-container>
    <el-aside width="300px" height="500px">
      <el-col >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.index" >
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.index"  @click="clickChange(subItem)">{{subItem.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.index" @click="clickChange(item)">
         <i :class="'el-icon-' + item.icon"></i>
         <span>{{item.label}}</span>
      </el-menu-item>
      </el-menu>
    </el-col>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
  </div>
</template>

<script>

export default {
  name:'AdminPage',
  components: {},
  data () {
    return {
        menus:[
          {
            index:'1',
            label:'管理员管理',
            redirect:'/addadmin',
            icon:'location',
            children:[{
            index:'1-1',
            name:'ChangeMessage',
            path:'/changemessage',
            label:'修改个人资料',
            url:'ChangeMessage'
            },
            {
              index:'1-2',
              name:'AddAdmin',
              path:'/addadmin',
              label:'修改个人资料',
              url:'AddAdmin'
            }]
          },{
              index:'2',
              label:'照片点赞管理',
              path:'/addadmin',
              name:'AddAdmin',
              url:'AddAdmin',
              icon:'menu'
          },{
              index:'3',
              label:'相册分类管理',
              path:'/addadmin',
              name:'AddAdmin',
              url:'AddAdmin',
              icon:'s-operation'
          }
        ]
    }
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
    hasChildren(){
       return this.menus.filter(item=>item.children)
    },

    noChildren(){
      return this.menus.filter(item=>!item.children)
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
.adminPage{
  height: 700px;
}
.el-aside .el-menu-vertical-demo{
  height:700px;
  font-size:18px;
}

</style>
