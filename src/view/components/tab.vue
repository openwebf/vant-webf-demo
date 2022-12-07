<script>

export default {
  data() {
    return {
      active1: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      active6: 0,
      active7: 0,
      active8: 0,
      active9: 0,
      active10: 0,
      active11: 0,
      activeName: 'b',
      tabs: [1, 2, 3, 4],
      tab: [1, 2, 3, 4]
    }
  },
  methods: {
    onClickTab: function () {

    },
    beforeChange: function (name) {
      if (name === 1) {
        return false;
      }
      return new Promise((resolve) => {
        resolve(name !== 3);
      });
    }
  }
}

</script>

<template>
  <div class="demo-tab">

    <demo-block :title="'basicUsage'">
      <van-tabs v-model:active="active1">
        <van-tab :title="'tab' + index" v-for="index in tab" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'matchByName'">
      <van-tabs v-model:active="activeName">
        <van-tab name="a" :title="'tab' + 1"> {{ 'content' }} 1</van-tab>
        <van-tab name="b" :title="'tab' + 2"> {{ 'content' }} 2</van-tab>
        <van-tab name="c" :title="'tab' + 3"> {{ 'content' }} 3</van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title2'">
      <van-tabs v-model:active="active2">
        <van-tab v-for="index in 8" :title="'tab' + index" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title3'">
      <van-tabs v-model:active="active3">
        <van-tab
            v-for="index in 3"
            :title="'tab' + index"
            :disabled="index === 2"
            :key="index"
        >
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title4'">
      <van-tabs v-model:active="active4" type="card">
        <van-tab v-for="index in 3" :title="'tab' + index" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title5'">
      <van-tabs v-model:active="active5" @click-tab="onClickTab">
        <van-tab v-for="index in 2" :title="'tab' + index" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title6'">
      <van-tabs v-model:active="active6" sticky>
        <van-tab :title="'tab' + index" v-for="index in tab" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <shrink/>

    <demo-block :title="'title7'">
      <van-tabs v-model:active="active7">
        <van-tab v-for="index in 2" :key="index">
          <template #title>
            <van-icon name="more-o"/>
            {{ 'tab' }}
          </template>
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title8'">
      <van-tabs v-model:active="active8" animated>
        <van-tab :title="'tab' + index" v-for="index in tab" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title9'">
      <van-tabs v-model:active="active9" swipeable>
        <van-tab :title="'tab' + index" v-for="index in tab" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'title10'">
      <van-tabs v-model:active="active10" scrollspy sticky>
        <van-tab :title="'tab' + index" v-for="index in 8" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="'beforeChange'">
      <van-tabs v-model:active="active11" :before-change="beforeChange">
        <van-tab :title="'tab' + index" v-for="index in 4" :key="index">
          {{ 'content' }} {{ index }}
        </van-tab>
      </van-tabs>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-tab {
  margin-bottom: 80vh;

  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .van-tab__panel {
    width: 100px;
    height: 100px;
    padding: 24px 20px;
    background-color: var(--van-background-color-light);
  }

  .van-tabs--card .van-tab__panel {
    background-color: transparent;
  }
}
</style>
