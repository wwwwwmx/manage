<!-- 登陆页面 -->
<template>
<el-dialog
  title="登录"
  :visible.sync="dialogVisible"
  width="18%"
  :before-close="handleClose">
    <input type="text"  name="username" placeholder="输入帐号"/><br>
    <input type="password"  name="pwd" placeholder="密码"/><br>
  <span slot="footer" class="dialog-footer">
    <p style="margin:10px">忘记密码<i class="el-icon-d-arrow-right"></i></p><br>
    <el-button @click="dialogVisible = false"  type="danger">登陆</el-button><br>
    <el-button type="primary" @click="dialogVisible = false">创建账号</el-button><br>
  </span>
</el-dialog>
</template>

<script>

export default {
  name:'MainLogin',
  components: {},
  data () {
    return {
        dialogVisible: true
    }
  },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(() => {});
      }
    },
  computed: {
  },
  watch: {},
  created () {

  },
//   mounted () {
//       this.show=$store.state.show
//   },
  beforeCreate () { },
  beforeMount () { }, 
  beforeUpdate () { },
  updated () { }, 
  beforeDestroy () { },
  destroyed () { }, 
  activated () { }, 
}
</script>

<style >
.el-dialog{
    height:400px;
    padding:0px;
}

.el-dialog .el-dialog__body{
    padding:0px;
    text-align: center;
}
.el-dialog  input{
    padding:0px;
    width:230px;
    height:40px;
    border:1px solid black;
    border-radius: 5px;
    margin: 10px 0px;
}
.el-dialog .el-dialog__footer{
    padding:0px;
    text-align: center;
}
.el-dialog__footer p{
    text-align: right;
}
.el-dialog__footer .el-button {
    margin: 10px 0px;
    width:230px;
    height:40px;
}

</style>
