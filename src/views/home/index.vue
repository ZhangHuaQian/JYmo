<template>
  <div class="home-container">
    <van-row class="content-list">
      <img src="@/assets/home/banner.png" style="margin-top:3.7rem ;" />
      <NavMenu class="navmenu" />
      <div class="content-list-wrapper">
        <!-- 校园新闻 -->
        <!-- <el-row class="box1">
          <router-link
            to="/secondaryHome"
            style="position: absolute;top: 2.5%;right: 0%;z-index: 3;"
          >更多></router-link>
          <el-tabs v-model="activeName.box1">
            <el-tab-pane label="校园新闻" name="1">
              <div class="wrapper">
                <el-row :gutter="20">
                  <el-col class="wrapper-item" :xs="24" :md="15">
                    <img src="@/assets/home/zhutu.png" />
                    <el-row class="wrapper-item-title">
                      <p>广西警察学院第一届工会会员代表大会第一次全体会议隆重召开</p>
                    </el-row>
                  </el-col>
                  <el-col :xs="24" :md="9">
                    <div class="wrapper-list">
                      <el-row v-for="item in 6" :key="item" class="wrapper-list-item">
                        <el-col :span="3" class="date">04.08</el-col>
                        <el-col :span="1">
                          <el-divider class="divider" direction="vertical"></el-divider>
                        </el-col>
                        <el-col :span="20" class="content">
                          <span>同心抗疫情，携手迎春天”校企合作单位向我校交通管理学院捐赠防护口罩</span>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>-->

        <van-row :gutter="20" class="box1">
          <van-col>
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">校园新闻</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                >
                  <a
                    style="position: absolute;right: 1.0%;z-index: 3;"
                    @click="moreNews(listsec[0].id)"
                  >更多></a>
                </van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list" @click="toDetailPage(list[0].id,list[0].siteId)">
                  <van-col class="wrapper-item" :span="24">
                    <van-col :span="10">
                      <img :src="list[0].image" />
                    </van-col>

                    <van-col style="display:block" :span="14">
                      <p
                        style="margin-top:-2%;margin-left:3%;font-size:18px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;"
                      >{{list[0].title}}</p>
                      <p
                        class="van-multi-ellipsis--l2"
                        style="margin-top:-8%;margin-left:3%;font-size:14px;line-height: 1.5em"
                      >{{list[0].subTitle}}</p>
                      <van-row type="flex" justify="end">
                        <van-col
                          span="8"
                          style="font-size:12px;margin-right:20px"
                        >
                        
                        {{  getMoment(list[0].modifyTime, 'YYYY-MM-DD') }}
                        <!-- {{ list[0].modifyTime | formatDate }} -->
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-col>
                  <van-col :span="24">
                    <van-divider dashed />
                  </van-col>

                  <van-row
                    v-for="(item,index) in list"
                    :key="index"
                    class="list-item"
                    v-if="index>0"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="6" :offset="1" style="font-size:12px">
                      <!-- <p>[{{ item.modifyTime | formatDate }}]</p> -->
                      <p>[{{  getMoment(item.modifyTime, 'YYYY-MM-DD') }}]</p>
                    </van-col>
                  </van-row>
                </div>
              </van-row>
            </van-row>
          </van-col>
        </van-row>

        <!-- 通知公告 -->
        <van-row :gutter="20">
          <van-col class="box2" :xs="24" :md="17">
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">{{listsec[1].name}}</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                  @click="moreNewsList(listsec[1].id,listsec[1].name)"
                >更多></van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list" style="padding:5px">
                  <van-row
                    v-for="(item,index) in listFirst"
                    :key="index"
                    class="list-item"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="6" :offset="1" style="font-size:12px">
                      <!-- <p>[{{ item.modifyTime | formatDate }}]</p> -->
                      <p>[{{  getMoment(item.modifyTime, 'YYYY-MM-DD') }}]</p>
                    </van-col>
                  </van-row>
                </div>
              </van-row>
              <van-row>
                <div :span="24" class="jiangeBg" />
              </van-row>
            </van-row>
            <!-- 列表2 -->
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">{{listsec[2].name}}</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                  @click="moreNewsList(listsec[2].id,listsec[2].name)"
                >更多></van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list" style="padding:5px">
                  <van-row
                    v-for="(item,index) in listSecond"
                    :key="index"
                    class="list-item"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="6" :offset="1" style="font-size:12px">
                      <!-- <p>[{{ item.modifyTime | formatDate('YYYY-MM-DD') }}]</p> -->
                      <p>[{{  getMoment(item.modifyTime, 'YYYY-MM-DD') }}]</p>
                      <!-- getMoment(item.modifyTime, 'YYYY-MM') -->
                    </van-col>
                  </van-row>
                </div>
              </van-row>
              <van-row>
                <div :span="24" class="jiangeBg" />
              </van-row>
            </van-row>
            <!-- 列表3 -->
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">{{listsec[3].name}}</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                  @click="moreNewsList(listsec[3].id,listsec[3].name)"
                >更多></van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list" style="padding:5px">
                  <van-row
                    v-for="(item,index) in listThrd"
                    :key="index"
                    class="list-item"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="4" :offset="1" style="font-size:12px">
                      <p>[{{ item.modifyTime | formatDate }}]</p>
                    </van-col>
                  </van-row>
                </div>
              </van-row>
              <van-row>
                <div :span="24" class="jiangeBg" />
              </van-row>
            </van-row>
            <!-- 列表4 -->
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">{{listsec[4].name}}</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                  @click="moreNewsList(listsec[4].id,listsec[4].name)"
                >更多></van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list" style="padding:5px">
                  <van-row
                    v-for="(item,index) in listFour"
                    :key="index"
                    class="list-item"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="4" :offset="1" style="font-size:12px">
                      <p>[{{ item.modifyTime | formatDate }}]</p>
                    </van-col>
                  </van-row>
                </div>
              </van-row>
              <van-row>
                <div :span="24" class="jiangeBg" />
              </van-row>
            </van-row>
            <!-- 列表5 -->
            <van-row style="line-height: 2rem;position: relative;" class="tit">
              <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
                <van-col :span="8" class="tit_tit">
                  <span style="margin-left:20px">{{listsec[5].name}}</span>
                </van-col>
                <van-col
                  :span="12"
                  style="text-align: right;color:rgba(153,153,153,1);"
                  class="tit_rig"
                  @click="moreNewsList(listsec[5].id,listsec[5].name)"
                ></van-col>
              </van-row>
              <van-row class="wrapper">
                <div class="list">
                  <van-row
                    v-for="(item,index) in listFive"
                    :key="index"
                    class="list-item"
                    @click="toDetailPage(item.id,item.siteId)"
                  >
                    <van-col :span="1" style="margin-top:10px">
                      <i class="list-item-point">·</i>
                    </van-col>
                    <van-col :span="16">
                      <p class="van-ellipsis">{{item.title}}</p>
                    </van-col>
                    <van-col :span="4" :offset="1" style="font-size:12px">
                      <p>[{{ item.modifyTime | formatDate }}]</p>
                    </van-col>
                  </van-row>
                </div>
              </van-row>
              <!-- <van-row>
                <div :span="24" class="jiangeBg" />
              </van-row> -->
            </van-row>
          </van-col>
        </van-row>
       

        <van-row :gutter="24" style="margin-top:20px">
          <van-col :span="12" style="padding:5px">
            <a href="http://172.16.19.100:8082">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/xnei.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>校内OA办公</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            </a>
          </van-col>
          <van-col :span="12" style="padding:5px">
            <a href="https://121.31.58.86">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/xiaow.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>校外OA办公</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            </a>
          </van-col>
          <van-col :span="12" style="padding:5px">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/jiaowu.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>教务系统(仙葫)</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </van-col>
          <van-col :span="12" style="padding:5px">
            
            <a href="http://113.12.192.116:83/">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/wuhe.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>教务系统(五合)</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            </a>
          </van-col>
          <van-col :span="12" style="padding:5px">
            <a href="mailto:gxjcxyyz1@sina.com">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/shuj.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>书记信箱</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            </a>
          </van-col>
          <van-col :span="12" style="padding:5px">
            <a href="mailto:gxjcxyyz1@sina.com">
            <div style="background:rgba(235,239,245,1);">
              <van-row type="flex" justify="space-between">
                <van-col span="8">
                  <img src="@/assets/home/yuanz.png" style="padding:5px" alt />
                </van-col>
                <van-col span="16">
                  <van-row
                    type="flex"
                    justify="center"
                    style="height:100%"
                    align="center"
                    :span="24"
                  >
                    <van-col>院长信箱</van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            </a>
          </van-col>
        </van-row>
      </div>
    </van-row>

   <!-- 专题网站 -->
        <van-row style="background:rgba(247,213,213,1);width:100VW" :gutter="20">
          <van-row style="margin-top: 30px;">
            <van-row>
              <van-col
                :span="10"
                style="font-size: 20px;font-weight:bold;color:rgba(201,63,63,1);margin-left:10px;margin:10px"
              >{{listsec[6].name}}</van-col>
              <van-col
                :span="10"
                style="text-align: right;line-height: 24px;color:rgba(201,63,63,1);margin:10px"
                @click="moreNewsList(listsec[6].id,listsec[6].name)"
              >
              
              查看更多>
            
              
              
              </van-col>
            </van-row>
          </van-row>
          <van-row class="zhuanti-list" :gutter="20">
            <van-swipe :width="300" >
              <van-swipe-item v-for="item in zt" :key="item.id">
                <div style="padding: 0 10px">
                  
                  <a :href="item.url">
                    
                  
                  <!-- <img src="@/assets/home/zhuant1.png" /> -->
                  <img :src="item.image" />
                  <!-- <p>{{item.title}}</p> -->
                  </a>
                </div>
              </van-swipe-item>
              <!-- <van-swipe-item>
                <div style="padding: 0 10px">
                  <img src="@/assets/home/zhuant2.png" />
                </div>
              </van-swipe-item>
              <van-swipe-item>
                <div style="padding: 0 10px">
                  <img src="@/assets/home/zhuant3.png" />
                </div>
              </van-swipe-item>
              <van-swipe-item>
                <div style="padding: 0 10px">
                  <img src="@/assets/home/zhuant4.png" />
                </div>
              </van-swipe-item> -->
            </van-swipe>
            <!-- <van-col :xs="12" :md="6">
              <img src="@/assets/home/zhuant1.png" />
            </van-col>
            <van-col :xs="12" :md="6">
              <img src="@/assets/home/zhuant2.png" />
            </van-col>
            <van-col :xs="12" :md="6">
              <img src="@/assets/home/zhuant3.png" />
            </van-col>
            <van-col :xs="12" :md="6">
              <img src="@/assets/home/zhuant4.png" />
            </van-col>-->
          </van-row>
        </van-row>
        <!-- 结束 -->

  </div>
