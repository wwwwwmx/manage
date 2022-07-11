<!-- 封装的echarts页面 -->
<template>
  <div :class="className" :style="{height:height,width:width}">
  </div>
</template>

<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import EchartsResize from './EchartsResize.vue'
export default {
  name:'ShowEcharts',
  mixins:[EchartsResize],
  props:{
    className:{
       type:String
    },
    width:{
        type:String,
        default:'100%'
    },
    height:{
        type:String,
    }
  },
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

<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
