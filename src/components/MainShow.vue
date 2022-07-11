<!-- 主页面页面 -->
<template>
  <div class='all'>
<el-container>
  <el-header><main-header></main-header></el-header>
  <el-main><main-content></main-content></el-main>
  <el-footer><main-footer></main-footer></el-footer>
</el-container>
  </div>
</template>

<script>
import MainHeader from '../views/public/MainHeader.vue'
import MainFooter from '../views/public/MainFooter.vue'
import MainContent from '@/views/public/MainContent.vue'
export default {
  components: { MainHeader, MainFooter, MainContent },
  name:'MainShow',
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
*{
  padding:0px;
  margin:0px;
}
.all .el-header{
  width:100%;
  padding :0px 0px;
  background-color: #545c64;
}
.el-container .el-main{
  padding:0px;
  margin:0px;
}
.all .el-footer{
  margin:0px;
  padding:0px;
     margin-bottom: 20px;
}
</style>

