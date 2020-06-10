<template>
  <div>
    <el-row />
    <el-row :gutter="40" class="home-container">
      <el-col :xs="24" :md="6" class="content-left">
        <el-row>
          <el-row class="content-left-bangyang" style="position: relative;">
            <span>学科专业</span>
            <el-col style="font-size: 0;"><img src="../../assets/common/xx.png" alt=""></el-col>
          </el-row>
          <el-row class="content-left-list">
            <el-row class="content-left-list-li">
              <p>校园文化</p>
            </el-row>
          </el-row>
        </el-row>
      </el-col>

      <el-col :xs="24" :md="16" class="common-right">
        <el-row :gutter="40">
          <el-row class="common-right-weizhi">
            <p>当前位置：<span>123</span>>><span>456</span></p>
          </el-row>
          <el-row class="common-right-info">
            <el-row class="title">
              <h4>学科专业</h4>
              <p>发布日期：2016-01-14 10:46:26 </p>
            </el-row>
            <el-divider />
            <el-row>
              内容
            </el-row>
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
				.title{
					text-align: center;
					p{
						font-size:14px;
						color: #999999;
					}

				}
			}

		}
	}
</style>
