<template>
  <div class="home-container">
    <van-row class="news">
      <van-col :span="24">
        <van-row style="font-size: 0;">
          <img src="../../assets/secondaryHome/qe.png">
        </van-row>
      </van-col>
      <van-col class="news-content" :span="24">
        <van-row class="news-content-item">
          <h4
            class="title van-ellipsis"
          >学校组织师生收看庆祝中华人民共和国成立70周年大会</h4>
          <p class="van-multi-ellipsis--l2">
            盛世华诞，祝福祖国繁荣昌盛。10月1日，学校组织仙葫和五合校区师生收看庆祝中华人民共和国成立70周年大会盛况。
            学校师生齐聚一堂，认真聆听习总书记讲话，感受新中国成立70年的光辉...盛世华诞，祝福祖国繁荣昌盛。10月1日，
            学校组织仙葫和五合校区师生收看庆祝中华人民共和国成立70周年大会盛况。学校师生齐聚一堂，认真聆听习总书记讲话，
            感受新中国成立70年的光辉...
          </p>
          <!-- <span>03/05</span> -->
        </van-row>
      </van-col>
    </van-row>

    <!--  新闻资讯 -->
    <van-row class="xwzx">
      <!-- <el-row>
				<el-col :xs="2" :md="1" class="xwzx-ico"><i class="xwzx-icon" /></el-col>
				<el-col :xs="10" :md="11" class="xwzx-title">
					<h4>新闻资讯</h4>
				</el-col>
				<el-col :xs="12" :md="12" class="xwzx-icons">
					<i style="display: inline-block;margin-right: 1rem;" class="xwzx-icon1" />
					<i style="display: inline-block;" class="xwzx-icon2" />
				</el-col>
      </el-row>-->
      <van-row class="xwzx-newsList">
        <van-row v-for="item in 6" :key="item" class="xwzx-newsList-item">
          <van-row :gutter="20">
            <!-- <el-col class="xwzx-newsList-item-dataTime" :xs="4" :md="4">
							<div class="childDiv childDiv1">
								<span class="span1">26</span>
							</div>
							<div class="childDiv childDiv2">
								<span class="span2">2020-02</span>van
							</div>
            </el-col>-->
            <van-col class="xwzx-newsList-item-content" :span="10">
              <img src="@/assets/home/zhutu.png">
            </van-col>

            <van-col class="xwzx-newsList-item-content" :span="14">
              <div class="van-ellipsis">广西警察学院疫情防控工作领导小组指挥部关于做好2020年春季学期师生返校和疫情防控工作有关要求的通告</div>
              <p class="van-multi-ellipsis--l2">4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
              <van-row type="flex" justify="space-between">
                <van-col span="12"><span style="font-size:12px">2020/02/26</span></van-col>
                <van-col span="12"><span style="font-size:12px;display:flex;justify-content:flex-end">了解详情></span></van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-divider />
        </van-row>
      </van-row>
    </van-row>
    <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
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

  .news {
    margin-bottom: 2rem;

    &-content {
      background: rgba(250, 250, 250, 1);
      // box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);

      &-item {
        padding: 20px 20px 22px 19px;

        h4 {
          font-size: 18px;
        }

        p {
          line-height: 1.9rem;
        }

        span {
          font-size: 24px;
          color: rgba(51, 51, 51, 1);
          line-height: 31px;
          font-weight: bold;
          margin-left: 80%;
        }
      }
    }
  }

  .xwzx {
    &-ico {
      text-align: left;
      line-height: 2.5rem;
      width: 2.16667%;
      margin-top: 2px;
    }

    &-title {
      width: 47.83333%;
    }

    &-icons {
      width: 50%;
      text-align: right;
    }

    &-icon {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/zixun.png);
    }

    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/z-nor.png);
    }

    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/you_nor.png);
    }

    &-newsList {
      &-item {
        &-dataTime {
          width: 8rem;
          height: 7rem;
          border: 1px solid rgba(19, 107, 185, 1);
          padding-left: 0 !important;
          padding-right: 0 !important;

          .childDiv {
            width: 100%;
            height: 50%;
          }

          .childDiv1 {
            background: rgba(19, 107, 185, 1);
            position: relative;

            .span1 {
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: -20px;
              margin-top: -12px;
              font-size: 36px;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              line-height: 24px;
            }
          }

          .childDiv2 {
            position: relative;

            .span2 {
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: -33px;
              margin-top: -12px;
              font-size: 18px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
            }
          }
        }

        &-content {
          // width: 89%;
          padding-left: 1rem;
          div {
            font-size: 18px;
            color: rgba(51, 51, 51, 1);
            font-weight: bold;
          }

          p {
            color: rgba(102, 102, 102, 1);
          }

          span {
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
}
</style>
