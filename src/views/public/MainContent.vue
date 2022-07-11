<!-- 主页面 -->
<template>
  <div class='123'>
    <!-- <main-login></main-login> -->
    <!-- <home-page></home-page> -->
    <!-- <user-detail></user-detail> -->
    <sort-detail></sort-detail>
  </div>
</template>

<script>
// import MainLogin from './MainLogin.vue'
// import UserDetail from '../main/UserDetail.vue'
// import HomePage from '../main/HomePage.vue'
import SortDetail from  '../main/SortDetail.vue'
export default {
  name:'MainContent',
  components: {SortDetail},
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
