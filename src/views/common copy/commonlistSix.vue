<template>
  <div class="home-container">
    <van-row>

      <!--  新闻资讯 -->
      <van-row class="xwzx">

        <van-row class="xwzx-newsList">
          <van-row v-for="item in 6" :key="item" class="xwzx-newsList-item">
            <van-row :gutter="20">

              <van-col class="xwzx-newsList-item-content" :span="10">
                <img src="@/assets/home/zhutu.png">
              </van-col>

              <van-col class="xwzx-newsList-item-content" :span="14">
                <div class="van-ellipsis">广西警察学院疫情防控工作领导小组指挥部关于做好2020年春季学期师生返校和疫情防控工作有关要求的通告</div>
                <p
                  class="van-multi-ellipsis--l2"
                >4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
                <van-row type="flex" justify="space-between">
                  <van-col span="12">
                    <span style="font-size:12px">2020/02/26</span>
                  </van-col>
                  <van-col span="12">
                    <span style="font-size:12px;display:flex;justify-content:flex-end">了解详情></span>
                  </van-col>
                </van-row>
              </van-col>
            </van-row>
            <van-divider />
          </van-row>
        </van-row>
      </van-row>
      <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
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
