<!-- 尾部 -->
<template>   
<div class="mainFooter">  
  <div class="header">
  <ul><img src="" alt=""></ul>
  <ul>
    <li><b>公司</b></li>
    <li><a href="javascript:;">我们的产品</a></li>
    <li><a href="javascript:;">投资者关系</a></li>
    <li><a href="javascript:;">商务解决方案</a></li>
    <li><a href="javascript:;">想法和灵感</a></li>
  </ul>        
  <ul>
    <li><b>法律</b></li>
    <li><a href="javascript:;">隐私中心</a></li>
    <li><a href="javascript:;">社区条款</a></li>
    <li><a href="javascript:;">国家条款</a></li>
  </ul>       
  <ul>
    <li><b>广告</b></li>
    <li><a href="javascript:;">购买广告</a></li>
    <li><a href="javascript:;">广告政策</a></li>
    <li><a href="javascript:;">品牌指南</a></li>
    <li><a href="javascript:;">推广规则</a></li>
  </ul>  
  <ul>
    <li><b>帮助</b></li>
    <li><a href="javascript:;">客服</a></li>
    <li><a href="javascript:;">如何上传</a></li>
    <li><a href="javascript:;">举报侵权</a></li>
  </ul>  
  </div> 
  <div class="footer">
     <p>© 2006 - 2022 Foter - All rights reserved</p>
  </div> 
</div>
</template>

<script>

export default {
  name:'MainFooter',
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

<style scoped>
.mainFooter{
   background-color: rgb(133, 130, 130);

}
.header{
  display: flex;
  flex-direction: row;
  /* margin:20px 20px; */
  border-bottom:1px solid black ;
}
.footer{
  height:50px;
}
ul{
  list-style: none;
  flex:1;
  margin:10px;
}

li{
  padding:4px 
}
a{
 color:black;
 text-decoration: none;
}
a:hover{
  color:orangered
}
p{
  text-align: center;
}
</style>

