<script>
export default {
  data() {
    return {
      activeIcon: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
      inactiveIcon: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png", radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radioLabel: '1',
      radioShape: '1',
      radioIconSize: '1',
      radioHorizontal: '1',
    }
  }
}


</script>

<template>
  <div class="demo-radio">

    <demo-block :title="'basicUsage'">
      <van-radio-group v-model="radio1" class="demo-radio-group">
        <van-radio name="1">{{ 'radio' }} 1</van-radio>
        <van-radio name="2">{{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'horizontal'">
      <van-radio-group
          v-model="radioHorizontal"
          class="demo-radio-group"
          direction="horizontal"
      >
        <van-radio name="1">{{ 'radio' }} 1</van-radio>
        <van-radio name="2">{{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'disabled'">
      <van-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <van-radio name="1">{{ 'radio' }} 1</van-radio>
        <van-radio name="2">{{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'customShape'">
      <van-radio-group v-model="radioShape" class="demo-radio-group">
        <van-radio name="1" shape="square">{{ 'radio' }} 1</van-radio>
        <van-radio name="2" shape="square">{{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'customColor'">
      <van-radio-group v-model="radio3" class="demo-radio-group">
        <van-radio name="1" checked-color="#ee0a24">
          {{ 'radio' }} 1
        </van-radio>
        <van-radio name="2" checked-color="#ee0a24">
          {{ 'radio' }} 2
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'customIconSize'">
      <van-radio-group v-model="radioIconSize" class="demo-radio-group">
        <van-radio name="1" icon-size="24px"> {{ 'radio' }} 1</van-radio>
        <van-radio name="2" icon-size="24px"> {{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'customIcon'">
      <van-radio-group v-model="radio4" class="demo-radio-group">
        <van-radio name="1">
          {{ 'radio' }} 1
          <template #icon="{ checked }">
            <img :src="checked ? activeIcon : inactiveIcon"/>
          </template>
        </van-radio>
        <van-radio name="2">
          {{ 'radio' }} 2
          <template #icon="{ checked }">
            <img :src="checked ? activeIcon : inactiveIcon"/>
          </template>
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'disableLabel'">
      <van-radio-group v-model="radioLabel" class="demo-radio-group">
        <van-radio name="1" label-disabled>{{ 'radio' }} 1</van-radio>
        <van-radio name="2" label-disabled>{{ 'radio' }} 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block :title="'withCell'">
      <van-radio-group v-model="radio5">
        <van-cell-group inset>
          <van-cell clickable :title="'radio' + 1" @click="radio5 = '1'">
            <template #right-icon>
              <van-radio name="1"/>
            </template>
          </van-cell>
          <van-cell clickable :title="'radio' + 2" @click="radio5 = '2'">
            <template #right-icon>
              <van-radio name="2"/>
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-radio {
  &-group {
    padding: 0 16px;

    .van-radio {
      margin-bottom: 8px;
    }
  }

  img {
    height: 20px;
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
