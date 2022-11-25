<script>

export default {
  data() {
    return {
      show: false,
      showEmbedded: false
    }
  }
}

</script>

<template>
  <div class="demo-overlay">
    <demo-block :title="'basicUsage'">
      <van-button
          type="primary"
          :text="'showOverlay'"
          style="margin-left: 16px"
          @click="show = true"
      />
      <van-overlay :duration="0" :show="show" @click="show = false"/>
    </demo-block>

    <demo-block :title="'embeddedContent'">
      <van-button
          type="primary"
          :text="'embeddedContent'"
          style="margin-left: 16px"
          @click="showEmbedded = true"
      />
      <van-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block"/>
        </div>
      </van-overlay>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-overlay {
  background: var(--van-background-color-light);

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: var(--van-background-color-light);
    border-radius: 4px;
  }
}
</style>
