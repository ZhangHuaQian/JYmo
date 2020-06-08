<template>
  <div class="home-container">
    <van-divider />
    <van-row v-for="item in list" :key="item.id" @click="toDetailPage(item.id,item.siteId)">

      <van-row gutter="24">
        <van-col :span="1">
          <div class="ht" />
        </van-col>
        <van-col class="nr" :span="14">
          <p class="van-ellipsis">{{item.title}}</p>
        </van-col>
        <van-col class="time" :span="8">
          <p class="van-multi-ellipsis--l2">{{ item.modifyTime | formatDate }} </p>
        </van-col>
      </van-row>
      <van-divider dashed />

    </van-row>
    <van-pagination v-model="currentPage" :page-count="12" mode="simple" @change="getlist()"/>
  </div>
</template>

<script>
import { formatDate } from '@/common/date.js'; // 在组件中引用date.js
import { serverip as ip } from '@/utils/serverIP'
	export default {
	  data() {
	    return {
			currentPage:1,
list:[],
listLanse:[],
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
		  this.getlist()
this.getId()
	  },
	  methods: {
		  toDetailPage(id,siteId){//跳转至详情页
		  		this.$router.push({
		  		          path:'/secondaryHome/details',
		  		          query: {
		  		            id: id,
		  						siteId:siteId
		  		          }
		  		        })
		  },
		  getlist(){//根据栏目id获取子栏目列表
		  console.log(this.$route.query.id,this.currentPage,'1111')
			  this.axios.post(ip+'/unauth/news/selectList',
			  		{columnId:this.$route.query.id,pageNum:this.currentPage}
			    ).then((res)=>{
			  			 console.log('列表:',res)
			  			  this.list=res.data.data.data
			  			  console.log('列表:',this.list)
						  // this.getlanse()
			  		  })
		  },
		  // getlanse(){//根据栏目id获取子栏目列表
		  // 			  this.axios.post('/gxjcxy/unauth/column/selectChild',
		  // 			  		{id:this.list[0].id}
		  // 			    ).then((res)=>{
		  // 			  			 console.log('蓝色的：',res)
		  // 			  			  this.listLanse=res.data.data  
		  // 			  			  // console.log(this.list)
		  // 			  		  })
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

img {
  width: 100%;
  height: 100%;
}

.home-container {
  padding: 1.5% 3%;
  .ht {
    width:5px;
height:20px;
background:rgba(120,139,175,1);
border-radius:9px;

  }
  .nr {
    p{
       margin: 0;
    font-size: 18;
    // padding:0
    }

  }
  .time {
    p{
       margin: 0;
    font-size: 18;
    }
  }

}
</style>
