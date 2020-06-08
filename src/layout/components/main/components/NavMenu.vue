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
      </van-grid>-->
      
      <!-- 导航栏开始 -->
      <van-grid :column-num="3">
        <van-grid-item v-for="item in list" :key="item.id" icon="photo-o" :to="item.url" :text="item.name" />
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
      ggfw_show: false
    };
  },
  mounted() {
    this.getList();
    this.toNewPage();
    this.getTitle();
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
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getList() {
      this.axios
        .post(
          ip + "/unauth/column/selectList"
          // {id:this.id}
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
        path: "/common/commonlistSeven",
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
