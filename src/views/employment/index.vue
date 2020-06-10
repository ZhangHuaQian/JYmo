<template>
  <div class="home-container">
    <van-row class="news-list">
      <van-col class="first-news" :span="24"  @click="toNewPages(news[0].id,news[0].siteId)">
        <van-row style="font-size: 0;" :span="24">
          <img :src="news[0].image">
        </van-row>
        <van-row class="first-news-title">
          <p style="font-size:20px" class="van-ellipsis">{{news[0].title}}</p>
        </van-row>
        <van-divider />
      </van-col>

      <van-col v-for="(item,index) in news" :key="item.id" class="others-news" :span="24" v-if="index>0">
        <van-row class="others-news-item" :gutter="24">
          <div to="/Details" tag="a" @click="toNewPages(item.id,item.siteId)">
            <van-col :span="16">
              <p class="van-ellipsis" style="font-size:18px;">{{item.title}}</p>
            </van-col>
            <van-col :span="8" style="margin-left:-3%">
              <p class="others-news-item-date">[{{ item.modifyTime | formatDate }}]</p>
            </van-col>
          </div>
        </van-row>

        <van-divider />
      </van-col>
      <van-row class="others-news-item">
        <a tag="p" style="text-align: right;color: #666666;float: right;" @click="moreNewsList(lanse[0].id,lanse[0].name)">更多新闻></a>
      </van-row>
    </van-row>
    <van-col>
      <div style="width:100Vw;height:20px;background:#f9f9f9" />
    </van-col>
    <!-- 招生信息  更多入口 -->
    <van-row class="zsxx">
      <van-row style="border-bottom:2px solid rgba(67,136,207,1);">
        <van-col :md="12" :span="9" class="tit_tit">
          <span style="margin-left:10px;font-size:24px">{{lanse[1].name}}</span>
        </van-col>

        <van-col
          :md="12"
          :span="11"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig"
		   @click="moreNewsList(lanse[1].id,lanse[1].name)"
        >更多></van-col>
      </van-row>
      <van-col v-for="item in zhaosheng" :key="item.id" :span="24" style="background:rgba(255,255,255,1);"  @click="toNewPages(item.id,item.siteId)">
        <van-row>
          <van-col :span="2" style="height:50px;" type="flex" justify="center" align="center">
            <div
              style="margin-top:28px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
            />
          </van-col>
          <van-col :span="21">
            <p
              class="van-ellipsis ydtj_tit"
              style="color:rgba(80,80,80,1);font-size:20px;margin-bottom:0px;"
            >{{item.title}}</p>
          </van-col>
          <van-col class="sszzgz-newsList-item-content" :span="24" :md="20">
            <p
              class="van-multi-ellipsis--l2"
              style="font-size:14px;margin-top:7px;margin-bottom:5px"
            >4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记</p>
            <van-row type="flex" justify="space-between">
              <van-col>
                <span style="font-size:14px">{{item.modifyTime | formatDate}}</span>
              </van-col>
              <van-col>
                <span style="font-size:14px;display:flex;justify-content:flex-end">了解详情></span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-divider dashed />
      </van-col>
    </van-row>

    <van-row class="jy">
      <van-row
        style="line-height: 2rem;position: relative;"
        class="tit"
      >
        <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
          <van-col :span="8" class="tit_tit">
            <span style="margin-left:10px;font-size:24px">{{lanse[3].name}}</span>
          </van-col>
          <van-col
            :span="12"
            style="text-align: right;color:rgba(153,153,153,1);"
            class="tit_rig"
			 @click="moreNewsList(lanse[3].id,lanse[3].name)"
          >更多></van-col>
        </van-row>
        <van-row class="wrapper">
          <div class="list">
            <van-row v-for="item in Jiuye" :key="item.id" class="list-item"  @click="toNewPages(item.id,item.siteId)">
              <van-col :span="1" style="margin-top:10px">
                <i class="list-item-point">·</i>
              </van-col>
              <van-col :span="16">
                <p class="van-ellipsis">{{item.title}}</p>
              </van-col>
              <van-col :span="4" :offset="1" style="font-size:12px">
                <p>[{{item.modifyTime | formatDate}}]</p>
              </van-col>
            </van-row>
          </div>
        </van-row>
        <van-row>
          <div :span="24" class="jiangeBg" />
        </van-row>
      </van-row>

    </van-row>

    <van-row class="jy">
      <van-row
        style="line-height: 2rem;position: relative;"
        class="tit"
      >
        <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
          <van-col :span="8" class="tit_tit">
            <span style="margin-left:10px;font-size:24px">{{lanse[4].name}}</span>
          </van-col>
          <van-col
            :span="12"
            style="text-align: right;color:rgba(153,153,153,1);"
            class="tit_rig"
			 @click="moreNewsList(lanse[4].id,lanse[4].name)"
          >更多></van-col>
        </van-row>
        <van-row class="wrapper">
          <div class="list">
            <van-row v-for="item in fudao" :key="item.id" class="list-item"  @click="toNewPages(item.id,item.siteId)">
              <van-col :span="1" style="margin-top:10px">
                <i class="list-item-point">·</i>
              </van-col>
              <van-col :span="16">
                <p class="van-ellipsis">{{item.title}}</p>
              </van-col>
              <van-col :span="4" :offset="1" style="font-size:12px">
                <p>[{{item.modifyTime | formatDate}}]</p>
              </van-col>
            </van-row>
          </div>
        </van-row>
        <van-row>
          <div :span="24" class="jiangeBg" />
        </van-row>
      </van-row>

    </van-row>
    <van-row>
      <div style="background:rgba(249,249,249,1);width:100VW;height:20px" />
    </van-row>
    <van-row
      v-for="item in 1"
      :key="item"
      style="line-height: 2rem;position: relative;"
      class="tit"
    >
      <van-row style="border-bottom: 2px solid rgba(67,136,207,1);margin-bottom:10px">
        <van-col :span="8" class="tit_tit">
          <span style="margin-left:10px;font-size:24px">{{lanse[2].name}}</span>
        </van-col>
        <van-col
          :span="12"
          style="text-align: right;color:rgba(153,153,153,1);"
          class="tit_rig"
        >更多></van-col>
      </van-row>
      <van-row class="wrapper">
        <van-swipe :width="200">
          <van-swipe-item>
            <div style="padding: 0 10px">
              <img src="@/assets/home/zhuant1.png">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="padding: 0 10px">
              <img src="@/assets/home/zhuant2.png">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="padding: 0 10px">
              <img src="@/assets/home/zhuant3.png">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div style="padding: 0 10px">
              <img src="@/assets/home/zhuant4.png">
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-row>
    </van-row>
  </div>
