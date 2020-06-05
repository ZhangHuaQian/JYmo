<template>
  <div>
    <el-row />
    <el-row :gutter="40" class="home-container">
      <el-col :xs="24" :md="6" class="content-left">
        <el-row>
          <el-row class="content-left-bangyang" style="position: relative;">
            <span>影院影像</span>
            <el-col style="font-size: 0;"><img src="../../assets/common/xx.png" alt=""></el-col>
          </el-row>
          <el-row class="content-left-list">
            <el-row class="content-left-list-li">
              <p>科研管理</p>
            </el-row>
            <el-row class="content-left-list-li active">
              <p>科研机构</p>
            </el-row>
            <el-row class="content-left-list-li">
              <p>学报</p>
            </el-row>
          </el-row>
        </el-row>
      </el-col>

      <el-col :xs="24" :md="16" class="common-right">
        <el-row :gutter="40">
          <el-row class="common-right-weizhi">
            <p>当前位置：<span>123</span>>><span>456</span></p>
          </el-row>
          <el-row v-for="item in 10" :key="item" :gutter="20" class="common-right-info">
            <el-row :gutter="20">
              <el-col :xs="4" :md="1"><i class="common-right-info-icon" /></el-col>
              <el-col :xs="20" :md="16" class="common-right-info-content">
                关于成立广西警察学院第一届学术委员会的通知
              </el-col>
              <el-col :xs="20" :md="7" class="common-right-info-data">
                2020-05-14
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
					right: 25%;
					width: 180px;
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
				&-icon{
					@extend %icon;
					background-image: url(../../assets/departmentHome/gzzd.png)
				}
				&-content{
					border: 1px soxlid red;
					color: #333333;
				}
				&-data{
					text-align: right;
					color: #999999;
				}

			}

		}
	}
</style>
