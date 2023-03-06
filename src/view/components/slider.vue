<script>
export default {
  data() {
    return {
      value1: 50,
      value2: [20, 60],
      value3: 0,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
      value8: 50,
      value9: [20, 60],
    }
  },
  methods: {
    onChange: function () {

    }
  }

}

</script>

<template>
  <div class="demo-slider">

    <demo-block :title="'title1'">
      <van-slider v-model="value1" @change="onChange" button-size="24px"/>
    </demo-block>

    <demo-block :title="'title2'">
      <van-slider range v-model="value2" @change="onChange" button-size="24px"/>
    </demo-block>

    <demo-block :title="'title3'">
      <van-slider v-model="value3" :min="-50" :max="50" @change="onChange" button-size="24px"/>
    </demo-block>

    <demo-block :title="'title4'">
      <van-slider v-model="value4" disabled button-size="24px"/>
    </demo-block>

    <demo-block :title="'title5'">
      <van-slider v-model="value5" :step="10" @change="onChange" button-size="24px"/>
    </demo-block>

    <demo-block :title="'customStyle'">
      <van-slider
          v-model="value6"
          bar-height="4px"
          active-color="#ee0a24"
          @change="onChange"
          button-size="24px"
      />
    </demo-block>

    <demo-block :title="'customButton'">
      <van-slider v-model="value7" active-color="#ee0a24" button-size="24px">
        <template #button>
          <div class="custom-button">{{ value7 }}</div>
        </template>
      </van-slider>
    </demo-block>

    <demo-block :title="'vertical'">
      <div :style="{ height: '150px', paddingLeft: '30px' }">
        <van-slider v-model="value8" vertical @change="onChange" button-size="24px"/>
        <van-slider
            button-size="24px"
            v-model="value9"
            range
            vertical
            style="margin-left: 100px"
            @change="onChange"
        />
      </div>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-slider {
  background: var(--van-background-color-light);
  user-select: none;

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md) 20px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: var(--van-red);
    border-radius: 100px;
  }
}
</style>
