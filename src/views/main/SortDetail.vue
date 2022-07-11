<!-- 分类详情页面 -->
<template>
  <div class='sortdetail'>
    <div class="Image">
      <div class="currentImage">
        <div class="img"><img src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" alt=""></div>
        <div class="othercontent" ref="othercontent">
          <p v-for="item in comment" :key="item">{{item}}</p>
        </div>
      </div>
      <div class="otherImage">
         <!-- <div class="el-left"><p class="el-icon-caret-left"></p></div> -->
         <ul>
          <li><img src="'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'" alt=""></li>
          <li><img src="'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'" alt=""></li>
         </ul>
         <!-- <div class="el-right"><p class="el-icon-caret-right"></p></div> -->
      </div>
    </div>
    <div class="introduce">
      <h1>美丽草原</h1>
      <p>美丽的草原，123142343544444553435453545</p>
      <input type="text" name="" id="" placeholder="请输入发布人" >
      <textarea name="" id="" cols="30" rows="10" ref="textarea"></textarea>
      <el-button type="primary" @click="addcontent">发送评论</el-button>
      <i class="el-icon-star-off">收藏</i>
      <i class="el-icon-share">分享</i>

    </div>
  </div>
</template>

<script>

export default {
  name:'SortDetail',
  components: {},
  data () {
    return {
      comment:[],
      totalcomment:{}
    }
  },
  methods: {
    addcontent(){
      this.comment.push(this.totalcomment)
      this.totalcomment[name]=
      console.log(typeof(this.$refs.textarea.value))
    }
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

<style scoped>
*{
  margin:0px;
  padding:0px;
  position: relative;
}
.sortdetail{
  display:flex;
  height: 600px;
  margin: 30px 30px;
  border:10px solid rgba(22, 22, 22, 0.295);
  padding:20px;
  /* position: relative; */
}
.Image{
  flex:1;
  /* position: relative; */
}
.currentImage{
  width:80%;
  position: relative;
}
.currentImage .img{
  position: absolute;
  top:30px;
  left:30px;
  width:700px;
  height:400px;
}
.currentImage .img img{
  width:100%;
  height: 100%;
}
.currentImage .othercontent{
 border:1px solid black;
 position: absolute;
 top:120px;
 left:670px;
 color:rgba(255, 255, 255, 0.5);
 width:200px;
 height:300px;
}
.otherImage{
  width:800px;
  height:150px;
  border:1px solid red;
  position:absolute;
  top:450px;
}
.otherImage ul{
  list-style: none;
  width:500px;
  float: left;
}
ul::after{
  display: block;  
	content: "";    
	height: 0;       
	clear: both;
}
li{
  width:150px;
  height:150px;
  float:left;
  margin:0px;
  padding:0px;
}
li img{
  width:100%;
  height:100%;
}
.el-left 
{
  width:30px;
  height:40px;
  border:1px solid rgba(245, 222, 179, 0.658);
  border-radius:5px;
  float: left;
  position:absolute;
  bottom:100px;
  left:100px;
}
.el-right{
  width:30px;
  height:40px;
  border:1px solid rgba(245, 222, 179, 0.658);
  border-radius:5px;
  float:right;
  position:absolute;
  bottom:100px;
  left:700px;
}
.introduce{
  flex:1
}
.introduce p{
  margin:5px 0px 10px 0px;
}
h1{
  text-align:left;
  margin:30px 0px;
}

</style>
