<script>
export default {
  data() {
    return {
      showBasic: true,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showRoundCorner: false,
      showGetContainer: false,
      showCustomCloseIcon: false,
      showCustomIconPosition: false,
    }
  }
}
</script>

<template>
  <div class="demo-popup">

    <demo-block card :title="'basicUsage'">
      <van-cell :title="'buttonBasic'" is-link @click="showBasic = true"/>
      <van-popup v-model:show="showBasic" :overlay="true" :style="{ padding: '30px 50px' }">
        {{ 'content' }}
      </van-popup>
    </demo-block>

    <demo-block card :title="'position'">
      <van-cell :title="'buttonTop'" is-link @click="showTop = true"/>
      <van-cell :title="'buttonBottom'" is-link @click="showBottom = true"/>
      <van-cell :title="'buttonLeft'" is-link @click="showLeft = true"/>
      <van-cell :title="'buttonRight'" is-link @click="showRight = true"/>

      <van-popup
          v-model:show="showTop"
          position="top"
          :style="{ height: '30%' }"
      />
      <van-popup
          v-model:show="showBottom"
          position="bottom"
          :style="{ height: '30%' }"
      />
      <van-popup
          v-model:show="showLeft"
          position="left"
          :style="{ width: '30%', height: '100%' }"
      />
      <van-popup
          v-model:show="showRight"
          position="right"
          :style="{ width: '30%', height: '100%' }"
      />
    </demo-block>

    <demo-block card :title="'closeIcon'">
      <van-cell :title="'closeIcon'" is-link @click="showCloseIcon = true"/>
      <van-cell
          :title="'customCloseIcon'"
          is-link
          @click="showCustomCloseIcon = true"
      />
      <van-cell
          :title="'customIconPosition'"
          is-link
          @click="showCustomIconPosition = true"
      />

      <van-popup
          v-model:show="showCloseIcon"
          closeable
          position="bottom"
          :style="{ height: '30%' }"
      />
      <van-popup
          v-model:show="showCustomCloseIcon"
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '30%' }"
      />
      <van-popup
          v-model:show="showCustomIconPosition"
          closeable
          close-icon-position="top-left"
          position="bottom"
          :style="{ height: '30%' }"
      />
    </demo-block>

    <demo-block card :title="'roundCorner'">
      <van-cell
          :title="'roundCorner'"
          is-link
          @click="showRoundCorner = true"
      />
      <van-popup
          v-model:show="showRoundCorner"
          round
          position="bottom"
          :style="{ height: '30%' }"
      />
    </demo-block>

    <demo-block card :title="'teleport'">
      <van-cell :title="'teleport'" is-link @click="showGetContainer = true"/>
      <van-popup
          v-model:show="showGetContainer"
          teleport="body"
          :style="{ padding: '30px 50px' }"
      />
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-popup {
  .van-row {
    margin-bottom: var(--van-padding-md);
  }

  .van-button {
    margin-left: var(--van-padding-md);
  }
}
</style>
