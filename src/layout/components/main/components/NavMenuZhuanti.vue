<template>
  <div>
    <van-row
      type="flex"
      class="row-bg NavMenu-wrapper"
      :class="{'NavMenu-wrapper-getcolor':!$route.meta.navBG}"
      :style="{'backgroundSize': '100% 100%', 'backgroundImage': 'url('+$route.meta.navBG+')'}"
      justify="space-around"
    />

    <van-row>
      <van-search v-if="!$route.meta.navBG" v-model="seach" shape="round" placeholder="请输入搜索关键词" />
      <div style="clear: both;"></div>

      <!-- 导航栏开始 -->

      <van-grid :column-num="3" >
        <!-- <van-grid-item icon="photo-o" :to="{path:'/home/index',query:{id:1}}" text="首页" />
        <van-grid-item icon="photo-o"  :to="{path:'/Navigation/index',query:{id:list[1].id,name:list[1].name}}" text="学校概况" />
        <van-grid-item icon="photo-o"  @click="toNewPages(list[2].id,list[2].url)" text="机构设置" />
        <van-grid-item icon="photo-o"  @click="toNewPages(list[3].id,list[3].url)" text="学科专业" />
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[4].id,name:list[4].name}}" text="学术研究" />
        <van-grid-item icon="photo-o" @click="toNewPages(list[5].id,list[5].url)" text="招生就业" />
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[6].id,name:list[6].name}}" text="队伍建设" />
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[7].id,name:list[7].name}}" text="公共服务" />
        <van-grid-item icon="photo-o"  :to="{path:'/Navigation/index',query:{id:list[8].id,name:list[8].name}}" text="校园文化" />  -->

        
        
        <van-grid-item icon="photo-o" v-for="item in list" :key="item.id" :to="{path:item.url,query:{id:item.id,name:item.name}}" :text="item.name" >
          <van-icon class="iconfont" class-prefix='icon' size="40px" name="kecheng" />
          <van-col style="font-size:8px;margin-top:5px">{{item.name}}</van-col>
        </van-grid-item>
         <!-- <van-grid-item v-if="item.name='公共服务'" icon="photo-o" v-for="item in list" :key="item.id" :to="" :text="item.name" >
          <van-icon class="iconfont" class-prefix='icon' size="40px" name="kecheng" />
          <van-col style="font-size:8px;margin-top:5px">{{item.name}}</van-col>
        </van-grid-item> -->
        
        <!-- <van-grid-item  v-if="item.name!=='部门概况'&&item.name!=='工作职责'&&item.name!=='规章制度'" icon="photo-o" v-for="item in list" :key="item.id" :to="item.url" :text="item.name" />
        <van-grid-item v-if="list[1].name ==='部门概况'" icon="photo-o"  :to="{path:'/common/commonlist2?'}" text="部门概况" /> -->
        <!-- <van-grid-item v-if="list[2].name ==='工作职责'" icon="photo-o"  :to="{path:'/common/commonlist2',query:{siteId:lanse[3].siteId,columnId:lanse[3].id,columnName:lanse[3].name,childId:lanse[3].id}}" text="工作职责" /> -->
        
        <!-- <van-grid-item v-if="list[3].name ==='规章制度'" icon="photo-o"  :to="{path:'/common/commonlist2',query:{siteId:13,columnId:92,columnName:规章制度,childId:92}}" text="规章制度" /> -->
        
        

        <!-- v-if="item.name！=='部门概况'"   v-if="list.name ==='部门概况'"  -->


        

        
      </van-grid>

      <!-- 导航栏结束 -->
      

      <van-nav-bar :title="name" to="this.$router.go(-1)" left-arrow v-if="name == ''" />
    </van-row>
  </div>
  
</template>

<script>
import { serverip as ip } from "@/utils/serverIP";
export default {
  data() {
    return {
      pageId: 0,
      list: [],
      activeIndex: "1",
      seach: "",
      name: "专题",
      ggfw_show: false,
      lanse:''
    };
  },
  created(){
    this.getList();
    this.getLanmu()
  },
  mounted() {
    // this.getList();
    this.toNewPage();
    this.getTitle(),
    
    this.getLanse();
  },
  watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    },
  methods: {
    getTitle() {
      this.name = this.$route.query.name;
    },
    toNavigation(id, name) {
      this.$router.push({
        path: "/Navigation/index",
        query: {
          id: id,
          name: name
        }
      });
      this.getList();
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getList() {
      
        this.axios
        .post(
          ip + "/unauth/column/selectList",{siteId:this.$route.query.siteId}
        )
        .then(res => {
          console.log(res, "导航栏");
          this.list = res.data.data;
          console.log("url列表", this.list);
        });

      
      
        
     
      
    },
    // getLanmu() {
    //   //获取栏目列表
    //   this.axios
    //     .post(ip + "/unauth/column/selectList", {
    //       siteId: this.$route.query.siteId
    //     })
    //     .then(res => {
    //       this.list = res.data.data;
    //       console.log(list,'4444')
    //       this.getLanse();
    //       // console.log(res)
    //     });
    // },
    getLanse() {
      //获取内页栏目
      this.axios
        .post(ip + "/unauth/column/selectChild", { id: this.list[0].id })
        .then(res => {
          console.log(res);
          this.lanse = res.data.data;
          console.log("这是栏目题", this.lanse);
          
        });
    },
    toNewPage(a) {
      //页面跳转传参
      this.pageId = a;
    },
    toNewPages(id, url) {
      this.$router.push({
        path: url,
        query: {
          id: id
        }
      });
    },
    toNewPagess(id, url) {
      console.log(url + "是");
      this.$router.push({
        path: "/common/commonlist",
        query: {
          id: id
        }
      });
    },
    toNewPagesListSeven(id) {
      this.$router.push({
        path: "/common/commonlist2",
        query: {
          id: id
        }
      });
    },
    toNewPagesIndex(id) {
      this.$router.push({
        path: "/secondaryHome/index",
        query: {
          id: id
        }
      });
    }
  }
};

