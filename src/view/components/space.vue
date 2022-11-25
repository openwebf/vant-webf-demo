<script>

export default {
  data() {
    return {
      align: "start",
    }
  }
}
</script>

<template>
  <div class="demo-space">

    <demo-block :title="'basicUsage'">
      <van-space>
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
      </van-space>
    </demo-block>

    <demo-block :title="'vertical'">
      <van-space direction="vertical" fill>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
      </van-space>
    </demo-block>

    <demo-block :title="'customSize'">
      <van-space :size="20" style="margin-bottom: 16px">
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
      </van-space>

      <van-space size="3rem">
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
        <van-button type="primary">{{ 'button' }}</van-button>
      </van-space>
    </demo-block>

    <demo-block :title="'align'">
      <van-radio-group
          v-model="align"
          direction="horizontal"
          style="margin-bottom: 16px"
      >
        <van-radio name="start">start</van-radio>
        <van-radio name="center">center</van-radio>
        <van-radio name="end">end</van-radio>
        <van-radio name="baseline">baseline</van-radio>
      </van-radio-group>
      <van-space :align="align" style="padding: 16px; background: #f3f2f5">
        <van-button type="primary">{{ align }}</van-button>
        <div style="padding: 40px 20px; background: #fff">Block</div>
      </van-space>
    </demo-block>

    <demo-block :title="'wrap'">
      <van-space wrap>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
        <van-button type="primary" block>{{ 'button' }}</van-button>
      </van-space>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-space {
  background: var(--van-background-color-light);

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md);
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
