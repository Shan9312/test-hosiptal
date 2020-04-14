<template>
  <div>
    <!-- 头部组件 -->
    <div class="header-box">
      <div class="header-content">
        <p>欢迎你: hss</p>
        <div>
          <span>个人中心</span>
          <span>我的关注</span>
          <span>最新消息1条</span>
          <span>退出</span>
        </div>
      </div>
    </div>
    <!-- 搜索栏组件 -->
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.header-box {
  width: 100%;
  position: fixed;
  font-size: 0.875rem;
  top: 0;
  .header-content {
    width: 75rem;
    margin: 0 auto;
    border: 1px solid #000;
    height: 2.875rem;
    line-height: 2.875rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
}
</style>