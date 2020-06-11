<template>
  <div class="home-container">
    <van-row class="news-list" :gutter="24">
      <van-col class="first-news" :span="24" @click="toDetailPage(list[0].id,list[0].siteId)">
        <van-row style="font-size: 0;">
          <img :src="list[0].image">
        </van-row>
        <van-row class="first-news-title">
          <p
            class="van-ellipsis"
            style="font-weight:800;font-size:24px"
          >{{list[0].title}}</p>

        </van-row>
      </van-col>
      <van-col class="others-news" :md="8" :span="24">
        <van-divider style="margin:0" />
        <van-row v-for="(item,index) in list" :key="index" v-if="index>0">
          <van-row class="others-news-item" @click="toDetailPage(item.id,item.siteId)">
            
              <van-col :span="16">
                <p
                  class="van-ellipsis"
                  style="font-size:18px;font-weight:600"
                >{{item.title}}</p>
              </van-col>
              <van-col :span="6" style="margin-left:10px">
                <p class="others-news-item-date">{{  getMoment(item.modifyTime, 'YYYY-MM-DD') }}</p>
              </van-col>
           
          </van-row>

          <van-divider style="margin:0" />
        </van-row>

        <van-row class="others-news-item"  @click="moreNews(72)">
          <router-link :to="{path:'/secondaryHome/moreList',query:{id:72}}" tag="p" style="text-align: right;color: #666666;">更多新闻></router-link>
        </van-row>
      </van-col>
    </van-row>
    <!-- <van-row class="xsyj">
      <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">

        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:20px;font-size:24px">思想政治</span>
        </van-col>

        <van-col
          :md="12"
          :span="11"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig"
        >更多></van-col>
      </van-row>
      <van-row class="xsyj-images" :gutter="20" style="margin-top:20px">
        <van-col class="xsyj-images-item" :span="24" :md="8">
          <img src="../../assets/secondaryHome/xwt2.png">
          <van-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </van-row>
        </van-col>
        <van-col class="xsyj-images-item" :span="12" :md="8" style="margin-top:20px">
          <img src="../../assets/secondaryHome/xwt3.png">
          <van-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </van-row>
        </van-col>
        <van-col class="xsyj-images-item" :span="12" :md="8" style="margin-top:20px">
          <img src="../../assets/secondaryHome/xwt4.png">
          <van-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </van-row>
        </van-col>
      </van-row>
    </van-row> -->
    <van-row class="sszzgz">

      <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">

        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:20px;font-size:24px">思想政治</span>
        </van-col>

        <van-col
          :md="12"
          :span="11"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig"
        >
        <router-link :to="{path:'/secondaryHome/moreList',query:{id:73}}" tag="p" >更多></router-link>
        </van-col>
      </van-row>
      <van-row class="sszzgz-newsList">
        <van-row v-for="item in sixiangzhengzhi" :key="item">
          <van-row class="sszzgz-newsList-item" :gutter="24">
            <van-col class="sszzgz-newsList-item-image" :span="10" :md="4">
              <img :src="item.image">
            </van-col>
            <van-col class="sszzgz-newsList-item-content" :span="14" :md="20">
              <p
                class="van-ellipsis"
                style="font-size:18px;margin:0px"
              >{{item.title}}</p>
              <p
                class="van-multi-ellipsis--l2"
                style="font-size:14px;margin-top:7px;margin-bottom:5px"
              >{{item.subTitle}}</p>
              <van-row type="flex" justify="space-between">
                <van-col>
                  <span style="font-size:14px">{{ getMoment(item.modifyTime, 'YYYY-MM-DD') }}</span>
                </van-col>
                <van-col>
                  <span style="font-size:14px;display:flex;justify-content:flex-end" @click="toDetailPage(item.id,item.siteId)">了解详情></span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-divider dashed />
        </van-row>

      </van-row>
    </van-row>
    <van-row class="tzgg">

      <!-- <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">
        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:20px;font-size:24px">通知公告</span>
        </van-col>

        <van-col
          :md="12"
          :span="11"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig"
        >更多></van-col>
      </van-row>
      <van-row class="tzgg-images" :gutter="24">
        <van-col v-for="item in 4 " :key="item" class="tzgg-images-item" :span="12" :md="8" style="margin-top:20px">
          <img src="../../assets/secondaryHome/xwt9.png">
          <van-row class="tzgg-images-item-content">
            <h4
              class="tzgg-images-item-content-title van-ellipsis"
              style="font-size:18px"
            >仙葫校区总平面规划调整设计项目询价公</h4>
            <p
              class="tzgg-images-item-content-introduction van-multi-ellipsis--l2"
              style="font-size:12px"
            >根据广西壮族自治区财政厅文件（桂财采〔2019〕72号）的文件精神，我校仙葫校区总平面规划调整设计项目</p>
          </van-row>
        </van-col>

      </van-row> -->
    </van-row>

    <van-row class="jyyx">

      <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">
        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:20px;font-size:24px;">警院影相</span>
        </van-col>

        <van-col
          :md="12"
          :span="11"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig">
          <router-link :to="{path:'/secondaryHome/moreList',query:{id:74}}" tag="p" >更多></router-link>
          
          </van-col>
      </van-row>
      <van-row class="jyyx-images" :gutter="20" style="margin-top:20px">
        <van-col class="jyyx-images-item" :span="12" :md="12" v-for=" item in jingyuanyingxiang" :key="item.id"  @click="toDetailPage(item.id,item.siteId)">
          <img :src="item.image">
          <h4 class="jyyx-images-item-title">{{item.title}}</h4>
        </van-col>
        <!-- <van-col class="jyyx-images-item" :span="12" :md="12">
          <img src="../../assets/secondaryHome/xwt13.png">
          <h4 class="jyyx-images-item-title">学校召开“不忘初心、牢记使命”主题教育总结大会</h4>
        </van-col> -->
      </van-row>
    </van-row>
  </div>