</template>

<script>
import { formatDate } from "@/common/date.js"; // 在组件中引用date.js
import NavMenu from "@/layout/components/main/components/NavMenu.vue";
// import { serverip as ip } from '@/utils/serverIP.js'
import { serverip as ip } from "@/utils/serverIP";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";

import moment from 'moment'
moment.locale('zh-cn')

Vue.use(VueAwesomeSwiper);
import "babel-polyfill";
export default {
  name: "Home",
  components: {
    NavMenu
  },
  data() {
    return {
      list: [],
      listsec: [],
      listFirst: [],
      listSecond: [],
      listThrd: [],
      listFour: [],
      listFive: [],
      listSix: [],
      zt:[],
      activeName: {
        box1: "1",
        box2: "3",
        box3: "1"
      },
      activeIndex: "1",
      seach: ""
    };
  },
  filters: {
    // 时间格式自定义
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy/MM/dd");
    }
  },
  mounted() {
    this.getListsec();
    this.getListZT()
  },
  methods: {
    moreNewsList(id, name) {
      this.$router.push({
        path: "/common/commonlistSeven",
        query: {
          id: id,
          title: name
        }
      });
    },
    toDetailPage(id, siteId) {
      //跳转至详情页
      this.$router.push({
        path: "/secondaryHome/details",
        query: {
          id: id,
          siteId: siteId
        }
      });
    },
    moreNews(id) {
      //更多校园新闻
      this.$router.push({
        path: "/secondaryHome/index",
        query: {
          id: id
        }
      });
    },
    getListsec() {
      //获取首页的蓝色底色栏目
      this.axios
        .post(ip + "/unauth/column/selectChild", { id: 36 })
        .then(res => {
          console.log("蓝色栏目：", res);
          this.listsec = res.data.data;
          this.getList();
          // console.log(this.listsec)
        });
    },
    getListZT() {
      //获取首页的专题网站
      this.axios
        .post(ip + "/unauth/subject/selectList", { pageNum:1,pageSize:10 })
        .then(res => {
          console.log("zt：", res);
          this.zt = res.data.data.data;
          console.log(this.zt.url)
          this.getList();
          // console.log(this.listsec)
        });
    },
    getList() {
      //新闻0
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[0].id
        })
        .then(res => {
          console.log("单页面内容:", res);
          this.list = res.data.data.data;
          console.log("新闻0:", this.list);
          this.getListFirst();
        });
    },
    getListFirst() {
      //新闻1
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[1].id
        })
        .then(res => {
          this.listFirst = res.data.data.data;
          console.log("新闻1:", this.listFirst);
          this.getListSecond();
        });
    },
    getListSecond() {
      //新闻2
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[2].id
        })
        .then(res => {
          this.listSecond = res.data.data.data;
          console.log("新闻2:", this.listSecond);
          this.getListThrd();
        });
    },
    getListThrd() {
      //新闻3
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[3].id
        })
        .then(res => {
          this.listThrd = res.data.data.data;
          console.log("新闻3:", this.listThrd);
          this.getListFour();
        });
    },
    getListFour() {
      //新闻4
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[4].id
        })
        .then(res => {
          this.listFour = res.data.data.data;
          console.log("新闻4:", this.listFour);
          this.getListFive();
        });
    },
    getListFive() {
      //新闻5
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[5].id
        })
        .then(res => {
          this.listFive = res.data.data.data;
          console.log("新闻5:", this.listFive);
          this.getListSix();
        });
    },
    getMoment(date, str) {
      return moment(date).format(str)
    },
    getListSix() {
      //新闻6
      this.axios
        .post(ip + "/unauth/news/selectList", {
          columnId: this.listsec[6].id
        })
        .then(res => {
          this.listSix = res.data.data.data;
          console.log("新闻6:", this.listSix);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
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
.jiangeBg {
  background-color: #f9f9f9;
  height: 1.5rem;
}
img {
  width: 100%;
  height: 100%;
}

%box-border {
  border: 0px solid #dfdfdf;
}

%box-list {
  padding: 0.5rem;
  height: 100%;
}

.home-container {
  /deep/ .swiper {
    font-size: 0;

    &-pagination-bullet {
      background-color: #ffffff;
      opacity: 1;

      &-active {
        width: 20px;
        border-radius: 5px;
        background-color: #0374ff;
        opacity: 1;
      }
    }
  }

  .content-list {
    min-height: 83rem;
    background-image: url(../../assets/home/beij.png);
    background-repeat: no-repeat;
    background-size: 100vw;
    padding: 1.5%;
    margin-top: -0.3rem;

    /deep/ .navmenu {
      box-shadow: 0px 1px 0px 0px rgba(7, 68, 127, 1);
      margin: 0.4rem 0 0.8rem 0;

      .el-col-15 {
        width: 100%;
      }
    }

    &-wrapper {
      width: 100%;
      height: 100%;
      background-color: white;

      .box1 {
        min-height: 28.45rem;
        position: relative;
        @extend %box-border;

        .wrapper {
          @extend %box-list;
          &-item {
            // font-size: 12;

            &-title {
              position: relative;

              p {
                font-size: 1rem;
                margin: 0;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 1rem 1rem;
                min-height: 1rem;
                background-color: #00000052;
                position: absolute;
                bottom: 0;
                color: white;
              }
            }
          }
          &-list {
            &-item {
              padding: 0.6rem 0;
              border-bottom: 1px solid #ccc;
              .date {
                padding: 1.4rem 0;
                text-align: center;
              }
              .divider {
                padding: 1.2rem 0;
                margin-top: 1.2rem;
              }
              .content {
                padding: 1rem 0;
              }
            }
          }
        }
      }

      .box2 {
        min-height: 27.55rem;
        margin-top: 20px;
        .yanjiu {
          &-item {
            &-dataTime {
              width: 56px;
              height: 56px;
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
                  margin-left: -10px;
                  margin-top: -12px;
                  font-size: 18px;
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
                  margin-left: -22px;
                  margin-top: -12px;
                  font-size: 12px;
                  color: rgba(102, 102, 102, 1);
                  line-height: 24px;
                }
              }
            }
            &-content {
              width: 94.5%;
              padding-left: 0.5rem;
              position: relative;
              div {
                color: rgba(51, 51, 51, 1);
                line-height: 24px;
              }
              span {
                position: absolute;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 24px;
                font-size: 14px;
                color: rgba(153, 153, 153, 1);
              }
            }
          }
        }
      }

      .box3 {
        margin-top: 20px;
        img {
          margin-bottom: 0.3rem;
        }
      }

      .zhuanti-list {
        img {
          margin-top: 20px;
          width: 100%;
          height: 100%;
        }
      }

      .list {
        &-item {
          // margin: 1rem 0rem;

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          &-point {
            font-size: 2rem;
            line-height: 1rem;
          }

          p {
            margin: 0;
          }
        }
      }
    }
  }
  /deep/ .el-tabs__item {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
