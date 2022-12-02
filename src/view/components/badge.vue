<script>


</script>

<template>
  <div class="demo-badge">

    <demo-block :title="'basicUsage'">
      <van-badge width="29" height="18" content="99+">
        我是
      </van-badge>
      <van-badge content="10" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="Hot" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge dot width="29" height="18">
        <div class="child"/>
      </van-badge>
    </demo-block>

    <demo-block :title="'max'">
      <van-badge content="20" max="9" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="50" max="20" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="200" max="99" width="29" height="18">
        <div class="child"/>
      </van-badge>
    </demo-block>

    <demo-block :title="'customColor'">
      <van-badge content="5" color="#1989fa" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="10" color="#1989fa" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge dot color="#1989fa" width="29" height="18">
        <div class="child"/>
      </van-badge>
    </demo-block>

    <demo-block :title="'customContent'">
      <van-badge width="29" height="18">
        <div class="child"/>
        <template #content>
          <van-icon name="success" class="badge-icon"/>
        </template>
      </van-badge>
      <van-badge width="29" height="18">
        <div class="child"/>
        <template #content>
          <van-icon name="cross" class="badge-icon"/>
        </template>
      </van-badge>
      <van-badge width="29" height="18">
        <div class="child"/>
        <template #content>
          <van-icon name="down" class="badge-icon"/>
        </template>
      </van-badge>
    </demo-block>

    <demo-block :title="'customPosition'">
      <van-badge content="10" position="top-left" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="10" position="bottom-left" width="29" height="18">
        <div class="child"/>
      </van-badge>
      <van-badge content="10" position="bottom-right" width="29" height="18">
      <div class="child"/>
      </van-badge>
    </demo-block>

    <demo-block :title="'standalone'">
      <van-badge content="20" style="margin-left: 16px;width: 18px" width="29" height="18"/>
      <van-badge content="200" max="99" style="margin-left: 16px" width="29" height="18"/>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-badge {
  background-color: var(--van-background-color-light);

  .van-badge__wrapper {
    margin-left: var(--van-padding-md);
  }

  .child {
    width: 40px;
    height: 40px;
    background: var(--van-gray-2);
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    margin-left: 0;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
