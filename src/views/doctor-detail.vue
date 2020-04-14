<template>
  <div class="wrapper-container list-content">
    <div class="centers clearfix">
      <div class="doctors fl">
        <div class="lefts fl">
          <div class="avatar"></div>
          <div class="attention">关注数：123574</div>
        </div>
        <div class="rights fr ">
          <div class="clearfix">
            <div>
              <span>胡洋</span>
              <span class="fr">主治医生</span>
            </div>
            <div>黑龙江省医院  <span class="fr">皮肤病院</span></div>
            <div><div class="fl">接诊量：108</div> <div class="fr">评分：5.0</div></div>
          </div>
          <span class="bottoms">
            关键字：<span>皮肤病</span> 
          </span>
        </div>
      </div>
      <div class="btn fr">
        <a href="">咨询医生</a>
        <a href="">+ 关注</a>
      </div>
    </div>
    <div class="center clearfix">
      擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急疹、小儿肺热、手足口病呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急疹、小儿肺热、手足口病
      擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急疹、小儿肺热、手足口病呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急疹、小儿肺热、手足口病
    </div>
    <div class="xian">
      收到的评价
    </div>
    <div class="evaluations">
      <div class="evaluation">
        <span>15272776615</span>
        <span>❤❤❤❤❤</span>
        <span>2020-4-14 16:46:57</span>
      </div>
      <div class="impression">
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
        <span>亲切和蔼</span>
      </div>
      <div class="impression">
        非常细致耐心，经验丰富，诊断准确
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {

  },
  mounted() {},
  methods: {

  }
};
</script>

<style lang="less" scoped>
.clearfix:after{
  content: "020"; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
  }
.fl {
  float: left;
}
.fr{
  float: right;
}
.doctors{
  font-size: .62rem;
  width: 40%;
  .lefts{
    width: 40%;
    .avatar{
      width: 5rem;
      height: 4.8rem;
      border: .04rem solid #000;
    }
    .attention{
      margin-top: .8rem;
      color: #909399;
      box-shadow: none;
      height: 1rem;
      width: 5rem;
    }
  }
  .rights{
    width: 60%;
    .bottoms{
      line-height: 1.12rem;
    }
    div{
      margin-bottom: .55rem;
    }
  }
}

.btn{
    a{
      border: 1px solid #000;
      margin-left:1.2rem ;
      display: inline-block;
      height: 1.6rem;
      width: 5.2rem;
      text-align: center;
      line-height: 1.6rem;
      border-radius: .3rem;
    }
    a:hover{
      background-color: #409EFF;
      border-color: #409EFF;
      color: #fff;
    }
}

.centers{
  width: 100%;
  border: .04rem solid #000;
  border-bottom: .04rem solid #909399;
  padding: 1.2rem;
  margin-top: .96rem;
  font-size: .72rem;
  color: #909399;
}

.center{
  width: 100%;
  border: 1px solid #000;
  border-top: none;
  padding: 1.2rem;
}

.wrapper-container {
  width: 48rem;
  margin: 0 auto;
  color: #909399;
  .rightdiv {
    border: .04rem solid #000;
    height: 11.2rem;
  }
  .lists {
    height: 3.2rem;
    margin-top: .6rem;
  }
  .cont {
    width: 60%;
    font-size: .64rem;
    :nth-child(1) {
      font-size: .96rem;
      color: #5ca945;
      margin-bottom: .4rem;
    }
  }
  .xian{
    font-size: .82rem;
    color: #000;
    margin-top: 2.2rem;
    border-bottom: 1px solid #000;
    line-height: 2.4rem;
  }
}
.evaluations{
  padding-bottom: 1.6rem;
  border-bottom: .04rem dashed #000;
}
.evaluation{
  span{
    display: inline-block;
    margin-right:1.6rem;
    margin-top: .8rem;
  }
  span:nth-child(3){
    margin-right:0;
    float: right;
  }
}

.impression{
    margin-top: .8rem;
    span{
      margin-right:1.6rem;
    }
}

</style>
