<template>
  <div class="home-container">
    <div class="box1" style="position: relative;">
      <!-- <a style="position: absolute;right: 18.5%;top: 7.5%;z-index: 3;">更多></a>
		<i class="icon" />
		<el-tabs v-model="activeName">
		    <el-tab-pane label="部门动态" name="first">
				<el-row :gutter="20">
					<el-col :xs="12" :md="15">
						<el-row class="banner">
						  <swiper class="swiper" :options="swiperOption" style="width: 100%;">
						    <swiper-slide v-for="item in 4" :key="item" style="text-align: right;position: relative;">
						      <img src="@/assets/departmentHome/bmzhut.png">
						      <p class="banner-title">办公室党支部组织开展2019年春季学期第一次业务学习</p>
						    </swiper-slide>
						    <div slot="pagination" class="swiper-pagination" />
						  </swiper>
						</el-row>
					</el-col>
					<el-col :xs="12" :md="9">
						<el-row class="yanjiu-item" v-for="item in 5" :key="item">
							<el-row>
								<el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
									<div class="childDiv childDiv1">
										<span class="span1">08</span>
									</div>
									<div class="childDiv childDiv2">
										<span class="span2">2020-04</span>
									</div>
								</el-col>
								<el-col class="yanjiu-item-content" :xs="20" :md="20">
									<div>办公室党支部前往田阳县桥马村开展扶贫走访工作(图文)</div>
									<span>根据学校工作安排，办公室党支部唐魁彪、傅亮彩、陈东娥办公室党支</span>
								</el-col>
							</el-row>
							<el-divider />
						</el-row>
					</el-col>
				</el-row>
			</el-tab-pane>
      </el-tabs>-->
      <van-row gutter="24">
        <van-col style="margin-left:-3%">
          <van-row style="line-height: 2rem;position: relative;" class="tit">
            <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
              <van-col :span="8" class="tit_tit">
                <span style="margin-left:20px">{{lanse[0].name}}</span>
              </van-col>
              <van-col
                :span="12"
                style="text-align: right;color:rgba(153,153,153,1);"
                class="tit_rig"
              >
                <a
                  @click="moreNewsList(lanse[0].id,lanse[0].name)"
                  style="position: absolute;right: 1.0%;z-index: 3;"
                >更多></a>
              </van-col>
            </van-row>
            <!-- <van-row class="wrapper" style="margin-top:20px;padding:10px">
              <div class="list">
                <van-col class="wrapper-item" :span="24">
                  <van-col :span="24">
                    <img src="@/assets/home/zhutu.png" />
                  </van-col>

                  <van-col style="display:block" :span="24">
                    <p
                      style="margin-top:-2%;margin-left:3%;font-size:18px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;"
                    >广西警察学院第一届工会会员代表大会第一次全体会议隆重召开</p>
                    <p
                      class="van-multi-ellipsis--l2"
                      style="margin-left:3%;font-size:14px;line-height: 1.5em;"
                    >广西警察学院长湖校区和仙葫校区铺面公开竞价结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示</p>
                    <van-row type="flex" justify="end">
                      <van-col span="8" style="font-size:12px;margin-right:20px">2019-12-24 14:45:57</van-col>
                    </van-row>
                  </van-col>
                </van-col>
                <van-col :span="24">
                  <van-divider dashed />
                </van-col>

                <van-row v-for="item in 6" :key="item" class="list-item">

                  <van-col
                    :span="2"
                    style="height:50px;"
                    type="flex"
                    justify="center"
                    align="center"
                  >
                    <div
                      style="margin-top:13px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
                    ></div>
                  </van-col>
                  <van-col :span="16" style="padding-top:0;padding-bottom:0">
                    <p class="van-ellipsis" style="margin: 0">广西警察学院长湖校区和仙葫校区铺面公开竞价结果公示呀呀呀呀呀呀呀呀...</p>
                  </van-col>
                  <van-col :span="4" :offset="1" style="font-size:12px">
                    <p style="margin: 0">[2019/12/23]</p>
                  </van-col>
                </van-row>
              </div>
            </van-row>-->
            <van-row class="tzgg-images" :gutter="24">
              <van-col
                v-for="item in listnews "
                :key="item.id"
                class="tzgg-images-item"
                :span="12"
                :md="8"
                style="margin-top:20px;padding:10px"
				@click="toDetailPage(item.id,item.siteId)"
              >
			  <div style="border: 1px solid #C1C1C1;width: 100%;height: 35vw;">
				 <img :src="item.image">  
			  </div>
               
                <van-row class="tzgg-images-item-content">
                  <h4
                    class="tzgg-images-item-content-title van-ellipsis"
                    style="font-size:18px"
                  >{{item.title}}</h4>
                  <div
                    class="tzgg-images-item-content-introduction van-multi-ellipsis--l2"
                    style="font-size:12px;height: 5.4375rem;"
                  >{{item.subTitle}}</div>
                </van-row>
              </van-col>
            </van-row>
          </van-row>
        </van-col>
      </van-row>
      <van-row gutter="24">
        <van-col style="margin-left:-3%">
          <van-row style="line-height: 2rem;position: relative;" class="tit">
            <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
              <van-col :span="8" class="tit_tit">
                <span style="margin-left:20px">{{lanse[1].name}}</span>
              </van-col>
              <van-col
                :span="12"
                style="text-align: right;color:rgba(153,153,153,1);"
                class="tit_rig"
              >
                <a
                  @click="moreNewsList(lanse[1].id,lanse[1].name)"
                  style="position: absolute;right: 1.0%;z-index: 3;"
                >更多></a>
              </van-col>
            </van-row>
            <van-row class="wrapper" style="margin-top:20px;padding:10px">
              <div class="list">
                <van-row v-for="item in listnewsSec" :key="item.id" class="list-item" @click="toDetailPage(item.id,item.siteId)">
                  <van-col
                    :span="2"
                    style="height:50px;"
                    type="flex"
                    justify="center"
                    align="center"
                  >
                    <div
                      style="margin-top:13px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
                    />
                  </van-col>
                  <van-col :span="16" style="padding-top:0;padding-bottom:0">
                    <p class="van-ellipsis" style="margin: 0">{{item.title}}</p>
                  </van-col>
                  <van-col :span="4" :offset="1" style="font-size:12px">
                    <p style="margin: 0">[{{ item.modifyTime | formatDate }}]</p>
                  </van-col>
                </van-row>
              </div>
            </van-row>
          </van-row>
        </van-col>
      </van-row>

      <van-row gutter="24">
        <van-col style="margin-left:-3%">
          <van-row style="line-height: 2rem;position: relative;" class="tit">
            <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
              <van-col :span="8" class="tit_tit">
                <span style="margin-left:20px">{{lanse[2].name}}</span>
              </van-col>
              <van-col
                :span="12"
                style="text-align: right;color:rgba(153,153,153,1);"
                class="tit_rig"
              >
                <a
                  @click="moreNewsList(lanse[2].id,lanse[2].name)"
                  style="position: absolute;right: 1.0%;z-index: 3;"
                >更多></a>
              </van-col>
            </van-row>
            <van-row class="wrapper" style="margin-top:20px;padding:10px">
              <div class="list">
                <van-col v-for="item in listnewsThr" :key="item.id" class="wrapper-item" :span="24" style="margin-top:10px" @click="toDetailPage(item.id,item.siteId)">
                  <!-- <van-col :span="24">
                    <img src="@/assets/home/zhutu.png" />
                  </van-col>-->

                  <!-- <van-col style="display:block" :span="24">
                    <p
                      style="margin-top:-2%;margin-left:3%;font-size:18px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;"
                    >广西警察学院第一届工会会员代表大会第一次全体会议隆重召开</p>
                    <p
                      class="van-multi-ellipsis--l2"
                      style="margin-left:3%;font-size:14px;line-height: 1.5em;"
                    >广西警察学院长湖校区和仙葫校区铺面公开竞价结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示结果公示</p>
                    <van-row type="flex" justify="end">
                      <van-col span="8" style="font-size:12px;margin-right:20px">2019-12-24 14:45:57</van-col>
                    </van-row>
                  </van-col>-->

                  <van-row style="background:rgba(238,238,238,1);height:8vh">
                    <van-col :span="4" style="margin:8px">
                      <van-row style="" :span="22">
                        <van-col :span="24" style="font-size:14px;line-height: 1.5em;" :offset="10">26</van-col>
                      </van-row>
                      <van-row style="border-top:1px solid #999;" :span="22">
                        <van-col :span="24" style="font-size:14px;line-height: 1.5em;" :offset="2">2020/02</van-col>
                      </van-row>
                    </van-col>
                    <van-col :span="17" style="border-left:2px solid rgba(50,93,171,1);height:60%;margin-top:10px;padding-left:15px">
                      <p :span="24" class="van-ellipsis" style="line-height: 1em;margin:0;font-size:20px;font-weight:400">{{item.subTitle}}</p>
                      <p :span="24" class="van-ellipsis" style="line-height: 1em;margin:0;padding-top:4px">{{item.title}}</p>
                    </van-col>
                  </van-row>
                </van-col>
                <van-col :span="24">
                  <van-divider dashed />
                </van-col>

              </div>
            </van-row>
          </van-row>
        </van-col>
      </van-row>
      <van-row gutter="24">
        <van-col style="margin-left:-3%">
          <van-row style="line-height: 2rem;position: relative;" class="tit">
            <van-row style="border-bottom: 2px solid rgba(67,136,207,1);">
              <van-col :span="8" class="tit_tit">
                <span style="margin-left:20px">{{lanse[3].name}}</span>
              </van-col>
              <van-col
                :span="12"
                style="text-align: right;color:rgba(153,153,153,1);"
                class="tit_rig"
				@click="moreNewsList(lanse[3].id,lanse[3].name)"
              >
                <a
                  
                  style="position: absolute;right: 1.0%;z-index: 3;"
                >更多></a>
              </van-col>
            </van-row>
            <van-row class="wrapper" style="margin-top:20px;padding:10px">
              <div class="list">
                <van-row v-for="item in listnewsFour" :key="item.id" class="list-item" @click="toDetailPage(item.id,item.siteId)">
                  <van-col
                    :span="2"
                    style="height:50px;"
                    type="flex"
                    justify="center"
                    align="center"
                  >
                    <div
                      style="margin-top:13px;width:8px;height:8px;background:rgba(139,183,226,1);border-radius:50%;"
                    />
                  </van-col>
                  <van-col :span="16" style="padding-top:0;padding-bottom:0">
                    <p class="van-ellipsis" style="margin: 0">{{item.title}}</p>
                  </van-col>
                  <van-col :span="4" :offset="1" style="font-size:12px">
                    <p style="margin: 0">[{{ item.modifyTime | formatDate }}]</p>
                  </van-col>
                </van-row>
              </div>
            </van-row>
          </van-row>
        </van-col>
      </van-row>
    </div>

    <van-col>
      <div style="width:100VW;height:20px;background:#f9f9f9;" />
    </van-col>
    <div class="box2" style>
      <el-row :gutter="24">
        <!-- <el-col :xs="24" :md="8" class="gzgg">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;">
              <i class="gzgg-icon" />
            </el-col>
            <el-col :xs="16" :md="19">
              <h4>通知公告</h4>
            </el-col>
            <el-col :xs="6" :md="3">
              <p class="gengduo">更多></p>
            </el-col>
          </el-row>
          <el-row class="gzgg-list">
            <el-row v-for="item in 5" :key="item" class="gzgg-list-item">
              <el-col :span="4" class="gzgg-list-item-date">
                <el-row class="gzgg-list-item-date-day">10</el-row>
                <el-row class="gzgg-list-item-date-year">2020.11</el-row>
              </el-col>
              <el-col :span="2" style="text-align: center;line-height: 3.5rem;">
                <el-divider direction="vertical" class="shuxian" />
              </el-col>
              <el-col :span="18" class="gzgg-list-item-content">
                <el-row class="gzgg-list-item-content-introduction">国务院办公厅关于印发2014年政府信息公开工作要 点的通知</el-row>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="gzzd">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;">
              <i class="gzzd-icon" />
            </el-col>
            <el-col :xs="16" :md="17">
              <h4>规章制度</h4>
            </el-col>
            <el-col :xs="6" :md="5">
              <p class="gengduo">更多></p>
            </el-col>
          </el-row>
          <el-row class="gzzd-list">
            <el-row v-for="item in 5" :key="item" class="gzzd-list-item">
              <el-col :span="2">
                <div class="gzzd-list-item-HX" />
              </el-col>
              <el-col :span="22" class="gzzd-list-item-content">
                <el-row class="gzzd-list-item-content-title">广西警官高等专科学校关于国有资产管理的规定</el-row>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="gzzz">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;">
              <i class="gzzz-icon" />
            </el-col>
            <el-col :xs="16" :md="19">
              <h4>工作职责</h4>
            </el-col>
            <el-col :xs="6" :md="3">
              <p class="gengduo">更多></p>
            </el-col>
          </el-row>
          <el-row class="gzzz-list">
            <el-row v-for="item in 5" :key="item" class="gzzz-list-item">
              <el-col :span="2">
                <div class="gzzz-list-item-HX" />
              </el-col>
              <el-col :span="18" class="gzzz-list-item-content">
                <el-row class="gzzz-list-item-content-title">广西警察学院2019年度信息公开工公开</el-row>
              </el-col>
            </el-row>
          </el-row>
        </el-col>-->

        <van-row
          style="border-bottom:2px solid rgba(67,136,207,1);width:100Vw;margin-left:-1.6%;margin-top:10px"
        >
          <van-col :span="8" class="tit_tit">
            <span style="margin-left:20px;font-size:17px;line-height:2em">{{lanse[4].name}}</span>
          </van-col>

          <van-col
            :md="12"
            :span="11"
            style="text-align: right;color:rgba(153,153,153,1);"
            class="tit_rig"
			@click="moreNewsList(lanse[4].id,lanse[4].name)"
          >更多></van-col>
        </van-row>
        <van-row
          class="tzgg-images"
          :gutter="24"
          style="background:rgba(183,218,253,1);width:100VW;margin-left:-1.6%;padding-bottom:30px"
        >
          <van-col
            v-for="item in listnewsFire"
            :key="item.id"
            class="tzgg-images-item"
            :span="11"
            :md="8"
            style="margin-top:20px;margin-left:11px;margin-riglht:5px;background:rgba(255,255,255,1);padding:12px"
			@click="toDetailPage(item.id,item.siteId)"
          >
            <img :src="item.image">
            <van-row class="tzgg-images-item-content">
              <h4
                class="tzgg-images-item-content-title van-ellipsis"
                style="font-size:18px"
              >{{item.title}}</h4>
              <p
                class="tzgg-images-item-content-introduction van-multi-ellipsis--l2"
                style="font-size:12px"
              >{{item.subTitle}}</p>
            </van-row>
          </van-col>
        </van-row>
      </el-row>
    </div>
    <!-- <div class="box3">
      <el-row class="bmfc">
        <el-row>
          <el-col :xs="1" :md="1" style="text-align: right;line-height: 2.5rem;">
            <i class="bmfc-icon" />
          </el-col>
          <el-col :xs="16" :md="21">
            <h4>部门风采</h4>
          </el-col>
          <el-col :xs="7" :md="2">
            <p class="gengduo">更多></p>
          </el-col>
        </el-row>
        <el-row class="bmfc-images" :gutter="20">
          <el-col class="bmfc-images-item" :xs="24" :md="6">
            <img src="@/assets/departmentHome/bgt5.png" />
            <h4 class="bmfc-images-item-title">侦查系禁毒专业教学团队合影</h4>
          </el-col>
          <el-col class="bmfc-images-item" :xs="24" :md="6">
            <img src="@/assets/departmentHome/bgt6.png" />
            <h4 class="bmfc-images-item-title">侦查系学生参加2013年两会一节安保...</h4>
          </el-col>
          <el-col class="bmfc-images-item" :xs="24" :md="6">
            <img src="@/assets/departmentHome/bgt7.png" />
            <h4 class="bmfc-images-item-title">谭超英、万婕老师参加第二届全区公...</h4>
          </el-col>
          <el-col class="bmfc-images-item" :xs="24" :md="6">
            <img src="@/assets/departmentHome/bgt8.png" />
            <h4 class="bmfc-images-item-title">侦查系教师参加全区公安机关教学训...</h4>
          </el-col>
        </el-row>
      </el-row>
    </div>-->
  </div>
