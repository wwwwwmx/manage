<!-- 首页页面 -->
<template>
  <div class='container'>
   <div class="topImage"><img data-aos="fade-up" src="../../assets/hompage.png" alt="" srcset=""></div> 
     <div class="middleImage" >
      <el-row>
  <el-col :span="6"  v-for="(item, index) in imgMenus" :key="item.url" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px',margin:'10px'}">
     <img :src="item.url" alt="" srcset="">
      <div style="padding: 14px;">
        <span>美丽的运河</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    <!-- <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>美丽的运河</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col> -->
  </el-row>

    </div>
    <!-- <div class="endImage" data-aos="fade-up">
      <h2>Showcase Your Most Important Moments</h2>
      <ul >
      <li data-aos="fade-up"><div class="left"><img src="../../assets/hompage.png" alt=""></div><div class="right"><span>
        <h2>Home Is Where The HeArt Is</h2>昆仑山的美景让人美不胜收，让人心旷神怡，
        <p>点我了解更多>>>>></p>
      </span></div></li>
      <!- <li data-aos="fade-up"><div class="left"><img src="../../assets/hompage.png" alt=""></div><div class="right"><span> <h2>Home Is Where The HeArt Is</h2>昆仑山的美景让人美不胜收，让人心旷神怡，
         <p>点我了解更多>>>>></p></span></div></li>
      <li data-aos="fade-up"><div class="left"><img src="../../assets/hompage.png" alt=""></div><div class="right"><span> <h2>Home Is Where The HeArt Is</h2>昆仑山的美景让人美不胜收，让人心旷神怡，
         <p>点我了解更多>>>>></p></span></div></li>
      <li data-aos="fade-up"><div class="left"><img src="../../assets/hompage.png" alt=""></div><div class="right"><span> <h2>Home Is Where The HeArt Is</h2>昆仑山的美景让人美不胜收，让人心旷神怡，
         <p>点我了解更多>>>>></p></span></div></li>
      <li data-aos="fade-up"><div class="left"><img src="../../assets/hompage.png" alt=""></div><div class="right"><span> <h2>Home Is Where The HeArt Is</h2>昆仑山的美景让人美不胜收，让人心旷神怡，
         <p>点我了解更多>>>>></p></span></div></li> -->
      <!-- </ul> -->
    <!-- </div>  -->
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name:'HomePage',
  components: {},
  data () {
    return {
       imgMenus:[
        {
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }, {
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }, {
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }, {
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        },{
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }
       ]
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {},
  created () {

  },
  mounted () {
    AOS.init();
    // 你也可以在这里设置全局配置
    AOS.init({
      duration: 3000,
      // once:true,
    });
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
*{
  margin:0;
  padding:0;
}

.topImage{
  width: 100%;
  margin:10px 0px;
}
.topImage img{
  width:100%;
}
.middleImage{
  margin: 0 auto;
  background-color: #3b4153;
}
ul{
list-style: none;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0px 40px;
}
ul li img{
   width: 800px;
   height:400px;
} 

li .left{
  flex:0 0 800px;
  margin:0px;
}
li .right{
  flex:1;
  border: 1px solid black;
  height: 400px;
  background-color: rgb(0, 76, 139);
}
.endImage h2{
  text-align: center;
}
.middleImage {
  margin:0px;
}
.el-card .el-card__body{
  margin:20px;
}
.el-card .el-card__body img{
  width:100%;
} 
</style>
