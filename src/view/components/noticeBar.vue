<script >


</script>

<template>
  <div class="demo-notice-bar">

    <demo-block :title="'basicUsage'">
      <van-notice-bar :text="'text1'" scrollable left-icon="volume-o"/>
    </demo-block>

    <demo-block :title="'scrollable'">
      <van-notice-bar scrollable :text="'haiku'"/>
      <van-notice-bar :scrollable="false" :text="'text2'"/>
    </demo-block>

    <demo-block :title="'wrapable'">
      <van-notice-bar wrapable :scrollable="false" :text="'text2'"/>
    </demo-block>

    <demo-block :title="'mode'">
      <van-notice-bar mode="closeable" :text="'haiku'"/>
      <van-notice-bar mode="link" :text="'haiku'"/>
    </demo-block>

    <demo-block :title="'customStyle'">
      <van-notice-bar
          :text="'haiku'"
          color="#1989fa"
          background="#ecf9ff"
          left-icon="info-o"
      />
    </demo-block>

    <demo-block :title="'verticalScroll'">
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :touchable="false"
            :show-indicators="false"
        >
          <van-swipe-item>{{ 'poetry1' }}</van-swipe-item>
          <van-swipe-item>{{ 'poetry2' }}</van-swipe-item>
          <van-swipe-item>{{ 'poetry3' }}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-notice-bar {
  background: var(--van-background-color-light);

  .van-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .van-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