</template>

<script>
import { serverip as ip } from '@/utils/serverIP'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  components: {},
  data() {
    return {
		list:[],
		lanse:[],
		// listnews:[],
		// listnewsSec:[],
		// listnewsThr:[],
		// listnewsFour:[],
    // listnewsFire:[],
    
      list: [],
      listsec: [],
      listFirst: [],
      listSecond: [],
      listThrd: [],
      listFour: [],
      listFive: [],
      listSix: [],
      zt:[],
      tuijianxinwen: [],
      sixiangzhengzhi: [],
      jingyuanyingxiang: []
	}
  },
  filters: {
     // 时间格式自定义 只需把字符串里面的改成自己所需的格式
     formatDate(time) {
       let date = new Date(time);
       return formatDate(date, 'yyyy-MM-dd');
     }
   },
   created() {
    this.getTJXW()
    this.getSXZZ()
    this.getJYYX()
  },
   mounted(){
     this.getLanmu(),
     this.getListsec();
   },
   methods:{
      getMoment(date, str) {
      return moment(date).format(str)
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
   	getLanmu(){//获取栏目列表
   				  		  this.axios.post(ip+'/unauth/column/selectList',
   				  			{siteId:this.$route.query.id}
   				  		  ).then((res)=>{
   				  			  this.list=res.data.data
   				  			   console.log('获取栏目：',res)
							    // this.getLanse()
   				  		  })
     },
     getListsec() {
      //获取首页的蓝色底色栏目
      this.axios
        .post(ip + "/unauth/column/selectChild", { id: 36 })
        .then(res => {
          console.log("蓝色栏目：1", res);
          this.listsec = res.data.data;
          this.getList();
          // console.log(this.listsec)
        });
    },
    
    getList() {
      console.log(this.listsec[0].id,'4444')
      //新闻0
      this.axios
        .post(ip + "/unauth/news/selectList", {
          // columnId: this.listsec[0].id
          columnId: 72
        })
        .then(res => {
          console.log("单页面内容:3", res);
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
          console.log("新闻1:4", this.listFirst);
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
          console.log("新闻2:5", this.listSecond);
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
          console.log("新闻3:6", this.listThrd);
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
          console.log("新闻4:7", this.listFour);
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
          console.log("新闻5:8", this.listFive);
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
          console.log("新闻6:9", this.listSix);
        });
    },

    getTJXW() {
      const data = {
        columnId: 72,
        pageNum: 1,
        pageSize: 5
      }
      this.axios
        .post(ip + "/unauth/news/selectList", {
          ...data
        })
        .then(res => {
          this. tuijianxinwen = res.data.data.data;
          console.log('推荐新闻',this.sixiangzhengzhi);
        });
      
      // getList('news', data).then(response => {
      //   this.sixiangzhengzhi = response.data.data.data
      // })
    },
    getSXZZ() {
      const data = {
        columnId: 73,
        pageNum: 1,
        pageSize: 3
      }
      this.axios
        .post(ip + "/unauth/news/selectList", {
          ...data
        })
        .then(res => {
          this.sixiangzhengzhi = res.data.data.data;
          console.log('思想政治',this.sixiangzhengzhi);
        });
      // getList('news', data).then(response => {
      //   this.sixiangzhengzhi = response.data.data.data
      // })
    },
    getJYYX() {
      const data = {
        columnId: 74,
        pageNum: 1,
        pageSize: 2
      }
      this.axios
        .post(ip + "/unauth/news/selectList", {
          ...data
        })
        .then(res => {
          this.jingyuanyingxiang = res.data.data.data;
          console.log('警院影相',this.jingyuanyingxiang);
        });
      // getList('news', data).then(response => {
      //   this.jingyuanyingxiang = response.data.data.data
      // })
    },
   	// getLanse(){ //获取内页栏目
   	// 	this.axios.post('/gxjcxy/unauth/column/selectChild',
   	// 	{id:this.list[0].id}
   	// 			  		  ).then((res)=>{
   	// 						  console.log(res)
   	// 			  			   this.lanse=res.data.data
   	// 						   this.getList()
   	// 						   this.getListSec()
   	// 						   this.getListThr()
   	// 						   this.getListFour()
   	// 						   this.getListFire()
   	// 			  			   console.log('总列表:',this.lanse)
   	// 			  		  })
   	// },
   	// getList(){ //获取单页列表0
   	// 	this.axios.post('/gxjcxy/unauth/news/selectList',
   	// 	{columnId:this.lanse[0].id}
   	// 			  		  ).then((res)=>{
   	// 						  this.listnews = res.data.data.data
   	// 						  console.log('第0条',this.listnews)
   	// 	 })
   	// },
   	// getListSec(){ //获取单页列表1
   	// 	this.axios.post('/gxjcxy/unauth/news/selectList',
   	// 	{columnId:this.lanse[1].id}
   	// 			  		  ).then((res)=>{
   	// 						  this.listnewsSec = res.data.data.data
   	// 						  console.log('第一条',this.listnewsSec)
   	// 	 })
   	// },
   	// getListThr(){ //获取单页列表2
   	// 	this.axios.post('/gxjcxy/unauth/news/selectList',
   	// 	{columnId:this.lanse[2].id}
   	// 			  		  ).then((res)=>{
   	// 						  this.listnewsThr = res.data.data.data
   	// 						  console.log('第二条',this.listnewsThr)
   	// 	 })
   	// },
   	// getListFour(){ //获取单页列表3
   	// 	this.axios.post('/gxjcxy/unauth/news/selectList',
   	// 	{columnId:this.lanse[3].id}
   	// 			  		  ).then((res)=>{
   	// 						  this.listnewsFour = res.data.data.data
   	// 						  console.log('第三条',this.listnewsFour)
   	// 	 })
   	// },
   	// getListFire(){ //获取单页列表4
   	// 	this.axios.post('/gxjcxy/unauth/news/selectList',
   	// 	{columnId:this.lanse[4].id}
   	// 			  		  ).then((res)=>{
   	// 						  this.listnewsFire = res.data.data.data
   	// 						  console.log('第四条',this.listnewsFire)
   	// 	 })
   	// },
   	}
}
</script>

