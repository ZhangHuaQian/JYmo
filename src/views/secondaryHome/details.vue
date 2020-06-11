<template>
  <div class="home-container">
    <!-- <van-row>
			<div style="color:rgba(102,102,102,1);margin-bottom: 20px;">当前位置：5343434</div>
    </el-row>-->
    <van-row class="news-list" :gutter="24">
      <van-col class="first-news" :span="24" style="padding:0 20px">
        <van-row class="first-news-title">
          <p
            style="font-size:18px;font-weight:bold;line-height:24px;color:rgba(51,51,51,1);"
          >{{list.title}}</p>
          <p
            style="font-weight:400;color:rgba(153,153,153,1);line-height:36px;"
          >发布日期：{{list.modifyTime}}</p>
        </van-row>
        <!--        <van-row v-for="item in 2" :key="item" style="font-size: 0;margin-top:10px">
          <img src="../../assets/secondaryHome/fk.png">
        </van-row>-->
        <van-row v-html="list.content">
          <div>{{list.content}}</div>

          <!--          <p style="font-size:16px;color:rgba(51,51,51,1);line-height:36px;text-indent:2em">
			 
            为切实加强新型冠状病毒感染的肺炎疫情防控工作，更好地保障全校师生身体健康和生命安全，根据《教育部关于2020年春季学期延期开学的通知》（教电〔2020〕37号）、
            《自治区人民政府办公厅关于延迟广西区内企业复工、学校开学等有关事项的通知》（厅函〔2020〕12号）、《广西壮族自治区新型冠状病毒感染的肺炎疫情防控工作领导小组指挥部令第 4 号》
            和教育部、教育厅视频会议的要求，经学校研究决定，现就有关工作通告如下： 一、全体学生不得提前返校
          </p>
          <p>（一）2020年春季学期开学时间不早于2020年2月24日，具体开学时间和有关安排另行通知。</p>
          <p>
            （二）开学前14天曾在湖北省等疫情高发地区停留（居住、旅游或因转机/车短暂停留）的学生，正在按照规定要求进行集中隔离观察或居家医学观察的学生，有发热、咳嗽、乏力、胸闷等症状者的学生
            ，暂时不要返回学校。上述学生要主动将有关情况报告所在学院。返校时间另行通知。
          </p>（三）各学院要采取“人盯人”措施，全面摸清、准确掌握学生所在地区、健康状况等信息，迅速将学校关于不得提
          依法追究责任，属学校教职工的扣发单位和个人绩效奖金。 学校总值班电话：0771-5616000。 校纪委监督举报邮箱：gxjcxyjw@163.com。
          <p>（四）各学院要采取“人盯人”措施，全面摸清、准确掌握学生所在地区、健康状况等信息，迅速将学校关于不得提</p>依法追究责任，属学校教职工的扣发单位和个人绩效奖金。 学校总值班电话：0771-5616000。 校纪委监督举报邮箱：gxjcxyjw@163.com。
          <p>
            （五）各学院要采取“人盯人”措施，全面摸清、准确掌握学生所在地区、健康状况等信息，迅速将学校关于不得提
            依法追究责任，属学校教职工的扣发单位和个人绩效奖金。 学校总值班电话：0771-5616000。 校纪委监督举报邮箱：gxjcxyjw@163.com。
          </p>-->
        </van-row>
        <van-divider style="margin:0" />

        <van-row style="padding-bottom: 12px;color:rgba(80,80,80,1);font-size:16px;">
          <van-col :span="24">
            <a style="line-height:30px;">上一篇：爱心企业向我校捐赠防疫物资</a>
          </van-col>

          <van-col :span="24">
            <a style="line-height:30px;">下一篇：学校召开加强新型冠状病毒肺炎疫情防控工作暨新学期工作布置网络会议</a>
          </van-col>
        </van-row>
      </van-col>

      <van-col class="others-news" :span="24" style="margin-left: -2.7%">
        <van-row style="background:#B7DAFD;width:100VW;margin-left:-3.1%" gutter="24">
          <van-col :span="24">
            <span
              style="width:4px;height: 18px;background:rgba(1,111,188,1);border-radius:2px;display:inline-block;"
            />
            <span
              style="font-size:18px;color:rgba(51,51,51,1);line-height:36px;font-weight:bold;margin-left: 10px;"
            >相关资讯</span>
          </van-col>
          <van-row :gutter="24">
            <van-col
              class="others-news-item"
              :span="11"
              style="background:rgba(255,255,255,1);padding:10px;margin:5px"
              v-for="(item,index) in relateList"
              :key="index"
            >
              <div style="position: relative;">
                <div style="width: 35vw;height: 28vw;border: 1px solid #C1C1C1;margin: 0 auto;">
                  <img style="width: 100%;" :src="item.image" />
                </div>

                <div
                  style="color:rgba(51,51,51,1);font-weight:bold;line-height:36px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;padding:5px"
                >{{item.title}}</div>
                <div
                  style="color:rgba(80,80,80,1);margin-top0.5rem!important:400;padding:5px; text-overflow: -o-ellipsis-lastline;padding-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;"
                >{{item.subTitle}}</div>
              </div>
            </van-col>
          </van-row>
        </van-row>
        <van-row style="width:100VW;margin-left:-3.3%">
          <div style="background:#B7DAFD;padding-bottom: 2px;">
            <div style="position: relative;padding: 0 0 0 10px;">
              <span
                style="width:4px;height: 18px;background:rgba(1,111,188,1);border-radius:2px;display:inline-block;position: absolute;top: 9px;"
              />
              <span
                style="font-size:18px;color:rgba(51,51,51,1);line-height:36px;font-weight:bold;margin-left: 10px;"
              >阅读推荐</span>
            </div>
            <van-row :span="24" style="padding: 20px 20px;">
              <van-col
                v-for="item in news"
                :key="item.id"
                :span="24"
                style="background:rgba(255,255,255,1);"
                @click="toDetails(item.id,item.siteId)"
              >
                <van-row>
                  <van-col
                    :span="2"
                    style="height:50px;"
                    type="flex"
                    justify="center"
                    align="center"
                  >
                    <div
                      style="margin-top:22px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
                    />
                  </van-col>
                  <van-col :span="21">
                    <p
                      class="van-ellipsis ydtj_tit"
                      style="color:rgba(80,80,80,1);font-size:20px;;"
                    >{{item.title}}</p>
                  </van-col>
                </van-row>
                <van-row>
                  <van-col :span="2" />
                  <van-col :span="22">
                    <span style="color:rgba(153,153,153,1);">{{item.modifyTime}}</span>
                  </van-col>
                </van-row>
                <van-divider dashed />
              </van-col>
              <!-- <ul style="padding-right:20px;background:rgba(255,255,255,1);">
                  <li style="list-style-type:none;">
                    <div style="width:100%;height:5px"></div>
                  </li>

                  <li style>
                    <p
                      style="color:rgba(80,80,80,1);overflow:hidden;text-overflow: ellipsis;white-space: nowrap;font-size:12px;font-size:18px;"
                    >学校召开加强新型冠状病毒肺炎疫情防控工作暨新学期工作布置网络会议</p>
                    <span style="color:rgba(153,153,153,1);">2020-02-09 22:16:35</span>
                  </li>
                  <van-divider />
                  <li>
                    <p
                      style="color:rgba(80,80,80,1);overflow:hidden;text-overflow: ellipsis;white-space: nowrap;font-size:12px;font-size:18px"
                    >学校召开加强新型冠状病毒肺炎疫情防控工作暨新学期工作布置网络会议</p>
                    <span style="color:rgba(153,153,153,1);">2020-02-09 22:16:35</span>
                  </li>
                  <van-divider />
                  <li>
                    <p
                      style="color:rgba(80,80,80,1);overflow:hidden;text-overflow: ellipsis;white-space: nowrap;font-size:12px;font-size:18px"
                    >学校召开加强新型冠状病毒肺炎疫情防控工作暨新学期工作布置网络会议</p>
                    <span style="color:rgba(153,153,153,1);">2020-02-09 22:16:35</span>
                  </li>
                  <van-divider />
                  <li style="list-style-type:none;">
                    <div style="width:100%;height:5px"></div>
                  </li>
              </ul>-->
            </van-row>
          </div>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { serverip as ip } from "@/utils/serverIP";
