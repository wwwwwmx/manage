<!-- 用户页面 -->
<template>
  <div class='userDetail'>
    <div class="userSelf">
        <header>
            <div class="left"><img :src="src"></div> 
            <div class="right">
                <p>{{nickname}}</p><br>
                <p>{{mount}}</p><br>
                <p>{{desc}}</p><br>
                </div>
        </header>
        <footer>
            <div class="demo-image__lazy" style="overflow:scroll;max-height:310px">
                <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
            </div>
        </footer>
    </div>
    <div class="userList">
    <h2>用户点赞排行榜</h2>
    <el-table :data="userList"  style="width: 100%;margin: auto" height="670px">
      <el-table-column
       v-for="item in titleList" :key="item.ranking"
        :prop="item.prop"
        :label="item.label"
        width="180"
        >
      </el-table-column>
    </el-table></div>
    <div id="newuserStart">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name:'UserDetail',
  components: {},
  data () {
    return {
       src:'',
       nickname:'昵称',
       mount:'1111',
       desc:'这个真的好漂亮',
       titleList:[
         {
            prop:"ranking",
            label:'排名'
        },
        {
            prop:"nickname",
            label:'昵称'
        },
         
          {
            prop:"mount",
            label:'获赞数'
        }
       ],
       userList:[
        {
            nickname:'我是1',
            ranking:'1',
            mount:'11111'
        },{
            nickname:'我是2',
            ranking:'2',
            mount:'22222'
        },{
            nickname:'我是3',
            ranking:'3',
            mount:'33333'
        },{
            nickname:'我是4',
            ranking:'4',
            mount:'4'
        },{

            nickname:'我是5',
            ranking:'5',
            mount:'55555'
        },
         {
            nickname:'我是1',
            ranking:'1',
            mount:'11111'
        },{
            nickname:'我是2',
            ranking:'2',
            mount:'22222'
        },{
            nickname:'我是3',
            ranking:'3',
            mount:'33333'
        },{
            nickname:'我是4',
            ranking:'4',
            mount:'4'
        },{

            nickname:'我是5',
            ranking:'5',
            mount:'55555'
        },
         {
            nickname:'我是1',
            ranking:'1',
            mount:'11111'
        },{
            nickname:'我是2',
            ranking:'2',
            mount:'22222'
        },{
            nickname:'我是3',
            ranking:'3',
            mount:'33333'
        },{
            nickname:'我是4',
            ranking:'4',
            mount:'4'
        },{

            nickname:'我是5',
            ranking:'5',
            mount:'55555'
        },
          {
            nickname:'我是1',
            ranking:'1',
            mount:'11111'
        },{
            nickname:'我是2',
            ranking:'2',
            mount:'22222'
        },{
            nickname:'我是3',
            ranking:'3',
            mount:'33333'
        },{
            nickname:'我是4',
            ranking:'4',
            mount:'4'
        },{

            nickname:'我是5',
            ranking:'5',
            mount:'55555'
        }
       ],
       urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
    }
  },
  methods: {
    echartImg(){
        var myChart = echarts.init(document.getElementById('newuserStart'))
        myChart.setOption({
        title: {
            text: '用户新星榜',
            textStyle:{
                color : '#ffd04b'}
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
            backgroundColor: '#6a7985'
      }
    }
  },
//   legend: {
//     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
//   },
//   toolbox: {
//     feature: {
//       saveAsImage: {}
//     }
//   },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:'8%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
    })},},
  computed: {},
  watch: {},
  created () {

  },
  mounted () {
     this.echartImg()
  },
  beforeCreate () { },
  beforeMount () { }, 
  beforeUpdate () { },
  updated () { }, 
  beforeDestroy () { },
  destroyed () { }, 
  activated () { }, }

</script>

<style scoped>
.userDetail{
    display:flex;
    height: 100%;
    margin: 50px 30px;
    border:10px solid rgba(22, 22, 22, 0.295);
    padding:20px;
}

.userSelf{
    flex:1;
    margin-right:30px;
}
.userSelf header{
    width:100%;
}
header::after{
  display: block;  
	content: "";    
	height: 0;       
	clear: both;
}
header .left{
    width:180px;
    height:180px;
    border-radius: 90px;
    margin:20px 10px;
    border:1px solid black;
    margin:20px auto;
}
/* header.left img{ 
    object-fit:fill;
    object-fit: contain;
}  */
header .right{
    margin:0 auto;
    width:150px;
    height:200px;
}
footer{
    width:100%;
    height: auto;
    margin:20px;
}
.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
}
.userList{
    flex:1;
    margin-right:10px;
}

.table{
     text-align: center;
}
h2{
    text-align: center;
    margin:20px 0px 
}

#newuserStart{
   flex:2;
   margin-right:10px;
}
</style>
