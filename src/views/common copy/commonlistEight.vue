<template>
  <div class="home-container">
    <!-- 规则制度 -->
    <van-row :gutter="24">
      <van-col :span="24">
        <p class="gzzd_title">广西警察学院节假日值班制度</p>
      </van-col>
      <van-col class="gzzd_xx" :span="24">
        <p>作者：办公室 发布日期：2018-04-12 17:09:29 浏览量： 1343</p>
      </van-col>
      <van-col :span="24">
        <p class="nr_tit">第一章 总 则</p>
        <p>第一条 为了加强综合协调指挥，提高工作效率，节约运行成本，更好地为师生的工作、学习、生活、安全提供服务，学校实行节假日值班制度。</p>
        <p>第二条 学校节假日值班实行校领导带班，处级干部值班制度，每天安排一名处级领导全天24小时值班，当日早上8时到次日早上8时（即交给下一位值班同志为止），值班安排表由办公室编排印发，值班地点由学校办公室根据校区指定。</p>
        <p class="nr_tit">第二章 值班职责及要求</p>
        <p>第三条 值班工作职责如下：</p>
        <p>1.负责应急值守工作，协调处理紧急事务，进行校园安全巡查；</p>
        <p> 2.及时接报突发事件信息，并协助领导做好突发事件处置工作；</p>
        <p> 3.接待来访人员，受理全校师生对学校有关工作的咨询、反映；</p>
        <p>  4.受理对师生违纪违法行为的举报；</p>
        <p>  5.负责学校动态信息的收集、反馈、综合分析和上报，做好值班记录；</p>
        <p>6.负责紧急文件和信件的处理和急办事项的上传下达工作；</p>
        <p> 7.完成校领导交办的其他工作任务。</p>

      </van-col>
      <van-col style="padding-left:0;padding-right:0;margin-left:-3%">
        <div style="background:#f9f9f9;width:100VW;height:20px" />
      </van-col>
      <van-col :span="24" style="padding-left:0">
        <van-row :gutter="0">
          <van-col :span="6" style="padding-right:0;margin-right:-5%;padding-top:15px">
            <van-col :span="4" style="margin-top:5%">
              <div class="triangle-up" />
            </van-col>
            <van-col :span="15" style="padding-right:0">上一篇:</van-col>
          </van-col>
          <van-col :span="18" class="van-ellipsis" style="padding-left:0;padding-top:15px">学校召开校园基础建设会议</van-col>
        </van-row>
        <van-divider dashed style="margin-bottom:0" />
        <van-row :gutter="0" style="margin-bottom:20px">
          <van-col :span="6" style="padding-right:0;margin-right:-5%;padding-top:15px">
            <van-col :span="4" style="margin-top:5%">
              <div class="triangle-down" />
            </van-col>
            <van-col :span="15" style="padding-right:0">下一篇:</van-col>
          </van-col>
          <van-col :span="18" class="van-ellipsis" style="padding-left:0;padding-top:15px">全区公安系统高级专业技术人才工作会议暨广西警…</van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  margin: 1.15rem auto;
}

img {
  width: 100%;
  height: 100%;
}

.home-container {
  padding: 1.5% 3%;
  .gzzd_title {
    font-size: 20px;
    margin-bottom: 0;
  }
  .gzzd_xx {
    font-size: 12px;
    p {
      color: #999999;
    }
  }
  .nr_tit {
    text-align: center;
  }
  p {
    margin-bottom: 0;
    margin-top: 5px;
    line-height: 2rem;
  }
  .triangle-up {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid rgba(153,153,153,1);;
}
.triangle-down {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid rgba(153,153,153,1);;
}
}
</style>