export default {
  data() {
    return {
      list: [],
      news: [],
      relateList: []
    };
  },
  created() {
    this.getDetail();
  },
  mounted() {
    this.getDetail();
    this.getHotNews();
    //  this.ImgSize();
  },
  updated() {
    this.ImgSize();
  },
  // beforeCreate(){
  //   this.ImgSize();
  // },
  beforeMounted() {
    this.ImgSize();
  },
  methods: {
    toDetails(id, siteId) {
      this.$router.push({
        path: "/secondaryHome/details",
        query: {
          id: id,
          siteId: siteId
        }
      });
    },
    ImgSize() {
      // if(document.querySelectorAll("img").length-4>1){
      //   document.querySelectorAll("img")[1].style.width="90vw"
      //   document.querySelectorAll("img")[j].style.textAlign = 'center'
      //   console.log(document.querySelectorAll("img"),"12323")
      // }
      // if(document.querySelectorAll("img").length-4>2){
      //   document.querySelectorAll("img")[1].style.width="90vw"
      //   document.querySelectorAll("img")[2].style.width="90vw"
      //   console.log(document.querySelectorAll("img"),"12323")
      // }
      // if(document.querySelectorAll("img").length-4>3){
      //   document.querySelectorAll("img")[1].style.width="90vw"
      //   document.querySelectorAll("img")[2].style.width="90vw"
      //   document.querySelectorAll("img")[3].style.width="90vw"
      //   console.log(document.querySelectorAll("img"),"12323")
      // }
      for (let i = 1; i < 10; i++) {
        if (document.querySelectorAll("img").length - 4 > i) {
          for (let j = 1; j <= i + 2; j++) {
            console.log("触发了");
            document.querySelectorAll("img")[j].style.width = "90vw";
            // document.querySelectorAll("img")[j].style.marginLeft = "-10%";
            document.querySelectorAll("img")[j].style.textAlign = 'center'
            console.log(document.querySelectorAll("img"), "12323");
          }
        }
      }
    },

    getDetail() {
      console.log(this.$route.query.id, this.$route.query.siteId, "zeshihjhhh");
      //
      this.axios
        .post(ip + "/unauth/news/select", {
          id: this.$route.query.id,
          siteId: this.$route.query.siteId
        })
        .then(res => {
          this.list = res.data.data;
          console.log("新闻详情：", this.list);
          this.getRelateList();
        });
    },
    getRelateList() {
      //获取相关资讯
      this.relateList = this.list.relateList;
      console.log(this.list, "相关资讯数据", this.relateList);
    },
    getHotNews() {
      this.axios
        .post(ip + "/unauth/news/selectHotNews", {
          siteId: this.$route.query.siteId
        })
        .then(res => {
          this.news = res.data.data;
          // console.log('新闻详情：',this.news)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-divider {
  margin: 0.5rem 0;
}
img {
  width: 90vw;
  height: 100%;
}
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  margin: 1.15rem auto;
  border-bottom: 3px dotted rgba(67, 67, 67, 1);
}
.ydtj_tit {
}
.home-container {
  padding: 1.5% 0%;
  background: rgba(249, 249, 249, 1);

  .news-list {
    .first-news {
      background: rgba(255, 255, 255, 1);
      &-title {
        line-height: 3.3rem;
      }
    }

    .others-news {
      // background:rgba(255,255,255,1);
      padding: 0rem 1.25rem;
      margin-left: 12px;

      // &-item {
      // }
    }
  }
}
</style>
