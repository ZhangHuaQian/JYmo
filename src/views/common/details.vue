<template>
  <div class="home-container">
    <van-row :span="24">
      <van-col style="bt">部门概况</van-col>
	  
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      </van-collapse>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
    };
  },
};
</script>

<style lang="scss" scoped>
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
}
img {
  width: 100%;
  height: 100%;
}

.home-container {
  padding: 1.5% 0%;
  background: rgba(249, 249, 249, 1);
  .bt {
	  background-color: rgba(7, 81, 154, 1);
	  font-size: 20px;
	  text-align: center;
  }

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
        color: #136bb9;
        background: #f3f6f9;
      }
    }
  }

  .common-right {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.09);
    &-weizhi {
      background: rgba(249, 249, 249, 1);
      box-shadow: 0px -3px 0px 0px rgba(7, 81, 154, 1);
      border-bottom: 1px solid #ccc;
      p {
        margin-left: 1.6rem;
      }
    }
    &-info {
      .title {
        text-align: center;
        p {
          font-size: 14px;
          color: #999999;
        }
      }
    }
  }
}
</style>
