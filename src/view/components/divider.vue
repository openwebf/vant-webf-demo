<script>


</script>

<template>
  <div class="demo-divider">
    <demo-block :title="'basicUsage'" >
      <van-divider :hairline="false"/>
    </demo-block>

    <demo-block :title="'withText'">
      <van-divider>
        {{ 'text' }}
      </van-divider>
    </demo-block>

    <demo-block :title="'contentPosition'">
      <van-divider content-position="left">
        {{ 'text' }}
      </van-divider>

      <van-divider content-position="right">
        {{ 'text' }}
      </van-divider>
    </demo-block>

    <demo-block :title="'dashed'">
      <van-divider dashed :hairline="false">
        {{ 'text' }}
      </van-divider>
    </demo-block>

    <demo-block :title="'customStyle'">
      <van-divider
          :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
      >
        {{ 'text' }}
      </van-divider>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-divider {
  background-color: var(--van-background-color-light);

  .van-doc-demo-block__title {
    padding-top: var(--van-padding-md);
  }
}
</style>
