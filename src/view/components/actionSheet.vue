<script>
export default {
  data: () => {
    return {
      showBasic: false,
      showCancel: false,
      showTitle: false,
      showStatus: false,
      showDescription: false,
      simpleActions: [
        { name: "option1" },
        { name: "option2" },
        { name: "option3" },
      ],
      statusActions: [
        { name: "coloredOption", color: "#ee0a24" },
        { name: "disabledOption", disabled: true },
        { loading: true },
      ],
      actionsWithDescription: [
        { name: "option1" },
        { name: "option2" },
        { name: "option3", subname: "subname" },
      ],
      text: {
        "zh-CN": {
          option1: "选项一",
          basicUsage: "基础用法",
          option2: "选项二",
          option3: "选项三",
          subname: "描述信息",
          showCancel: "展示取消按钮",
          buttonText: "弹出菜单",
          customPanel: "自定义面板",
          description: "这是一段描述信息",
          optionStatus: "选项状态",
          coloredOption: "着色选项",
          disabledOption: "禁用选项",
          showDescription: "展示描述信息",
        },
        "en-US": {
          option1: "Option 1",
          option2: "Option 2",
          option3: "Option 3",
          subname: "Description",
          showCancel: "Show Cancel Button",
          buttonText: "Show ActionSheet",
          customPanel: "Custom Panel",
          description: "Description",
          optionStatus: "Option Status",
          coloredOption: "Colored Option",
          disabledOption: "Disabled Option",
          showDescription: "Show Description",
        },
      },
    };
  },
  methods: {
    t(key) {
      return this.text["zh-CN"][key];
    },
    onSelect(item) {
      this.showBasic = false;
      this.$toast({
        message: item.name,
        width: 200,
        height: 100,
      });
    },
    onCancel() {
      this.$toast("cancel");
    },
  },
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('basicUsage')" @click="showBasic = true" />
    <van-cell is-link :title="t('showCancel')" @click="showCancel = true" />
    <van-cell
      is-link
      :title="t('showDescription')"
      @click="showDescription = true"
    />
  </demo-block>

  <demo-block card :title="t('optionStatus')">
    <van-cell is-link :title="t('optionStatus')" @click="showStatus = true" />
  </demo-block>

  <!-- <demo-block card :title="t('customPanel')">
    <van-cell is-link :title="t('customPanel')" @click="showTitle = true" />
  </demo-block> -->

  <van-action-sheet
    v-model:show="showBasic"
    :actions="simpleActions"
    @select="onSelect"
  />

  <van-action-sheet
    v-model:show="showCancel"
    :actions="simpleActions"
    close-on-click-action
    :cancel-text="t('cancel')"
    @cancel="onCancel"
  />

  <van-action-sheet
    v-model:show="showDescription"
    :actions="actionsWithDescription"
    close-on-click-action
    :cancel-text="t('cancel')"
    :description="t('description')"
  />

  <van-action-sheet
    v-model:show="showStatus"
    close-on-click-action
    :actions="statusActions"
    :cancel-text="t('cancel')"
  />

  <!-- <van-action-sheet v-model:show="showTitle" :title="t('title')">
    <div class="demo-action-sheet-content">{{ "content" }}</div>
  </van-action-sheet> -->
</template>

<style lang="less">
.demo-action-sheet {
  &-content {
    padding: var(--van-padding-md) var(--van-padding-md)
      calc(var(--van-padding-md) * 10);
  }
}
</style>