</template>

<script>
import { formatDate } from '@/common/date.js'; // 在组件中引用date.js
import Vue from 'vue'
import { serverip as ip } from '@/utils/serverIP'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)
export default {
  data() {
    return {
		srt:'',
		list:[],
		lanse:[],
		listnews:[],
		listnewsSec:[],
		listnewsThr:[],
		listnewsFour:[],
		listnewsFire:[],
		listnewsSix:[],
      activeName: 'first',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 30000
        }
      }
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
	  moreNewsList(id,name){//栏目详情列表
	  		this.$router.push({
	  		          path:'/common/commonlistSeven',
	  		          query: {
	  		            id: id,
	  					title:name
	  		          }
	  		        })  
	  },
	  toDetailPage(id,siteId){//跳转至详情页
	  		this.$router.push({
	  		          path:'/secondaryHome/details',
	  		          query: {
	  		            id: id,
						siteId:siteId
	  		          }
	  		        })
	  },
  	getLanmu(){//获取栏目列表
  				  		  this.axios.post(ip+'/unauth/column/selectList',
  				  			{siteId:this.$route.query.id}
  				  		  ).then((res)=>{
  				  			  this.list=res.data.data
							  this.getLanse()
  				  			   // console.log(res)
  				  		  })
  	},
	getLanse(){ //获取内页栏目
		this.axios.post(ip+'/unauth/column/selectChild',
		{id:this.list[0].id}
  				  		  ).then((res)=>{
							  console.log(res)
  				  			   this.lanse=res.data.data
							   console.log('蓝色:',this.lanse)
							   this.getList()
							   this.getListSec()
							   this.getListThr()
							   this.getListFour()
							   this.getListFire()
  				  			   
  				  		  })
	},
	getList(){ //获取单页列表0
		this.axios.post(ip+'/unauth/news/selectList',
		{columnId:this.lanse[0].id}
				  		  ).then((res)=>{
							  this.listnews = res.data.data.data
							  console.log('第0条',this.listnews)
		 })
	},
	getListSec(){ //获取单页列表1
		this.axios.post(ip+'/unauth/news/selectList',
		{columnId:this.lanse[1].id}
				  		  ).then((res)=>{
							  this.listnewsSec = res.data.data.data
							  console.log('第一条',this.listnewsSec)
		 })
	},
	getListThr(){ //获取单页列表2
		this.axios.post(ip+'/unauth/news/selectList',
		{columnId:this.lanse[2].id}
				  		  ).then((res)=>{
							  this.listnewsThr = res.data.data.data
							  console.log('第二条',this.listnewsThr)
		 })
	},
	getListFour(){ //获取单页列表3
		this.axios.post(ip+'/unauth/news/selectList',
		{columnId:this.lanse[3].id}
				  		  ).then((res)=>{
							  this.listnewsFour = res.data.data.data
							  console.log('第三条',this.listnewsFour)
		 })
	},
	getListFire(){ //获取单页列表4
		this.axios.post(ip+'/unauth/news/selectList',
		{columnId:this.lanse[4].id}
				  		  ).then((res)=>{
							  this.listnewsFire = res.data.data.data
							  console.log('第四条',this.listnewsFire)
		 })
	},
  }
}
</script>