</template>

<script>
  import { formatDate } from '@/common/date.js'; // 在组件中引用date.js
  import { serverip as ip } from '@/utils/serverIP'
export default {
  components: {},
  data() {
    return {
		lanse:[],
		news:[],
		zhaosheng:[],
		fudao:[],
		Jiuye:[],
	}
  },
  filters: {
     // 时间格式自定义 只需把字符串里面的改成自己所需的格式
     formatDate(time) {
       let date = new Date(time);
       return formatDate(date, 'yyyy/MM/dd');
     }
   },
  mounted() {
  	this.getList();

  },
  methods: {
	  moreNewsList(id,name){//栏目详情列表
	  		this.$router.push({
	  		          path:'/common/commonlist2',
	  		          query: {
	  		            id: id,
	  					title:name
	  		          }
	  		        })  
	  },
  		getList(){
  				  this.axios.post(ip+'/unauth/column/selectChild',
  					{id:this.$route.query.id}
  				  ).then((res)=>{
  					  this.lanse=res.data.data
					  this.getNews();
					  this.getZhaosheng();
					  this.getFudao();
					  this.getJiuye();
					   console.log('蓝色：',this.lanse)
  				  })
  		},
		getNews(){ //获取栏目 新闻列表
				  this.axios.post(ip+'/unauth/news/selectList',
					{columnId:this.lanse[0].id}
				  ).then((res)=>{
					  this.news=res.data.data.data
					   console.log('新闻列表：',this.news)
				  })
		},
		getZhaosheng(){ //获取栏目 招生信息
				  this.axios.post(ip+'/unauth/news/selectList',
					{columnId:this.lanse[1].id}
				  ).then((res)=>{
					  this.zhaosheng=res.data.data.data
					   // console.log(this.zhaosheng)
				  })
		},
		getFudao(){ //获取栏目 就业辅导
				  this.axios.post(ip+'/unauth/news/selectList',
					{columnId:this.lanse[4].id}
				  ).then((res)=>{
					  this.fudao=res.data.data.data
					   // console.log(this.fudao)
				  })
		},
		getJiuye(){ //获取栏目 "就业政策"
				  this.axios.post(ip+'/unauth/news/selectList',
					{columnId:this.lanse[3].id}
				  ).then((res)=>{
					  this.Jiuye=res.data.data.data
					   console.log(this.Jiuye)
				  })
		},
		//跳转到新闻内页
		toNewPages(id,siteId){
		this.$router.push({
		          path: '/Details',
		          query: {
		            id: id,
					siteId:siteId
		          }
		        })
		  },
		
  }
}
</script>

<style lang="scss" scoped>
%box-list {
  padding: 0.5rem 0;
  height: 100%;
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
  height: 100%;
}
.home-container {
  padding: 1.5% 1.5%;
  .news-list {
    .first-news {
      // padding-right: 15px;
      background: rgba(255, 255, 255, 1);
      &-title {
        background: rgba(249, 249, 249, 1);
        line-height: 1.4rem;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .others-news {
      //   padding-top: 22px !important;
      background: rgba(249, 249, 249, 1);
      padding: 0rem 0.5rem;

      &-item {
        a {
          color: rgba(51, 51, 51, 1);
          font-weight: 400;
        }
        &-date {
          color: rgba(153, 153, 153, 1);
          margin-bottom: 0px;
        }
      }
    }
  }

  // 招生信息   更多入口
  .zsxx {
    margin: 1.5% -2%;
    width:100VW;
    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/zhaos.png);
    }
    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/gengd.png);
    }
  }
}

.xwzx {
  &-newsList {
    &-item {
      &-dataTime {
        // width:120px;
        // height:100px;
        width: 8rem;
        height: 7rem;
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
}
.jy {
  margin-top: 20px;
  &-left {
    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/jiuye.png);
    }
    .jys {
      font-size: 20px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .wrapper {
      @extend %box-list;
      .list {
        margin-top: 1rem;
        &-item {
          margin: 2rem 0rem;

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
  &-right {
    padding-left: 15px;
    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/jiuyefd.png);
    }
    .jys {
      font-size: 20px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .wrapper {
      @extend %box-list;
      .list {
        margin-top: 1rem;
        &-item {
          margin: 2rem 0rem;

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
}
</style>
