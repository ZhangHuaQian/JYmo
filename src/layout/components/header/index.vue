<template>
  <div>
    <el-row class="top-banner">
      <!-- <span v-if="$route.meta.departmentName" class="departmentName">{{ $route.meta.departmentName }}</span> -->
      <span v-if="$route.meta.banner" class="departmentName"> <p style="font-size:16px"> {{ $route.query.name||$route.query.cloumnName }} </p></span>
      <!-- 添加专题top -->

    </el-row>
    <!-- <el-row v-if="$route.meta.banner" style="font-size: 0;position: relative;">
      <img src="@/assets/secondaryHome/dingb.png">
    </el-row> -->
    <el-row v-if="$route.meta.bannerZhuanti" style="font-size: 0;">
      <img src="@/assets/home/bannerZhuanti.png">
      
    </el-row>

    <!-- <el-row :gutter="20" v-if="$route.path.indexOf('/zhauntiHome')>-1" class="zhauntiHome">
		  <el-col :span="16" style="line-height: 2rem;"><span>欢迎来到广西警察学院-不忘初心 牢记使命！</span><span>2020年3月25日</span></el-col>
		  <el-col :span="4" style="line-height: 2rem;height: 22px !important;">
			<el-input
			  v-model="seach"
			  class="seach-input"
			  placeholder="请输入内容"
			  suffix-icon="el-icon-search"
			/>
		  </el-col>
		  <el-col :span="4" style="line-height: 2rem;">设为首页 | 添加收藏</el-col>
	  </el-row> -->

    <van-row v-if="$route.meta.banner" style="background:#4388CF" :gutter="24" type="flex" justify="space-between">
      <van-col :span="8" style="font-size: 0;padding:10px">
        <img src="@/assets/secondaryHome/logo.png" alt="">
      </van-col>
      <!-- <van-col :span="4" style="justify-content: center;align-items: center;display:flex;color: #ebeff5">
        <van-icon name="search" size="30" />
      </van-col> -->
    </van-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      seach: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
	height: 100%;
  }
  .top-banner {
    font-size: 0;
    .departmentName {
      font-family: cursive;
      font-size: 2.5rem;
      color: white;
      position: absolute;
      top: 40%;
      left: 40%;
    }

    &-2 {
      font-size: 0;
    }

	.zhauntiHome{
		margin-left: 0;
		background:rgba(239,239,239,1);
		font-size: 10px;
		padding: 0 19.5%;
		/deep/ .el-input__inner{
			height: 22px;
		}
		/deep/ .el-input__icon{
			line-height: 30px;
		}

	}
  }
</style>