<style lang="scss" scoped>
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  margin: 1.15rem auto;
}
.tit {
  //   background-color: #eeeeee;
  background: rgba(255, 255, 255, 1);

  width: 100vw;
  margin-left: -1.5%;
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
img {
  width: 100%;
}
.home-container {
  padding: 4.5%;

  .news-list {
    .first-news {
      overflow: hidden;
      // text-emphasis:inherit;

      &-title {
        background-color: #f9f9f9;
        // line-height: 3.3rem;
      }
    }

    .others-news {
      background-color: #fafafa;
      padding: 0rem 0rem;

      &-item {
        &-date {
          margin-bottom: 0px;
        }
      }
    }
  }

  .xsyj {
    margin-top: 3rem;

    &-icon {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/xueshu.png);
    }

    &-images {
      &-item {
        font-size: 0;

        &-title {
          position: relative;

          p {
            font-size: 1rem;
            margin: 0;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0.5rem 1rem;
            min-height: 1rem;
            background-color: #00000052;
            position: absolute;
            bottom: 0;
            color: white;
          }
        }
      }
    }
  }

  .sszzgz {
    margin-top: 3rem;

    &-icon {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/six.png);
    }

    &-newsList {
      &-item {
        padding: 0.625rem 0rem;
        &-image {
          font-size: 0;
        }
        &-content {
          h3 {
            margin-top: 0.5rem;
          }
          p {
            color: #666666;
          }
          span {
            color: #999999;
          }
        }
      }
    }
  }

  .tzgg {
    @extend .xsyj;

    &-icon {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/tz.png);
    }
    &-images {
      &-item {
        @extend .xsyj-images-item;
        &-content {
          font-size: 1rem;
          background-color: #f5f5f5;
          padding: 0.625rem;
          &-title {
            margin: 0.625rem 0rem;
            color: #333333;
          }
          &-introduction {
            color: #666666;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        }
      }
    }
  }

  .jyyx {
    @extend .xsyj;

    &-icon {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/yyua.png);
    }

    &-images {
      &-item {
        @extend .xsyj-images-item;
        &-title {
          font-size: 1rem;
          padding: 0.625rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
