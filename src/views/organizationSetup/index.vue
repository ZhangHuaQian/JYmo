<template>
  <div class="home-container">
	  <!-- <van-col span="24" class="title"> <p> {{$route.query.name}} </p> </van-col> -->
<!--    <el-row class="current">
    </el-row> -->
    <el-row class="list">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="党政群团机构" name="first">
          <el-row >
			  <el-col  v-for="(item,index) in list" :key="index" :span="7" :offset="1"  v-if="index<17" 
			  style="height: 10vw;background: #E0EAF5;margin-bottom: 2vw;"
			  >
				  <div @click="toNewpage(item.id,item.name)" style="font-size: 0.75rem;color: #347ADA;line-height: 10vw;margin: 0 auto;text-align: center;">{{item.name}}</div>
				  </el-col>
 <!--           <el-col v-for="(item,index) in list" :key="index" :span="6" class="list-title-01" v-if="index<17">
              <img src="@/assets/common/diwen.png">
              <a @click="toNewpage(item.id)">{{item.name}}</a>
            </el-col> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="教学机构" name="first">
          <el-row>
			  <el-col  v-for="(item,index) in list" :key="index" :span="7" :offset="1"  v-if="index<32 && index>16"
			  style="height: 10vw;background: #E0EAF5;margin-bottom: 2vw;"
			  >
				  <div @click="toNewpages(item.id,item.name)" style="font-size: 0.75rem;color: #347ADA;line-height: 10vw;margin: 0 auto;text-align: center;">{{item.name}}</div>
				  </el-col>
<!--            <el-col v-for="(item,index) in list" :key="index" :span="6" class="list-title-01" v-if="index<32 && index>16">
              <img src="@/assets/common/diwen.png">
              <a @click="toNewpages(item.id)">{{item.name}}</a>
            </el-col> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="教辅机构" name="first">
          <el-row>
			  <el-col  v-for="(item,index) in list" :key="index" :span="7" :offset="1"  v-if="index<37 && index>31"
			  style="height: 10vw;background: #E0EAF5;margin-bottom: 2vw;"
			  >
				  <div @click="toNewpage(item.id,item.name)" style="font-size: 0.75rem;color: #347ADA;line-height: 10vw;margin: 0 auto;text-align: center;">{{item.name}}</div>
				  </el-col>
<!--            <el-col v-for="(item,index) in list" :key="index" :span="6" class="list-title-01" v-if="index<37 && index>31">
              <img src="@/assets/common/diwen.png">
              <a @click="toNewpage(item.id)">{{item.name}}</a>
            </el-col> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="科研机构" name="first">
          <el-row>
			  <el-col  v-for="(item,index) in list" :key="index" :span="7" :offset="1"  v-if="index>36"
			  style="height: 10vw;background: #E0EAF5;margin-bottom: 2vw;"
			  >
				  <div @click="toNewpages(item.id,item.name)" style="font-size: 0.75rem;color: #347ADA;line-height: 10vw;margin: 0 auto;text-align: center;">{{item.name}}</div>
				  </el-col>
<!--            <el-col v-for="(item,index) in list" :key="index" :span="6" class="list-title-01" v-if="index>36">
              <img src="@/assets/common/diwen.png">
              <a @click="toNewpages(item.id)">{{item.name}}</a>
            </el-col> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import { serverip as ip } from '@/utils/serverIP'
export default {
	
	    data() {
	      return {
			  list:[],
			activeName: 'first',
			name: ""
	      }
	    },
  mounted() {
  	this.getList()
  },
  methods: {
	  getList(){
		  this.axios.post(ip+'/unauth/site/selectAll',
    // {columnId:this.id}
		  ).then((res)=>{
     // console.log(res)
      this.list=res.data.data
      // console.log(this.list)
		  })
	  },
	  //跳转到新页面
	  toNewpage(id,name){
		  this.$router.push({
		            path: '/departmentHome',
		            query: {
					  id: id,
					  name:name
		            }
		          })
	  },
	  toNewpages(id,name){
		  console.log(id,name,'college')
	  		  this.$router.push({
	  		            path: '/college',
	  		            query: {
							id: id,
							name:name
	  		            }
	  		          })
	  }
  }
	  }
</script>

<style lang="scss" scoped>
	/deep/ .el-tabs__nav{
		background: #4B93DD;
		border-radius:0 !important;
	}
	/deep/ .el-tabs__item{
		color: #fff;
	}
	.el-tabs{
		padding: 1.5rem 3rem 1.5rem 1.5rem;
	}
	.home-container{
		
		.current{
			margin-bottom: 1rem;
		}
		.list{
			background:rgba(255,255,255,1);
			box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.09);
			&-title{
				&-01{
					position: relative;
					margin: 10px 0;
					a{
						position: absolute;
						left: 6%;
						top: 50%;
						margin-top: -9px;
						font-size:14px;
						color: #347ADA;
					}
				}

			}
		}

	}

</style>
