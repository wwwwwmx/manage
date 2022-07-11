<!-- 首页页面 -->
<template>
  <div class='container'>
    <div class="topImage">
      <div class="topPicture"><img data-aos="fade-up" src="../../assets/hompage.png" alt="" srcset="">
      </div>
    </div> 
    <div class="middleImage" data-aos="fade-up">
      <h2>Popular categories</h2>
      <ul v-for="item in className1" :key="item.url">
      <li class="middlePicture">
        <div class="left" >{{item.dec}}点我了解>>>></div>
        <img class="right" :src="item.url">
      </li>
      </ul>
      <ul v-for="item in className2" :key="item.url">
      <li class="middlePicture">
        <img class="right" :src="item.url">
        <div class="left">{{item.dec}}点我了解>>>></div>
      </li>
      </ul>
    </div>
    <div class="footerImage" data-aos="fade-up">
      <h2>Popular user</h2>
       <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
      </div> 
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
          index:1,
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面1',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }
        , {
          index:2,
          url:'https://pic.ntimg.cn/BannerPic/20220704/original/20220704084802_1.jpg',
          dec:'这是一个美丽的画面2',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }, {
          index:3,
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面3',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }, {
          index:4,
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面4',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        },{
          index:5,
          url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1',
          dec:'这是一个美丽的画面5',
          faburen:'123',
          dianzanshu:'1111',
          shoucangshu:'11111'
        }
       ],
    }
  },
  methods: {
  },
  computed: {
    className1(){
      return this.imgMenus.filter(item=>item.index%2==0)
    },
    className2(){
      return this.imgMenus.filter(item=>item.index%2!=0)
    }
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
.topImage .topPicture{
  margin:30px 20px;
}
.topImage .topPicture img{
 width:100%;
}

.middleImage .middlePicture {
  width:1100px;
  margin:20px auto;
  background-color: #5B7491;
  display: flex;
}
.middleImage .middlePicture .left{
  width:700px;
  height:370px;
}
.middleImage .middlePicture .right{
   flex:auto
}
h2{
  text-align: center;
  margin:20px 0px;
}
ul{
  list-style:none
}
/* .footerImage{
  /* margin:80px; */
  /* background-color: rgb(133, 130, 130); */
  /* display: flex; */
/* }  */

.footerImage{
  width:1100px;
  margin:30px auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