// import { serverip as ip } from "@/utils/serverIP";
// import { mapGetters } from 'vuex'
// export default {
//   data() {
//     return {
//       pageId: 0,
//       list: [],
//       activeIndex: "1",
//       seach: "",
//       name: "专题",
//       ggfw_show: false,
//       bumendongtai: [],
//       tongzhigonggao: [],
//       guizhangzhidu: [],
//       gongzuozhize: [],
//       bumenfengcai: [],
//     };
//   },
//   computed: {
//     ...mapGetters([
//       'menu'
//     ])
//   },
//   created() {
//     console.log(this.menu,'dh')

//     if (this.menu.length > 0) {
//       for (var i = 0; i < this.menu.length; i++) {
//         if (this.menu[i].name === '首页') {
//           this.getColumnList(this.menu[i].id)
//           console.log(this.menu[i].id,'111')
//         }
//       }
//     }

    
//   },
//   mounted() {
//     // this.getList();
//     // this.toNewPage();
//     // this.getTitle();
//   },
//   methods: {
//     getColumnList(id) {
//       const data = {
//         id
//       }
//       getList('column', data, '/selectChild').then(response => {
//         this.columnList = response.data.data
//         if (this.columnList.length > 0) {
//           for (var i = 0; i < this.columnList.length; i++) {
//             switch (this.columnList[i].name) {
//               case '部门动态':
//                 this.getNewsList(this.columnList[i].id, 5).then(results => {
//                   this.bumendongtai = results
//                   console.log(results,'5858')
//                 })
//                 break
//               case '通知公告':
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.tongzhigonggao = results
//                 })
//                 break
//               case '规章制度':
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.guizhangzhidu = results
//                   console.log(results[0].columnId,'规章制度')
                  
//                 })
//                 break
//               case '工作职责':
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.gongzuozhize = results
//                   // console.log(results,'44444')
//                   this.gzzeID=results
//                   console.log(this.gongzuozhize[0].columnId,'工作职责')
//                 })
//                 break
//               case '部门风采':
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.bumenfengcai = results
//                   console.log(results,'部门风采')
//                 })
//                 break
//             }
//           }
//         }
//       })
//     },
    // getTitle() {
    //   this.name = this.$route.query.name;
    // },
    // toNavigation(id, name) {
    //   this.$router.push({
    //     path: "/Navigation/index",
    //     query: {
    //       id: id,
    //       name: name
    //     }
    //   });
    //   this.getList();
    // },
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // getList() {
    //   this.axios
    //     .post(
    //       ip + "/unauth/column/selectList",{id:this.id}
    //     )
    //     .then(res => {
    //       console.log(res, "导航栏");
    //       this.list = res.data.data;
    //       console.log("url列表", this.list);
    //     });
    // },
    // toNewPage(a) {
    //   //页面跳转传参
    //   this.pageId = a;
    // },
    // toNewPages(id, url) {
    //   this.$router.push({
    //     path: url,
    //     query: {
    //       id: id
    //     }
    //   });
    // },
    // toNewPagess(id, url) {
    //   console.log(url + "是");
    //   this.$router.push({
    //     path: "/common/commonlist",
    //     query: {
    //       id: id
    //     }
    //   });
    // },
    // toNewPagesListSeven(id) {
    //   this.$router.push({
    //     path: "/common/commonlist2",
    //     query: {
    //       id: id
    //     }
    //   });
    // },
    // toNewPagesIndex(id) {
    //   this.$router.push({
    //     path: "/secondaryHome/index",
    //     query: {
    //       id: id
    //     }
    //   });
    // }
//   }
// };
</script>

<style lang="scss" scoped>
$NavMenuHoverColor: #cce1fa73;
$NavMenuItemWidth: 7.25rem;
.NavMenu-wrapper {
  &-getcolor {
    background-color: #B62B2D;
  }

  /deep/.seach-input {
    input {
      border-radius: 25px;height: 30px;line-height: 30px;
    }
  }

  .el-menu-nav {
    background-color: #ffffff00 !important;
    border-bottom: 0px;
    .el-menu-item{
      text-align: center;
      min-width: $NavMenuItemWidth;
      background-color: #ffffff00 !important;
      &:hover{
        background-color: $NavMenuHoverColor !important;
      }
    }
    .is-active {
      height: 3.75rem;
      border-bottom: 0px;
      border-top: 4px solid #EEA200;
      line-height: 3.125rem;
      background-color: #CCE1FA !important;
      color: #184499 !important;
      /deep/ .el-submenu__title {
        color: #184499 !important;
      }
    }
    /deep/.el-submenu {
      text-align: center;
      min-width: $NavMenuItemWidth;
      &:hover {
        background-color: $NavMenuHoverColor !important;
      }
      &__title {
        background-color: #ffffff00 !important;
        &:hover{
          background-color: #07519A;
        }
      }
    }
  }
  /deep/ .el-submenu.is-active {
    color: #184499 !important;
    border-bottom: 0px;
    .el-submenu__title {
      border-bottom: 0px;
      color: #184499 !important;
      height: 55px;
      line-height: 55px;
    }
  }
}
</style>
<style>
  .el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
    background-color: #cce1fa73!important;
    color: #184499;
  }
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    color: #000 !important;
  }
</style>
