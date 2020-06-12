<template>

  <div class="home-container">
    
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

        <van-row v-html="list.content">
         
        </van-row>
        <!-- <van-row>
          <van-col>
            <div>{{list.content}}</div>
          </van-col>
        </van-row> -->
        <van-divider style="margin:0" />

        <van-row style="padding-bottom: 12px;color:rgba(80,80,80,1);font-size:16px;">
          <van-col :span="24">
            <router-link
              :to="{path:'/secondaryHome/details',query:{id:prefix.id,siteId:prefix.siteId,columnId:prefix.columnId}}"
              style="line-height:30px;"
              
            >
              <a>上一篇：{{prefix.title}}</a>
            </router-link>
          </van-col>

          <van-col :span="24">
            <router-link
              :to="{path:'/secondaryHome/details',query:{id:suffix.id,siteId:suffix.siteId,columnId:suffix.columnId}}"
              style="line-height:30px;"
              
            >
              <a>下一篇：{{suffix.title}}</a>
            </router-link>
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
            <router-link
              :to="{path:'/secondaryHome/details',query:{id:xiangList[0].id,siteId:xiangList[0].siteId,columnId:xiangList[0].columnId}}"
            >
              <van-col
                class="others-news-item"
                :span="11"
                style="background:rgba(255,255,255,1);padding:10px;margin:9px"
              >
                <van-col :span="24" style="padding:0;text-align: center;">
                  <van-col :span="24" style="padding:0">
                    <van-image
                      width="100%"
                      height="100%"
                      style
                      cover
                      v-if="xiangList[0].image"
                      :src="xiangList[0].image"
                    />
                  </van-col>
                  <van-col style="padding:0" :span="24">
                    <van-col style="padding:0" :span="24">
                      <p
                        class="van-ellipsis"
                        style="font-weight:800"
                        v-if="xiangList[0].title"
                      >{{xiangList[0].title}}</p>
                    </van-col>
                    <van-col style="padding:0">
                      <p
                        class="van-multi-ellipsis--l2"
                        style="padding：5px"
                        v-if="xiangList[0].subTitle"
                      >{{xiangList[0].subTitle}}</p>
                    </van-col>
                  </van-col>
                </van-col>
              </van-col>
            </router-link>

            <router-link
              :to="{path:'/secondaryHome/details',query:{id:xiangList[1].id,siteId:xiangList[1].siteId,columnId:xiangList[1].columnId}}"
            >
              <van-col
                class="others-news-item"
                :span="11"
                style="background:rgba(255,255,255,1);padding:10px;margin:5px"
              >
                <van-col :span="24" style="padding:0;text-align: center;">
                  <van-col :span="24" style="padding:0">
                    <van-image
                      width="100%"
                      height="100%"
                      cover
                      v-if="xiangList[1].image"
                      :src="xiangList[1].image"
                    />
                  </van-col>
                  <van-col style="padding:0" :span="24">
                    <van-col style="padding:0" :span="24">
                      <p
                        class="van-ellipsis"
                        style="font-weight:800"
                        v-if="xiangList[1].title"
                      >{{xiangList[1].title}}</p>
                    </van-col>
                    <van-col style="padding:0" :span="24">
                      <p
                        class="van-multi-ellipsis--l2"
                        style="padding：5px"
                        v-if="xiangList[1].subTitle"
                      >{{xiangList[1].subTitle}}</p>
                    </van-col>
                  </van-col>
                </van-col>
              </van-col>
            </router-link>
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
                      style="color:rgba(80,80,80,1);font-size:18px;;"
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
      relateList: [],
      xiangList: "",
      prefix: "",
      suffix: ""
    };
  },
  // created() {
  //   this.getDetail();
  // },
  mounted() {
    this.getDetail();
    this.getHotNews();
    this.getRelateList(), this.getPrefixSuffix(), this.getXiangNews();
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
    toDetails(id, siteId, columnId) {
      this.$router.push({
        path: "/secondaryHome/details",
        query: {
          id: id,
          siteId: siteId,
          columnId: this.$route.query.columnId
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
      // for (let i = 1; i < 10; i++) {
      //   if (document.querySelectorAll("img").length - 4 > i) {
      //     for (let j = 1; j <= i + 2; j++) {
      //       console.log("触发了");
      //       document.querySelectorAll("img")[j].style.width = "90vw";
      //       // document.querySelectorAll("img")[j].style.marginLeft = "-10%";
      //       document.querySelectorAll("img")[j].style.textAlign = "center";
      //       console.log(document.querySelectorAll("img"), "12323");
      //     }
      //   }
      // }
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
          console.log("新闻详情：list", this.list);
          // this.getRelateList();
        });
    },
    getRelateList() {
      //获取相关资讯
      this.relateList = this.list.relateList;
      // console.log(this.list, "相关资讯数据", this.relateList);
    },
    getHotNews() {
      this.axios
        .post(ip + "/unauth/news/selectHotNews", {
          siteId: this.$route.query.siteId
        })
        .then(res => {
          this.news = res.data.data;
          // console.log("新闻详情：74", this.news);
        });
    },
    //相关资讯
    getXiangNews() {
      this.axios
        .post(ip + "/unauth/news/selectRelatedNews", {
          id: this.$route.query.id,
          siteId: this.$route.query.siteId,
          columnId: this.$route.query.columnId
        })
        .then(res => {
          this.listSec = res.data.data;
          this.xiangList = this.listSec;
          // console.log("相关资讯：", this.xiangList, this.listSec);

          // console.log('相关资讯55',res)
        });
    },
    //相关资讯2
    getXianGuanNews() {
      this.xiangList = this.listSec.relateList;
    },
    getPrefixSuffix() {
      const data = {
        id: this.$route.query.id,
        siteId: this.$route.query.siteId,
        columnId: this.$route.query.columnId
      };
      this.axios
        .post(ip + "/unauth/news/selectPrefixSuffix", { ...data })
        .then(res => {
          // console.log(res, "xiayitiao");
          this.prefix = res.data.data.prefix;
          this.suffix = res.data.data.suffix;
          // console.log(this.prefix, "prefix", this.suffix);
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
