<!-- 分类详情页面 -->
<template>
  <div class='showImg'>
   <div class="left">
     <img src="../../assets/hompage.png" alt="">
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
   </div>
   <div class="right">
    <h2>Home Is Where The HeArt Is</h2>
    <p>昆仑山的美景让人美不胜收，让人心旷神怡</p>
     <p>发布时间</p>
     <p>发布人</p>
     <p>收藏</p>
     <p>点赞</p>
   </div> 
  </div>
</template>

<script>

export default {
  name:'showImg',
  components: {},
  data () {
    return {
      imgList:[
        {img:'../../assets/hompage.png'},{img:'../../assets/hompage.png'}
      ]
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

<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
