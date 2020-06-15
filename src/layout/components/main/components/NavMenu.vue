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

      <!-- <van-grid :column-num="3">
        <van-grid-item @click="toNewPagesIndex(list[0].id)" v-if="!$route.meta.navBG" icon="wap-home-o"  :text="list[0].name"/>
        <van-grid-item @click="toNavigation(list[1].id,list[1].name)" v-if="!$route.meta.navBG" icon="photo-o"  :text="list[1].name" />
        <van-grid-item
		 @click="toNewPages(list[2].id,list[2].url)"
          v-if="!$route.meta.navBG"
          icon="photo-o"
          :text="list[2].name"
        />
      </van-grid>

      <van-grid :column-num="3">
        <van-grid-item
		 @click="toNewPages(list[3].id,list[3].url)"
          v-if="!$route.meta.navBG"
          icon="photo-o"
          :text="list[3].name"
        />
        <van-grid-item
		 @click="toNavigation(list[4].id,list[4].name)"
          v-if="!$route.meta.navBG"
          icon="photo-o"
          :text="list[4].name"
        />
        <van-grid-item @click="toNewPages(list[5].id,list[5].url)" v-if="!$route.meta.navBG" icon="photo-o" :text="list[5].name" />
      </van-grid>
      <van-grid :column-num="3">
        <van-grid-item
		 @click="toNavigation(list[6].id,list[6].name)"
          v-if="!$route.meta.navBG"
          icon="photo-o"
          :text="list[6].name"
        />
        <van-grid-item @click="toNavigation(list[7].id,list[7].name)" v-if="!$route.meta.navBG" icon="photo-o" :text="list[7].name"/>
        <van-grid-item
		 @click="toNavigation(list[8].id,list[8].name)"
          v-if="!$route.meta.navBG"
          icon="photo-o"
          :text="list[8].name"
        />
      </van-grid>

      <van-grid :column-num="4">
        <van-grid-item v-if="$route.meta.navBG" icon="photo-o" to="/home/index" text="首页" />
        <van-grid-item
          v-if="$route.meta.navBG"
          icon="photo-o"
          to="/common/commonlistSeven"
          text="新闻资讯"
        />
        <van-grid-item v-if="$route.meta.navBG" icon="photo-o" text="学术研究" />
        <van-grid-item
          v-if="$route.meta.navBG"
          icon="photo-o"
          to="/common/commonlistSeven"
          text="思想政治工作"
        />
      </van-grid>
      <van-grid :column-num="4">
        <van-grid-item
          v-if="$route.meta.navBG"
          icon="photo-o"
          to="/common/commonlistSeven"
          text="通知公告"
        />
        <van-grid-item v-if="$route.meta.navBG" icon="photo-o" to text="警院影像" />
        <van-grid-item v-if="$route.meta.navBG" icon="photo-o" to="/home/index" text="学校首页" />
      </van-grid> -->
      
      <!-- 导航栏开始 -->
      <!-- <van-grid :column-num="3">
        <van-grid-item v-for="item in list" :key="item.id" icon="photo-o" :to="{path:item.url,query:{id:item.id}}" :text="item.name" />
      </van-grid> -->
      <!-- 导航栏结束 -->

      <!-- 导航栏开始 -->

      <van-grid :column-num="3" >
        
        <van-grid-item icon="home" class="iconfont" class-prefix='icon'  :to="{path:'/home/index',query:{id:1}}" text="首页" >
          <van-icon class="iconfont" class-prefix='icon' size="40px" name="home" />
          <van-col style="font-size:8px;margin-top:5px">首页</van-col>
        </van-grid-item> 
        <van-grid-item icon="photo-o"  :to="{path:'/Navigation/index',query:{id:list[1].id,name:list[1].name}}" text="学校概况" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="xinwen" />
          <van-col style="font-size:8px;margin-top:5px">学校概况</van-col>
        </van-grid-item>
        <van-grid-item icon="photo-o"  @click="toNewPages(list[2].id,list[2].url,list[2].name)" text="机构设置" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="jigou" />
          <van-col style="font-size:8px;margin-top:5px">机构设置</van-col>
        </van-grid-item>
        <van-grid-item icon="photo-o"  :to="{path:'/Navigation/index',query:{id:list[3].id,name:list[3].name}}" text="学科专业" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="kexue" />
          <van-col style="font-size:8px;margin-top:5px">学科专业</van-col>
        </van-grid-item>
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[4].id,name:list[4].name}}" text="学术研究" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="xueshimao" />
          <van-col style="font-size:8px;margin-top:5px">学术研究</van-col>
        </van-grid-item>
        <!-- <van-grid-item icon="photo-o" @click="toNewPages(list[5].id,list[5].url,list[5].name)" text="招生就业" /> -->
         <van-grid-item icon="photo-o" :to="{path:'/employment/index',query:{columnId:list[5].id,columnName:list[5].name,name:list[5].name}}" text="招生就业" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="zhaosheng" />
          <van-col style="font-size:8px;margin-top:5px">招生就业</van-col>
         </van-grid-item>
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[6].id,name:list[6].name}}" text="队伍建设" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="duiwu" />
          <van-col style="font-size:8px;margin-top:5px">队伍建设</van-col>
        </van-grid-item>
        <van-grid-item icon="photo-o" :to="{path:'/Navigation/index',query:{id:list[7].id,name:list[7].name}}" text="公共服务" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="kefu" />
          <van-col style="font-size:8px;margin-top:5px">公共服务</van-col>
        </van-grid-item>
        <van-grid-item icon="photo-o"  :to="{path:'/Navigation/index',query:{id:list[8].id,name:list[8].name}}" text="校园文化" >
           <van-icon class="iconfont" class-prefix='icon' size="40px" name="icon-copy" />
          <van-col style="font-size:8px;margin-top:5px">校园文化</van-col>
        </van-grid-item> 
        <!-- @click="toNavigation(list[8].id,list[8].name)" 
        @click="toNavigation(list[7].id,list[7].name)"
        @click="toNavigation(list[6].id,list[6].name)"
        @click="toNavigation(list[4].id,list[4].name)"
        @click="toNavigation(list[1].id,list[1].name)"

        -->
      </van-grid>
      <!-- <van-grid :column-num="3" v-if="$route.meta.navBG">
        <van-grid-item icon="photo-o" :to="{path:'/home/index',query:{id:1}}" text="首页" />
        <van-grid-item icon="photo-o"  @click="toNavigation(list[1].id,list[1].name)" text="学校概况" />
        <van-grid-item icon="photo-o"  @click="toNewPages(list[2].id,list[2].url)" text="机构设置" />
        <van-grid-item icon="photo-o" @click="toNewPages(list[3].id,list[3].url)" text="学科专业" />
        <van-grid-item icon="photo-o" @click="toNavigation(list[4].id,list[4].name)" text="学术研究" />
        <van-grid-item icon="photo-o" @click="toNewPages(list[5].id,list[5].url)" text="招生就业" />
        <van-grid-item icon="photo-o" @click="toNavigation(list[6].id,list[6].name)" text="队伍建设" />
        <van-grid-item icon="photo-o" @click="toNavigation(list[7].id,list[7].name)" text="公共服务" />
        <van-grid-item icon="photo-o" @click="toNavigation(list[8].id,list[8].name)" text="校园文化" />
      </van-grid> -->


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
      name:''
    };
  },
  created(){
    this.getList();
  },
  mounted() {
    // this.getList();
    this.toNewPage();
    this.getTitle();
  },
  // watch: {
  //     '$route'(to, from) {
  //       this.$router.go(0);
  //     }
  //   },
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


    //  this.$route.siteId
       this.axios
        .post(
          ip + "/unauth/column/selectList",
          {id:this.$route.siteId}
        )
        .then(res => {
          console.log(res, "导航栏");
          this.list = res.data.data;
          console.log("url列表", this.list);
        });

     
      
    },
    toNewPage(a) {
      //页面跳转传参
      this.pageId = a;
    },
    toNewPages(id, url,name) {
      this.$router.push({
        path: url,
        query: {
          id: id,
          name:name
        },
        
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
</script>

<style lang="scss" scoped>
$NavMenuHoverColor: #cce1fa73;
$NavMenuItemWidth: 7.25rem;

.NavMenu-wrapper {
  &-getcolor {
    background-color: #07519a;
  }

  /deep/.seach-input {
    input {
      border-radius: 25px;
      height: 30px;
      line-height: 30px;
    }
  }

  .el-menu-nav {
    background-color: #ffffff00 !important;
    border-bottom: 0px;

    .el-menu-item {
      text-align: center;
      min-width: $NavMenuItemWidth;
      background-color: #ffffff00 !important;

      &:hover {
        background-color: $NavMenuHoverColor !important;
      }
    }

    .is-active {
      height: 3.75rem;
      border-bottom: 0px;
      border-top: 4px solid #eea200;
      line-height: 3.125rem;
      background-color: #cce1fa !important;
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

        &:hover {
          background-color: #07519a;
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
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  background-color: #cce1fa73 !important;
  color: #184499;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  color: #000 !important;
}
</style>
