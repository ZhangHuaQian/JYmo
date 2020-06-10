<template>
  <div>
    <el-row />
    <el-row :gutter="40" class="home-container">
      <el-col :xs="24" :md="6" class="content-left">
        <el-row>
          <el-row class="content-left-bangyang" style="position: relative;">
            <span>学校概况</span>
            <el-col style="font-size: 0;"><img src="../../assets/common/xx.png" alt=""></el-col>
          </el-row>
          <el-row class="content-left-list">
            <el-row class="content-left-list-li active" v-for="(item,index) in list" :key="index" >
              <p @click="showItems(item.id)">{{item.name}}</p>
            </el-row>
          </el-row>
        </el-row>
      </el-col>

      <el-col :xs="24" :md="16" class="common-right">
        <el-row :gutter="40">
          <el-row class="common-right-weizhi">
            <p>当前位置：<span><router-link to="/home/index">首页</router-link></span>>><span>学校概况</span></p>
          </el-row>
          <el-row v-for="item in 5" :key="item" :gutter="20" class="common-right-info">
            <el-row :gutter="20">
              <el-col :xs="4" :md="5"><img src="../../assets/common/xqt1.png" alt=""></el-col>
              <el-col :xs="20" :md="19" class="common-right-info-content">
                <div>学校开展看望慰问离退休老同志活动</div>
                <p>2020年新春来临之际，学校开展新春走访慰问活动，校领导覃干超、张军等在有关部门负责人的陪同下走访慰问了离退休老同志</p>
                <span>2020.02.26</span>
              </el-col>
            </el-row>
            <el-divider />
          </el-row>
          <el-row class="pagination" style="text-align: center;margin:2rem 0">
            <el-pagination
              prev-text="上一页"
              next-text="下一页"
              background
              layout="prev, pager, next"
              :total="50"
            />
          </el-row>

        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { serverip as ip } from '@/utils/serverIP'
	export default {
	  data() {
	    return {
		  list:[],

	    }
	  },
	  mounted() {
	  	this.getList();
		this.getListsec()
	  },
	  methods: {
		getList(){
				  this.axios.post(ip+'/unauth/column/selectChild',
					{id:this.$route.query.id}
				  ).then((res)=>{
					 console.log(res)
					  this.list=res.data.data
					  // console.log(this.list)
				  })
		},
		getListsec(){
				  this.axios.post(ip+'/unauth/news/selectList',
					{columnId:45}
				  ).then((res)=>{
					 console.log(res)
					  // this.list=res.data.data
					  // console.log(this.list)
				  })
		},
		showItems(a){
			this.axios.post(ip+'/unauth/news/selectList',
								{columnId:a}
			).then((res)=>{
								 console.log(res)
								  // this.list=res.data.data
								  // console.log(this.list)
			})
		},
	  }
	}
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
		height: 100%;
	}

	.home-container {
		padding: 1.5% 18.5%;
		background: rgba(249, 249, 249, 1);

		.content-left {
			&-bangyang {
				font-size: 24px;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);

				span {
					position: absolute;
					top: 50%;
					margin-top: -13px;
					right: 54%;
				}
			}

			&-list {
				border: 1px solid #ccc;

				&-li {
					border-top: 1px solid #ccc;

					p {
						padding-left: 2.4rem;
					}
				}

				.active {
					color: #136BB9;
					background: #F3F6F9
				}

			}
		}

		.common-right {
				background:rgba(255,255,255,1);
			    box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.09);
			&-weizhi{
			    background:rgba(249,249,249,1);
			    box-shadow:0px -3px 0px 0px rgba(7,81,154,1);
			    border-bottom: 1px solid #ccc;
			    p{
			        margin-left: 1.6rem;
			    }

			}
			&-info{
				padding: 1.6rem 1.2rem 0 2rem;
				.el-divider--horizontal{
					margin-top: 26px;
					margin-bottom: 0px;
				}

				&-content{
					div{
						font-size:18px;
						color:rgba(51,51,51,1);
					}
					p{
						font-size:14px;
						color:rgba(80,80,80,1);
					}
					span{
						font-size:14px;
						color:rgba(153,153,153,1);
					}
				}
			}

		}
	}
</style>
