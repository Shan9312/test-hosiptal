<template>
  <div class="wrapper-container list-content">
    <el-row :gutter="40">
      <el-col :span="18">
        <div class="block">
          <el-carousel trigger="click" height="11.2rem">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="rightdiv">
          <div class="lists">
            <div class="imgs fl"></div>
            <div class="fl cont">
              <div>
                <a href>免费问</a>
              </div>
              <div>咨询费用，完全免费</div>
            </div>
          </div>
          <div class="lists">
            <div class="imgs fl"></div>
            <div class="fl cont">
              <div>
                <a href>快速回</a>
              </div>
              <div>智能匹配，对症医生</div>
            </div>
          </div>
          <div class="lists">
            <div class="imgs fl"></div>
            <div class="fl cont">
              <div>
                <a href>专业答</a>
              </div>
              <div>公立医院，优秀医生</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="centers clearfix">
      <span class="fl">专家推荐</span>
      <span class="fr">
        <a href>更多>></a>
      </span>
    </div>
    <div class="centers clearfix">
      <div class="center">
        <span class="heads txts">发热门诊</span>
        <span class="txts">
          <a href>内科</a>
        </span>
      </div>
    </div>
    <div class="centers clearfix">
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="btn"></div>
        </div>
        <div class="rights fr">
          <div class="clearfix tops">
            <div>胡洋</div>
            <div>黑龙江省医院 皮肤病院</div>
            <div>
              <div class="fl">接诊量：108</div>
              <div class="fr">评分：5.0</div>
            </div>
          </div>
          <span class="bottoms">擅长：感冒、肺炎、哮喘、慢阻肺、肺栓塞、支气管扩张...</span>
        </div>
      </div>
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="btn"></div>
        </div>
        <div class="rights fr">
          <div class="clearfix tops">
            <div>胡洋</div>
            <div>黑龙江省医院 皮肤病院</div>
            <div>
              <div class="fl">接诊量：108</div>
              <div class="fr">评分：5.0</div>
            </div>
          </div>
          <span class="bottoms">擅长：感冒、肺炎、哮喘、慢阻肺、肺栓塞、支气管扩张...</span>
        </div>
      </div>
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="btn"></div>
        </div>
        <div class="rights fr">
          <div class="clearfix tops">
            <div>胡洋</div>
            <div>黑龙江省医院 皮肤病院</div>
            <div>
              <div class="fl">接诊量：108</div>
              <div class="fr">评分：5.0</div>
            </div>
          </div>
          <span class="bottoms">擅长：感冒、肺炎、哮喘、慢阻肺、肺栓塞、支气管扩张...</span>
        </div>
      </div>
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="btn"></div>
        </div>
        <div class="rights fr">
          <div class="clearfix tops">
            <div>胡洋</div>
            <div>黑龙江省医院 皮肤病院</div>
            <div>
              <div class="fl">接诊量：108</div>
              <div class="fr">评分：5.0</div>
            </div>
          </div>
          <span class="bottoms">擅长：感冒、肺炎、哮喘、慢阻肺、肺栓塞、支气管扩张...</span>
        </div>
      </div>
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="btn"></div>
        </div>
        <div class="rights fr">
          <div class="clearfix tops">
            <div>胡洋</div>
            <div>黑龙江省医院 皮肤病院</div>
            <div>
              <div class="fl">接诊量：108</div>
              <div class="fr">评分：5.0</div>
            </div>
          </div>
          <span class="bottoms">擅长：感冒、肺炎、哮喘、慢阻肺、肺栓塞、支气管扩张...</span>
        </div>
      </div>
    </div>
    <div class="centers clearfix">
      <span class="fl">疾病库</span>
      <span class="fr">
        <a href>更多>></a>
      </span>
    </div>
    <div class="centers clearfix">
      <div class="centerslists fl">
        <ul>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
        </ul>
      </div>
      <div class="centerslists fr">
        <ul>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
          <li>
            <div>慢性支气管炎：慢性支气管炎的病因尚不完全清楚，是多种环境因素是多种环境因素是多种环境因素</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.clearfix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.doctors {
  font-size: 0.62rem;
  width: 30%;
  margin-right: 1.5rem;
  margin-bottom: 2.4rem;
  .lefts {
    width: 40%;
    .avatar {
      width: 5rem;
      height: 4.8rem;
      border: 0.04rem solid #000;
    }
    .btn {
      margin-top: 0.8rem;
      color: #909399;
      border: 0.04rem solid #000;
      border-radius: 0.2rem;
      box-shadow: none;
      height: 1rem;
      width: 5rem;
    }
  }
  .rights {
    width: 60%;
    .tops {
      border-bottom: 0.04rem solid #000;
    }
    .bottoms {
      line-height: 1.12rem;
    }
    div {
      margin-bottom: 0.55rem;
    }
  }
}

.centers {
  width: 100%;
  margin-top: 0.96rem;

  font-size: 0.72rem;
  color: #909399;
  .center {
    margin-bottom: 0.96rem;
    padding: 0 0.4rem;
    float: left;
    width: 100%;
  }
  .txts {
    padding: 0 0.6rem;
    text-align: center;
    border-right: 0.04rem solid #909399;
    font-size: 0.64rem;
  }
  .txts:hover {
    color: red;
  }
}
.heads {
  color: red;
}
.wrapper-container {
  width: 48rem;
  margin: 0 auto;
  color: #909399;
  .rightdiv {
    border: 0.04rem solid #000;
    height: 11.2rem;
  }
  .lists {
    height: 3.2rem;
    margin-top: 0.6rem;
  }
  .cont {
    width: 60%;
    font-size: 0.64rem;
    :nth-child(1) {
      font-size: 0.96rem;
      color: #5ca945;
    }
  }
  .imgs {
    width: 2rem;
    height: 2rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    background-color: #5ca945;
  }
}
.centerslists {
  padding-left: 0.8rem;
  width: 45%;
  ul {
    li {
      list-style: outside;
      margin-bottom: 0.8rem;
      div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
