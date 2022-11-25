<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checkboxIcon: true,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
      inactiveIcon: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
    }
  },
  methods: {
   checkAll() {
      this.$refs.group.toggleAll(true);
    },
    toggleAll() {
      this.$refs.group.toggleAll();
    },

  }
}


// const group = ref < CheckboxGroupInstance > ();
// const [refs, setRefs] = useRefs < CheckboxInstance > ();
//
// const toggle = (index: number) => {
//   refs.value[index].toggle();
// };
//

</script>

<template>
  <div class="demo-checkbox">
    <demo-block :title="'basicUsage'">
      <van-checkbox v-model="checkbox1">{{ 'checkbox' }}</van-checkbox>
    </demo-block>

    <demo-block :title="'disabled'">
      <van-checkbox :model-value="false" disabled>
        {{ 'checkbox' }}
      </van-checkbox>
      <van-checkbox :model-value="true" disabled>
        {{ 'checkbox' }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="'customShape'">
      <van-checkbox v-model="checkboxShape" shape="square">
        {{ 'customShape' }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="'customColor'">
      <van-checkbox v-model="checkbox2" checked-color="#ee0a24">
        {{ 'customColor' }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="'customIconSize'">
      <van-checkbox v-model="checkboxIcon" icon-size="24px">
        {{ 'customIconSize' }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="'customIcon'">
      <van-checkbox v-model="checkbox3">
        {{ 'customIcon' }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon"/>
        </template>
      </van-checkbox>
    </demo-block>

    <demo-block :title="'disableLabel'">
      <van-checkbox v-model="checkboxLabel" label-disabled>
        {{ 'checkbox' }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="'title3'">
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">{{ 'checkbox' }} a</van-checkbox>
        <van-checkbox name="b">{{ 'checkbox' }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="'horizontal'">
      <van-checkbox-group v-model="horizontalResult" direction="horizontal">
        <van-checkbox name="a">{{ 'checkbox' }} a</van-checkbox>
        <van-checkbox name="b">{{ 'checkbox' }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="'title4'">
      <van-checkbox-group v-model="result2" :max="2">
        <van-checkbox name="a">{{ 'checkbox' }} a</van-checkbox>
        <van-checkbox name="b">{{ 'checkbox' }} b</van-checkbox>
        <van-checkbox name="c">{{ 'checkbox' }} c</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="'toggleAll'">
      <van-checkbox-group v-model="checkAllResult" ref="group">
        <van-checkbox name="a">{{ 'checkbox' }} a</van-checkbox>
        <van-checkbox name="b">{{ 'checkbox' }} b</van-checkbox>
        <van-checkbox name="c">{{ 'checkbox' }} c</van-checkbox>
      </van-checkbox-group>

      <div class="demo-checkbox-buttons">
        <van-button type="primary" @click="checkAll">
          {{ 'checkAll' }}
        </van-button>
        <van-button type="primary" @click="toggleAll">
          {{ 'inverse' }}
        </van-button>
      </div>
    </demo-block>

    <demo-block :title="'title5'">
      <van-checkbox-group v-model="result3"  >
        <van-cell-group inset>
          <van-cell
              v-for="(item, index) in list"
              clickable
              :key="index"
              :title="`${'checkbox'} ${item}`"
              @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox  :name="item" @click.stop/>
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-checkbox {
  .van-checkbox {
    margin: 0 0 8px 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: var(--van-padding-md);

    .van-button {
      margin-left: var(--van-padding-md);
    }
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
