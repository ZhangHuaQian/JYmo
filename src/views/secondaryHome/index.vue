<template>
  <div class="home-container">
    <van-row class="news-list" :gutter="24">
      <van-col class="first-news" :span="24">
        <van-row style="font-size: 0;">
          <img src="../../assets/secondaryHome/xwt1.png">
        </van-row>
        <van-row class="first-news-title">
          <p
            class="van-ellipsis"
            style="font-weight:800;font-size:24px"
          >自治区教育厅办公室关于印发唐咸仅同志在全区教育系统新冠肺炎...</p>

        </van-row>
      </van-col>
      <van-col class="others-news" :md="8" :span="24">
        <van-divider style="margin:0" />
        <van-row v-for="item in 4" :key="item">
          <van-row class="others-news-item">
            <router-link to="/Details" tag="a">
              <van-col :span="16">
                <p
                  class="van-ellipsis"
                  style="font-size:18px;font-weight:600"
                >学校召开加强新型冠状病毒肺炎疫情防控工作暨新学期工作布置网络会议</p>
              </van-col>
              <van-col :span="6" style="margin-left:10px">
                <p class="others-news-item-date">2020-02-26</p>
              </van-col>
            </router-link>
          </van-row>

          <van-divider style="margin:0" />
        </van-row>

        <van-row class="others-news-item">
          <router-link to="/Morvanist" tag="p" style="text-align: right;color: #666666;">更多新闻></router-link>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="xsyj">
      <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">

        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:20px;font-size:24px">学术研究</span>
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
    </van-row>
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
        >更多></van-col>
      </van-row>
      <van-row class="sszzgz-newsList">
        <van-row v-for="item in 3" :key="item">
          <van-row class="sszzgz-newsList-item" :gutter="24">
            <van-col class="sszzgz-newsList-item-image" :span="10" :md="4">
              <img src="../../assets/secondaryHome/xwt5.png">
            </van-col>
            <van-col class="sszzgz-newsList-item-content" :span="14" :md="20">
              <p
                class="van-ellipsis"
                style="font-size:18px;margin:0px"
              >新时代讲习所五】学校组织参加全国高校思想政治理论课教师“周末理论大讲堂”第三讲活动</p>
              <p
                class="van-multi-ellipsis--l2"
                style="font-size:14px;margin-top:7px;margin-bottom:5px"
              >4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
              <van-row type="flex" justify="space-between">
                <van-col>
                  <span style="font-size:14px">2020/02/26</span>
                </van-col>
                <van-col>
                  <span style="font-size:14px;display:flex;justify-content:flex-end">了解详情></span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-divider dashed />
        </van-row>

      </van-row>
    </van-row>
    <van-row class="tzgg">

      <van-row style="border-bottom:2px solid rgba(67,136,207,1);width:100vw;margin-left:-5%">
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

      </van-row>
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
          class="tit_rig"
        >更多></van-col>
      </van-row>
      <van-row class="jyyx-images" :gutter="20" style="margin-top:20px">
        <van-col class="jyyx-images-item" :span="12" :md="12">
          <img src="../../assets/secondaryHome/xwt12.png">
          <h4 class="jyyx-images-item-title">宾正迎到学校检查指导疫情防控工作</h4>
        </van-col>
        <van-col class="jyyx-images-item" :span="12" :md="12">
          <img src="../../assets/secondaryHome/xwt13.png">
          <h4 class="jyyx-images-item-title">学校召开“不忘初心、牢记使命”主题教育总结大会</h4>
        </van-col>
      </van-row>
    </van-row>
  </div>
</template>

<script>
import { serverip as ip } from '@/utils/serverIP'
export default {
  components: {},
  data() {
    return {
		list:[],
		lanse:[],
		listnews:[],
		listnewsSec:[],
		listnewsThr:[],
		listnewsFour:[],
		listnewsFire:[],
	}
  },
  filters: {
     // 时间格式自定义 只需把字符串里面的改成自己所需的格式
     formatDate(time) {
       let date = new Date(time);
       return formatDate(date, 'yyyy/MM/dd');
     }
   },
   mounted(){
   	this.getLanmu()
   },
   methods:{
   	getLanmu(){//获取栏目列表
   				  		  this.axios.post(ip+'/unauth/column/selectList',
   				  			{siteId:this.$route.query.id}
   				  		  ).then((res)=>{
   				  			  this.list=res.data.data
   				  			   console.log('获取栏目：',res)
							    // this.getLanse()
   				  		  })
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
