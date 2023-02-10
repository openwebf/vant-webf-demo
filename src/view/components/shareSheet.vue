<script>
export default {
  methods: {
    onSelect(option) {
      this.$toast({
        message: option.name,
        width: 200,
        height: 100,
      });
      this.showBasic = false;
      this.showWithDesc = false;
      this.showMultiLine = false;
      this.showCustomIcon = false;
    },
    t(key) {
      return this.text["zh-CN"][key];
    },
  },
  data: () => {
    return {
      showBasic: false,
      showWithDesc: false,
      showMultiLine: false,
      showCustomIcon: false,

      options: [
        { name: "wechat", icon: "wechat" },
        { name: "weibo", icon: "weibo" },
        { name: "link", icon: "link" },
        { name: "poster", icon: "poster" },
        { name: "qrcode", icon: "qrcode" },
      ],
      multiLineOptions: [
        [
          { name: "wechat", icon: "wechat" },
          { name: "wechatMoments", icon: "wechat-moments" },
          { name: "weibo", icon: "weibo" },
          { name: "qq", icon: "qq" },
        ],
        [
          { name: "link", icon: "link" },
          { name: "poster", icon: "poster" },
          { name: "qrcode", icon: "qrcode" },
          { name: "weappQrcode", icon: "weapp-qrcode" },
        ],
      ],
      customIconOptions: [
        {
          name: "name",
          icon: "https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png",
        },
        {
          name: "name",
          icon: "https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png",
        },
        {
          name: "name",
          icon: "https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png",
        },
      ],
      optionsWithDesc: [
        { name: "wechat", icon: "wechat" },
        { name: "weibo", icon: "weibo" },
        {
          name: "link",
          icon: "link",
          description: "description",
        },
        { name: "poster", icon: "poster" },
        { name: "qrcode", icon: "qrcode" },
      ],
      text: {
        "zh-CN": {
          basicUsage: "基础用法",
          qq: "QQ",
          name: "名称",
          link: "复制链接",
          title: "立即分享给好友",
          weibo: "微博",
          wechat: "微信",
          poster: "分享海报",
          qrcode: "二维码",
          multiLine: "展示多行选项",
          showSheet: "显示分享面板",
          withDesc: "展示描述信息",
          customIcon: "自定义图标",
          description: "描述信息",
          weappQrcode: "小程序码",
          wechatMoments: "朋友圈",
        },
        "en-US": {
          qq: "QQ",
          name: "Name",
          link: "Link",
          title: "Share",
          weibo: "Weibo",
          wechat: "WeChat",
          poster: "Poster",
          qrcode: "Qrcode",
          multiLine: "Multi Line",
          showSheet: "Show ShareSheet",
          withDesc: "Show Description",
          customIcon: "Custom Icon",
          description: "Description",
          weappQrcode: "Weapp Qrcode",
          wechatMoments: "WeChat Moments",
        },
      },
    };
  },
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('showSheet')" @click="showBasic = true" />
    <van-share-sheet
      v-model:show="showBasic"
      :title="t('title')"
      :options="options"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('multiLine')">
    <van-cell is-link :title="t('showSheet')" @click="showMultiLine = true" />
    <van-share-sheet
      v-model:show="showMultiLine"
      :title="t('title')"
      :options="multiLineOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('customIcon')">
    <van-cell is-link :title="t('showSheet')" @click="showCustomIcon = true" />
    <van-share-sheet
      v-model:show="showCustomIcon"
      :options="customIconOptions"
      @select="onSelect"
    />
  </demo-block>

  <demo-block card :title="t('withDesc')">
    <van-cell is-link :title="t('showSheet')" @click="showWithDesc = true" />
    <van-share-sheet
      v-model:show="showWithDesc"
      :title="t('title')"
      :options="optionsWithDesc"
      :description="t('description')"
      @select="onSelect"
    />
  </demo-block>
</template>
