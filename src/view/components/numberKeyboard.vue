<script>
export default {
  data() {
    return {
      close: '完成',
      input: '输入',
      title: '键盘标题',
      button1: '弹出默认键盘',
      button2: '弹出带右侧栏的键盘',
      button3: '弹出身份证号键盘',
      button4: '弹出带标题的键盘',
      button5: '弹出配置多个按键的键盘',
      button6: '弹出配置随机数字的键盘',
      bindValue: '双向绑定',
      clickToInput: '点此输入',
      extraKey: '左下角按键内容',
      multiExtraKey: '配置多个按键',
      randomKeyOrder: '随机数字键盘',
      value: '',
      keyboard: 'default',
    }
  },
  methods: {
    onInput(value) {
      // this.value = value;
    },
    onDelete() {
      // this.value = this.value.slice(0, -1);
    },
    t(key) {
      return this[key];
    },
  },
}

</script>

<template>
  <div class="demo-number-keyboard">

    <demo-block card>
      <van-cell
          is-link
          :title="t('button1')"
          @touchstart.stop="keyboard = 'default'"
      />
      <van-cell
          is-link
          :title="t('button2')"
          @touchstart.stop="keyboard = 'custom'"
      />
      <van-cell
          is-link
          :title="t('button3')"
          @touchstart.stop="keyboard = 'extraKey'"
      />
      <van-cell
          is-link
          :title="t('button4')"
          @touchstart.stop="keyboard = 'title'"
      />
      <van-cell
          is-link
          :title="t('button5')"
          @touchstart.stop="keyboard = 'multiExtraKey'"
      />
      <van-cell
          is-link
          :title="t('button6')"
          @touchstart.stop="keyboard = 'randomKeyOrder'"
      />
      <van-field
          v-model="value"
          readonly
          clickable
          :label="t('bindValue')"
          :placeholder="t('clickToInput')"
          @touchstart.stop="keyboard = 'bindValue'"
      />
    </demo-block>

    <van-number-keyboard
        :show="keyboard === 'default'"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        :show="keyboard === 'custom'"
        :close-button-text="t('close')"
        theme="custom"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        :show="keyboard === 'extraKey'"
        :close-button-text="t('close')"
        extra-key="X"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        :show="keyboard === 'title'"
        :close-button-text="t('close')"
        :title="t('title')"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        :show="keyboard === 'multiExtraKey'"
        :close-button-text="t('close')"
        theme="custom"
        :extra-key="['00', '.']"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        v-if="true"
        :show="keyboard === 'randomKeyOrder'"
        random-key-order
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
    />

    <van-number-keyboard
        v-model="value"
        :show="keyboard === 'bindValue'"
        maxlength="6"
        @blur="keyboard = ''"
    />
  </div>
</template>

<style lang="less">
.demo-number-keyboard {
  padding-bottom: 300px;

  .van-number-keyboard__body {
    margin-bottom: 300px;
  }

  .van-button {
    margin-left: var(--van-padding-md);
  }
}
</style>
