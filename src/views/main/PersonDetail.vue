<!-- 个人信息页面 -->
<template>
  <div class='persondetail'>
    <ul>
    <li class="personhead">
        <div class="imgleft"><img src="../../assets/R.jpg"></div>
        <div class="imgright">
            <span>nicheng</span>
            <img >男或女小图标
            <span>排名</span>
            <span>获赞数</span>
            <span>个人简介</span>
        </div>
        <el-button type="text" @click="dialogVisible = true" class="userdialog">编辑资料</el-button>
    </li>
    <li class="perspnissue">
       <h2>我的发布</h2>
       <div class="container">
        这里面是对应的内容
       </div>
    </li>
    <li class="personlike">
       <h2>我的点赞</h2>
       <div class="container">
        这里面是对应的内容
       </div>
    </li>
    <li class="personcomment">
        <h2>我的评论</h2>
        <div class="container">
            这里面是对应的内容
        </div>
    </li>
    </ul>
    <el-dialog
        :visible.sync="dialogVisible"
        width="500px"
        :before-close="handleClose"
        class="userdialog">
        <span>
        <el-form ref="form" :model="form" label-width="80px" >
        <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
            <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
            <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
            <i class="el-icon-delete"></i>
        </span>
        </span>
        </div>
        </el-upload>
        <el-form-item label="用户昵称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排名">
            <el-input v-model="form.rank"></el-input>
        </el-form-item>
        <el-form-item label="获赞数">
            <el-input v-model="form.mount"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="个人简介">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        </el-form>
        </span>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">确 定</el-button>
        </span>
    </el-dialog>
    </div>
</template>

<script>

export default {
  name:'PersonDetail',
  components: {},
  data () {
    return {
        dialogVisible:false,
        form: {
          name: '只想躺平的咸鱼',
          rank: '1',
          mount: '2',
          sex: '女',
          desc: '大神笔记'
        }
    }
  },
  methods: {
  changeyourmessage(){
    console.log(1111)
      this.show = !this.show;
   },
    onSubmit() {
        this.show = false;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
.persondetail{
 /* height: 600px; */
  margin: 50px 70px;
  border:10px solid rgba(22, 22, 22, 0.295);
}
ul{
    list-style:none;
}
h2{
   margin:10px;
   border-bottom: 2px solid rgb(139, 112, 117);
   padding-bottom: 10px;
   /* border:1px solid black */
}
span{
    display: block;
    height: 30px;
    line-height: 30px;
    margin: 10px;
}
.persondetail ul li{
   margin:0 auto;
}
.personhead{
    width:100%;
    height:270px;
    /* margin:30px; */
}
.personhead .imgleft{
    margin:30px;
    float: left;
}
.personhead .imgleft img{
    width:200px;
    height:200px;
    float: left;
}

.persondetail .el-dialog{
   height:700px;
}
.dialog-footer{
    margin:0px;
    margin-bottom: 10px;
}
.el-dialog .el-dialog__body span{
    height: 550px;
}
.el-dialog__footer .el-button {
    margin: 0px;
    width: 200px;
    height: 40px;
}
.el-upload{
    margin-bottom: 10px;
}

::v-/deep/ .el-dialog{
      height: 700px ;
    }
</style>
