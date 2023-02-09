<script>
export default {
  data: () => {
    return {
      show: false,
      text: {
        "zh-CN": {
            basicUsage: "基础用法",
          title: "标题",
          alert1: "提示弹窗",
          alert2: "提示弹窗（无标题）",
          confirm: "确认弹窗",
          content1: "代码是写出来给人看的，附带能在机器上运行。",
          content2:
            "生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",
          content3:
            "如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",
          beforeClose: "异步关闭",
          roundButton: "圆角按钮样式",
          componentCall: "组件调用",
        },
        "en-US": {
          title: "Title",
          alert1: "Alert",
          alert2: "Alert without title",
          confirm: "Confirm dialog",
          content1: "Content",
          content2: "Content",
          content3: "Content",
          beforeClose: "Before Close",
          roundButton: "Round Button Style",
          componentCall: "Component Call",
        },
      },
    };
  },
  methods: {
    t: function (value) {
      return this.text["zh-CN"][value];
    },
    onClickAlert: function () {
      this.$dialog.alert({
        title: this.t("title"),
        message: this.t("content1"),
        width:100,
        height:100,
      });
    },
    onClickAlert2: function () {
      this.$dialog.alert({
        message: this.t("content2"),
        width:200,
        height:200,
      });
    },
    onClickRound: function () {
      this.$dialog.alert({
        theme: "round-button",
        title: this.t("title"),
        message: this.t("content1"),
        width:200,
        height:200,
      });
    },
    onClickRound2: function () {
      this.$dialog.alert({
        theme: "round-button",
        message: this.t("content2"),
        width:200,
        height:200,
      });
    },
    onClickConfirm: function () {
      this.$dialog.confirm({
        title: this.t("title"),
        message: this.t("content3"),
        width:200,
        height:200,
      });
    },
    onClickBeforeClose: function () {
      const beforeClose = (action) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(action === "confirm"), 1000);
        });

      this.$dialog.confirm({
        title: this.t("title"),
        message: this.t("content3"),
        beforeClose,
        width:200,
        height:200,
      });
    },
  },
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('alert1')" @click="onClickAlert" />
    <van-cell is-link :title="t('alert2')" @click="onClickAlert2" />
    <van-cell is-link :title="t('confirm')" @click="onClickConfirm" />
  </demo-block>

  <demo-block card :title="t('roundButton')">
    <van-cell is-link :title="t('alert1')" @click="onClickRound" />
    <van-cell is-link :title="t('alert2')" @click="onClickRound2" />
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <van-cell is-link :title="t('beforeClose')" @click="onClickBeforeClose" />
  </demo-block>

  <demo-block card :title="t('componentCall')">
    <van-cell is-link :title="t('componentCall')" @click="show = true" />
    <!-- <van-dialog
      v-model:show="show"
      :title="t('title')"
      show-cancel-button
      :lazy-render="false"
    >
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
    </van-dialog> -->
  </demo-block>
</template>

<style lang="less">
.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
