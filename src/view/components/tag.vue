<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    close: function () {
      this.show = false
    }
  }
}

</script>

<template>
  <div class="demo-tag">

    <demo-block card :title="'basicUsage'">
      <van-cell :title="`primary ${'type'}`">
        <template #value>
          <van-tag type="primary">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="`success ${'type'}`">
        <template #value>
          <van-tag type="success">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="`danger ${'type'}`">
        <template #value>
          <van-tag type="danger">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="`warning ${'type'}`">
        <template #value>
          <van-tag type="warning">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
    </demo-block>

    <demo-block card :title="'tagStyle'">
      <van-cell :title="'plain'">
        <template #value>
          <van-tag plain type="primary">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'round'">
        <template #value>
          <van-tag round type="primary">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'mark'">
        <template #value>
          <van-tag mark type="primary">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'closeable'">
        <template #value>
          <van-tag
              closeable
              :show="show"
              size="medium"
              type="primary"
              @close="close"
          >
            {{ 'tag' }}
          </van-tag>
        </template>
      </van-cell>
    </demo-block>

    <demo-block card :title="'customSize'">
      <van-cell :title="'smallSize'">
        <template #value>
          <van-tag type="primary">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'mediumSize'">
        <template #value>
          <van-tag type="primary" size="medium">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'largeSize'">
        <template #value>
          <van-tag type="primary" size="large">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
    </demo-block>

    <demo-block card :title="'customColor'">
      <van-cell :title="'customBgColor'">
        <template #value>
          <van-tag color="#7232dd">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'customTextColor'">
        <template #value>
          <van-tag color="#ffe1e1" text-color="#ad0000">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="'customPlainColor'">
        <template #value>
          <van-tag color="#7232dd" plain>{{ 'tag' }}</van-tag>
        </template>
      </van-cell>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-tag {
  .van-tag + .van-tag {
    margin-left: var(--van-padding-xs);
  }
}
</style>
