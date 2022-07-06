<!-- 管理员页面 -->
<template>
  <div class='adminPage'>
    <el-container>
  <el-aside width="200px">
    <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">管理员添加</el-menu-item>
          <el-menu-item index="1-2">修改个人资料</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">相册分类管理</span>
                <el-menu-item-group>
          <el-menu-item index="1-1">管理员添加</el-menu-item>
          <el-menu-item index="1-2">修改个人资料</el-menu-item>
        </el-menu-item-group>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">照片点赞管理</span>
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

    }
  },
  methods: {

  },
  computed: {},
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

<style>

</style>
