<template>
  <div class="footer">
    <el-row class="record-info">
      <el-col :xs="24">
        <span style="font-size:12px">Copyright@2008-2010 广西警察学院 All Rights Reserved</span>
      </el-col>
      <el-col :xs="24">
        <span>
          <img src="@/assets/home/xx.png" style="" class="xx">
          <span style="font-size:12px;margin-top:10px" :xs="24">桂公网安备 45010302000719号</span>
        </span>
      </el-col>
      <el-col :xs="24">
        <div style="font-size:12px;margin-top:10px">网站标识码：4500000019</div>
        <div style="font-size:12px;margin-top:10px">备案号：桂ICP备05007026号</div>
      </el-col>
      <el-col :xs="24" :md="12">
        <div
          style="margin-bottom: 6px;font-size:12px;margin-top:10px"
        >地址：南宁市开泰路148号 &nbsp;&nbsp;&nbsp; 邮编：530028 &nbsp;&nbsp;&nbsp;</div>
        <div style="font-size:12px;margin-top:10px">电话：0771-5616000</div>
        <div :xs="24" style="margin-right: 27.7%;font-size:12px;margin-top:10px">访问总数：1200413 站点地图</div>

      </el-col>
      <el-col :xs="24" style="margin-top:10px;display:flex;justify-content:center">

        <img src="@/assets/home/bz.png">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #4388cf;
  height: 16.5rem;
  padding: 1% 10.5%;
  color: white;
  border-top: 4px solid #2573b9;
  .footer1 {
    font-size: 14px;
  }
  .footer2 {
    .xx {
      margin-bottom: -4px;
    }
    span {
      line-height: 30px;
      font-size: 14px;
      padding-left: 4px;
    }
  }
  .footer3 {
    font-size: 14px;
    span {
      display: inline-block;
    }
  }
  .footer4 {
    margin-left: 48%;
    width: 56px;
    height: 68px;
  }
}
.record-info {
}
</style>
