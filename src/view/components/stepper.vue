<script>

export default {
  data() {
    return {
      basicUsage:'基本用法',
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      roundTheme: '圆角风格',
      customSize: '自定义大小',
      beforeChange_txt: '异步变更',
      disableInput: '禁用输入框',
      decimalLength: '固定小数位数',
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1,
      stepperRound: 1,
      disabledInput: 1,

    }
  },
  methods: {
    t: function (key) {
      console.log(key)
      return this[key];
    },
    beforeChange: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
    }
  }
}

</script>

<template>
  <demo-block card>
        <van-stepper v-model="stepper1"/>
  </demo-block>
</template>
