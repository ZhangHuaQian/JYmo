<template>
  <!-- 学校概况↓ -->
  <van-row>
    <van-col span="24" class="title">{{name}}</van-col>
    <!-- <van-col span="24" class="item"  @click="toDetailPage(list[0].id)">{{list[0].name}}</van-col> -->
    <van-col
      span="24"
      class="item"
      v-for="item in list"
      :key="item.id"
      @click="toListPage(item.id,item.name)"
    >{{item.name}}</van-col>
  </van-row>
  <!-- 学校概况↑ -->
</template>

<script>
import { serverip as ip } from "@/utils/serverIP";
export default {
  components: {},
  data() {
    return {
      list: [],
      name: ""
    };
  },
  filters: {
    // 时间格式自定义 只需把字符串里面的改成自己所需的格式
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy/MM/dd");
    }
  },
//   created() {
//     this.getTitle();
//   },
  updated(){
	  this.getTitle()
  },
  mounted() {
    this.getTitle();
  },
  methods: {
    getTitle() {
		console.log('出发了')
      this.axios
        .post(ip + "/unauth/column/selectChild", { id: this.$route.query.id })
        .then(res => {
          this.list = res.data.data;
          console.log("列表:", this.list);
          this.name = this.$route.query.name;
          console.log(this.name);
        });
    },
    toListPage(id, name) {
      //跳转至列表页
      this.$router.push({
        path: "/common/commonlist2",
        query: {
          id: id,
          name: name
        }
      });
    },
    toDetailPage(id) {
      //跳转至详情页
      this.$router.push({
        path: "/secondaryHome/details",
        query: {
          id: id
        }
      });
    }
    // getList(){
    // 		   this.axios.post('/gxjcxy/unauth/column/selectChild',
    // 		   		{id:this.title[0].id}
    // 		     ).then((res)=>{
    // 		   			  this.list=res.data.data
    // 		   			  console.log('列表',this.list)
    // 		   		  })
    // },
  }
};
</script>

<style scoped>
.title {
  margin-top: 1rem;
  text-align: center;
  background: #4388cf;
  line-height: 2.5rem;
  color: white;
}
.item {
  background: white;
  padding-left: 1rem;
  line-height: 2rem;
  border-bottom: 1px solid #c1c1c1;
}
</style>
