<script>


export default {
  data() {
    return {
      active1: [0],
      active2: 0,
      active3: [],
      active4: [],
      active5: ['1'],
    }
  },
  methods: {
    openAll: function () {
      this.$refs.collapse.toggleAll?.(true);
    },
    toggleAll: function () {
      this.$refs.collapse.toggleAll?.();
    }
  }
}


</script>

<template>
  <div class="demo-collapse">

    <demo-block :title="'basicUsage'">
      <van-collapse v-model="active1">
        <van-collapse-item :title="'title' + 1">
          {{ 'text1' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 2">
          {{ 'text2' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 3">
          {{ 'text3' }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="'accordion'">
      <van-collapse v-model="active2" accordion>
        <van-collapse-item :title="'title' + 1">
          {{ 'text1' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 2">
          {{ 'text2' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 3">
          {{ 'text3' }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="'disabled'">
      <van-collapse v-model="active3">
        <van-collapse-item :title="'title' + 1">
          {{ 'text1' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 2" disabled>
          {{ 'text2' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 3" disabled>
          {{ 'text3' }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="'titleSlot'">
      <van-collapse v-model="active4">
        <van-collapse-item>
          <template #title>
            {{ 'title' + 1 }}
            <van-icon name="question-o"/>
          </template>
          {{ 'text1' }}
        </van-collapse-item>
        <van-collapse-item
            :title="'title' + 2"
            :value="'content'"
            icon="shop-o"
        >
          {{ 'text2' }}
        </van-collapse-item>
      </van-collapse>
    </demo-block>

    <demo-block :title="'toggleAll'">
      <van-collapse v-model="active5" ref="collapse">
        <van-collapse-item :title="'title' + 1" name="1">
          {{ 'text1' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 2" name="2">
          {{ 'text2' }}
        </van-collapse-item>
        <van-collapse-item :title="'title' + 3" name="3">
          {{ 'text3' }}
        </van-collapse-item>
      </van-collapse>

      <div class="demo-collapse-buttons">
        <van-button type="primary" @click="openAll">
          {{ 'openAll' }}
        </van-button>
        <van-button type="primary" @click="toggleAll">
          {{ 'inverse' }}
        </van-button>
      </div>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: var(--van-blue);
    font-size: 15px;
    vertical-align: -3px;
  }

  &-buttons {
    margin-top: var(--van-padding-md);

    .van-button {
      margin-left: var(--van-padding-md);
    }
  }
}
</style>


