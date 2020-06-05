<template>
  <div class="home-container">
    <van-row :gutter="24" class="news-list">
      <van-col class="news-list-left" style="padding-left: 0" :span="24">
        <van-row style="font-size: 0;">
          <img src="../../assets/secondaryHome/zsjyt1.png">
        </van-row>
        <van-row class="content">
          <p class="content-title van-ellipsis">张军检查2019年公安普通高等院校招生工作</p>
          <p class="content-info van-multi-ellipsis--l2">
            6月29日上午，公安厅党委副书记、常务副厅长唐斌，厅党委委员、政治部主任宾正迎到我校长湖校区
            检查指导广西2019年公安院校公安专业招相关工作。唐斌、宾正迎详细了解考生报到、引导、面试
          </p>
        </van-row>
      </van-col>
      <!-- <van-col  class="news-list-right">
				<van-row class="img">
					<img src="../../assets/secondaryHome/zsjyt2.png">
				</van-row>
				<van-row class="img">
					<img src="../../assets/secondaryHome/zsjyt3.png">
				</van-row>
				<van-row class="img">
					<img src="../../assets/secondaryHome/zsjyt4.png">
				</van-row>
      </van-col>-->
    </van-row>
    <van-row style="margin-left:-5%" :gutter="24">
      <div style="background:rgba(249,249,249,1);width:100VW;height:20px" />
    </van-row>
    <!--  招生信息 -->
    <van-row class="zsxx" :gutter="24">
      <van-row>
        <van-col :span="16">
          <div
            style="text-align: left;line-height: 20px;font-size:20px;font-weight:bold;color:rgba(67,136,207,1);"
          >招生信息</div>
        </van-col>
        <van-col :span="6">
          <div style="text-align: right;">
            <i style="display: inline-block; margin-right: 14px;" class="zsxx-icon2" />
            <i style="display: inline-block;" class="zsxx-icon3" />
          </div>
        </van-col>
      </van-row>
      <van-row :gutter="24">
        <div class="list">
          <van-row v-for="item in 8" :key="item" class="list-item" style="margin-top:15px">
            <van-col :span="2" style="height:50px;" type="flex" justify="center" align="center">
              <div
                style="margin-top:7px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
              />
            </van-col>
            <van-col class="zsxx-newsList-item-content" :span="22">
              <div class="van-ellipsis">广西警察学院疫情防控工作领导小组指挥部关于做好2020年春季学期师生返校和疫情防控工作有关要求的通告</div>
              <p
                class="van-multi-ellipsis--l2"
              >4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
              <van-row type="flex" justify="space-between">
                <van-col span="12">
                  <span style="font-size:12px">2020/02/26</span>
                </van-col>
                <van-col span="12">
                  <span
                    style="font-size:12px;display:flex;justify-content:flex-end;color:rgba(67,136,207,1);"
                  >了解详情></span>
                </van-col>
              </van-row>
            </van-col>
            <van-col :span="24">
              <van-divider dashed />
            </van-col>

          </van-row>

        </div>

      </van-row>
      <!-- <van-row style="margin:0.6rem 0;">
				<van-col style="padding-left: 0;">
					<van-row class="xwzx">
					  <van-row class="xwzx-newsList">
					    <van-row class="xwzx-newsList-item">
					      <van-col class="xwzx-newsList-item-dataTime" :span="8" >
							<div class="childDiv childDiv1">
								<span class="span1">26</span>
							</div>
							<div class="childDiv childDiv2">
								<span class="span2">2020-02</span>
							</div>
					      </van-col>
					      <van-col class="sszzgz-newsList-item-content" :span="16" >>
					        <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
					        <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
					      </van-col>
					    </van-row>

					  </van-row>
					</van-row>
				</van-col>
			</van-row>
			<van-divider />
			<van-row style="margin:0.6rem 0;">
				<van-col  style="padding-left: 0;">
					<van-row class="xwzx" >
					  <van-row class="xwzx-newsList">
					    <van-row class="xwzx-newsList-item">
					      <van-col class="xwzx-newsList-item-dataTime" :span="8" >
							<div class="childDiv childDiv1">
								<span class="span1">26</span>
							</div>
							<div class="childDiv childDiv2">
								<span class="span2">2020-02</span>
							</div>
					      </van-col>
					      <van-col class="sszzgz-newsList-item-content" :span="16" >>
					        <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
					        <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
					      </van-col>
					    </van-row>

					  </van-row>
					</van-row>
				</van-col>
			</van-row>
			<van-divider />
			<van-row style="margin:0.6rem 0;">
				<van-col  style="padding-left: 0;">
					<van-row class="xwzx">
					  <van-row class="xwzx-newsList">
					    <van-row class="xwzx-newsList-item">
					      <van-col class="xwzx-newsList-item-dataTime" :span="8" >
							<div class="childDiv childDiv1">
								<span class="span1">26</span>
							</div>
							<div class="childDiv childDiv2">
								<span class="span2">2020-02</span>
							</div>
					      </van-col>
					      <van-col class="sszzgz-newsList-item-content" :span="16" >
					        <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
					        <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
					      </van-col>
					    </van-row>

					  </van-row>
					</van-row>
				</van-col>
      </van-row>-->
    </van-row>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  // margin: 1.15rem auto;
}
.tit {
  //   background-color: #eeeeee;
  background: rgba(255, 255, 255, 1);

  width: 100vw;
  margin-left: -1.5%;
}
.list_text p {
  text-align: center;
}
.tit_tit {
  //   background-color: #c93f3f;
  background: rgba(67, 136, 207, 1);
  color: rgba(255, 255, 255, 1);
  //   border-radius: 0px 40px 40px 0px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.tit_rig {
  margin-left: 15%;
}
.zsxx-newsList-item-content {
  // width: 89%;
  //   padding-left: 1rem;
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
.home-container {
  padding: 1.5% 4.5%;
  .news-list {
    &-left {
      padding-right: 0 !important;
      .content {
        // background: rgba(249, 249, 249, 1);
        &-title {
          // margin-left: 1.5rem;
          font-size: 18px;
          font-weight: bold;
        }
        &-info {
          // margin-left: 1.5rem;
        }
      }
    }
    &-right {
      .img {
        font-size: 0;
        line-height: 1.07rem;
      }
    }
  }

  // 招生信息
  .zsxx {
    margin: 1.5% 0;
    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/zhaos.png);
    }
    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/z-nor.png);
    }
    &-icon3 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/you_nor.png);
    }
  }

  .xwzx {
    &-newsList {
      &-item {
        &-dataTime {
          width: 10%;
          height: 100px;
          margin-top: 0.8rem;
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
          p {
          }
          span {
            color: #666666;
          }
        }
      }
    }
  }
  .sszzgz-newsList-item-content {
    padding-left: 10px;
    width: 90%;
  }
}
</style>
