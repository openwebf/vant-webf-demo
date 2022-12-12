<script>
export default {
  data() {
    return {
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
    }
  },
  methods: {
    onUpdateValue: function (checked) {
      this.checked4 = checked;
    }
  }
}

</script>

<template>
  <div class="demo-switch">
    <demo-block :title="'basicUsage'">
      <van-switch v-model="checked" size="40"/>
    </demo-block>
    <demo-block :title="'disabled'">
      <van-switch v-model="checked" disabled/>
    </demo-block>

    <!--    <demo-block :title="'loadingStatus'">-->
    <!--      <van-switch v-model="checked" loading/>-->
    <!--    </demo-block>-->

    <demo-block :title="'customSize'">
      <van-switch v-model="checked2" size="24px"/>
    </demo-block>

    <demo-block :title="'customColor'">
      <van-switch
          v-model="checked3"
          active-color="#ee0a24"
          inactive-color="#dcdee0"
      />
    </demo-block>

    <demo-block :title="'customNode'">
      <van-switch v-model="checked3">
        <template #node>
          <div class="icon-wrapper">
            <van-icon :name="checked3 ? 'success' : 'cross'"/>
          </div>
        </template>
      </van-switch>
    </demo-block>

    <demo-block :title="'asyncControl'">
      <van-switch :model-value="checked4" @update:model-value="onUpdateValue"/>
    </demo-block>

    <demo-block :title="'withCell'">
      <van-cell center :title="'title'">
        <template #right-icon>
          <van-switch v-model="checked5" size="24"/>
        </template>
      </van-cell>
    </demo-block>
  </div>
</template>

<style lang="less">

.van-switch__node {
  width: var(--van-switch-node-size);
  height: var(--van-switch-node-size);
}

.demo-switch {
  .van-switch {
    margin-left: var(--van-padding-md);
  }

  .icon-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;

    .van-icon {
      line-height: 32px;
    }

    .van-icon-success {
      color: var(--van-blue);
    }

    .van-icon-cross {
      color: var(--van-gray-5);
    }
  }
}
</style>