<style lang="scss" scoped>
/deep/ .swiper-pagination-bullet {
  background: #ffffff;
}
/deep/ .swiper-pagination-bullet-active {
  background: #cda24f;
}
/deep/ .el-tabs__item {
  font-size: 18px;
  font-weight: bold;
}
/deep/ .el-tabs__active-bar {
  width: 80px;
  transform: translateX(0) !important;
}

%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  margin: 1.15rem auto;
}
%box {
  padding: 1.5% 4.5%;
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

p {
  &.gengduo {
    line-height: 2rem;
    font-size: 14px;
    color: #999999;
    text-align: right;
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
img {
  width: 100%;
  height: 100%;
}
.home-container {
  .box1 {
    min-height: 20rem;
    @extend %box;

    .icon {
      @extend %icon;
      position: absolute;
      margin: 0.7rem 0;
      background-image: url(../../assets/departmentHome/bmdt.png);
    }
    /deep/ .el-tabs__item {
      padding-left: 1.8rem;
    }
    .banner {
      .swiper {
        font-size: 0;
        &-pagination {
          padding-right: 2.5%;
          text-align: right;
        }
      }
      &-title {
        margin: 0;
        font-size: 1rem;
        width: 98%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        line-height: 2rem;
        padding: 0.625rem;
        background-color: #0000005a;
        color: white;
        position: absolute;
        bottom: 0;
      }
    }

    .yanjiu-item {
      .el-divider--horizontal {
        margin: 14px 0;
      }
      &-dataTime {
        width: 52px;
        height: 52px;
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
        width: 88%;
        padding-left: 0.5rem;
        position: relative;
        div {
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
          font-size: 18px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
  .box2 {
    @extend %box;
    padding-top: 0;
    padding-bottom: 0;

    min-height: 32rem;
    // background-color: #c4ddfb;
    //通知公告
    .gzgg {
      margin-top: 1.25rem;
      color: #005bac;
      &-icon {
        @extend %icon;
        background-image: url(../../assets/departmentHome/gzzd.png);
      }
      .gengduo {
        @extend .gengduo;
        font-weight: 600;
        color: #005bac !important;
      }

      &-list {
        &-item {
          margin: 0.75rem 0px;
          background-color: white;
          border-left: 4px solid #eea200;
          min-height: 4rem;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          &-date {
            padding: 0.75rem 0rem;
            &-day {
              color: #666666;
              font-size: 18px;
              text-align: center;
              margin-right: 0.6rem;
            }
            &-year {
              color: #666666;
              font-size: 14px;
            }
          }
          &-content {
            margin: 0.6rem 0;
            &-introduction {
              color: #666666;
              width: 100%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
    //规章制度
    .gzzd {
      margin-top: 1.25rem;
      color: #005bac;
      &-icon {
        @extend %icon;
        background-image: url(../../assets/departmentHome/gzzd.png);
      }
      .gengduo {
        @extend .gengduo;
        font-weight: 600;
        color: #005bac !important;
      }

      &-list {
        &-item {
          margin: 0.75rem 0px;
          background-color: white;
          border-left: 4px solid #eea200;
          min-height: 4rem;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          &-HX {
            background-color: #005bac;
            border-radius: 5px;
            width: 50%;
            height: 0.3rem;
            margin: 1rem auto;
            margin-top: 1.6rem;
            margin-left: 0.2rem;
          }
          &-content {
            &-title {
              color: #333333;
              margin: 1.3rem 0rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    //工作职责
    .gzzz {
      margin-top: 1.25rem;
      color: #005bac;
      &-icon {
        @extend %icon;
        background-image: url(../../assets/departmentHome/gzzz.png);
      }
      .gengduo {
        @extend .gengduo;
        font-weight: 600;
        color: #005bac !important;
      }

      &-list {
        &-item {
          margin: 0.75rem 0px;
          background-color: white;
          border-left: 4px solid #eea200;
          min-height: 4rem;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          &-HX {
            background-color: #005bac;
            border-radius: 5px;
            width: 50%;
            height: 0.3rem;
            margin: 1rem auto;
            margin-top: 1.6rem;
            margin-left: 0.2rem;
          }
          &-content {
            &-title {
              color: #333333;
              margin: 1.3rem 0rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  .box3 {
    @extend %box;
    min-height: 20rem;
    .bmfc {
      &-icon {
        @extend %icon;
        background-image: url(../../assets/departmentHome/bmgk.png);
      }
      &-images {
        &-item {
          &-title {
            margin: 0;
            font-size: 14px;
            padding: 0.625rem 0rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .hengxian {
    margin: 0.5rem 0rem;
  }
  .shuxian {
    height: 2rem;
  }
}
</style>
