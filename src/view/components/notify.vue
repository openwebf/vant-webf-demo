<script>
import { Notify } from "vant";

export default {
  data() {
    return {
      show: false,
      showEmbedded: false,
    };
  },
  methods: {
    showOverlay() {
      this.show = true;
    },
    showEmbeddedContent() {
      this.showEmbedded = true;
    },
    showNotify() {
      Notify("content");
    },

    showCustomColor() {
      Notify({
        color: "#ad0000",
        message: "customColor",
        background: "#ffe1e1",
      });
    },

    showCustomDuration() {
      Notify({
        message: "customDuration",
        duration: 1000,
      });
    },

    showCustomPosition() {
      Notify({
        message: "customPosition",
        position: "bottom",
      });
    },

    showType(type) {
      Notify({
        message: "content",
        type,
      });
    },

    showComponentCall() {
      this.show.value = true;
      setTimeout(() => {
        this.show.value = false;
      }, 2000);
    },
  },
};
</script>

<template>
  <!-- <demo-block card :title="'basicUsage'">
    <van-cell is-link :title="'basicUsage'" @click="showNotify" />
  </demo-block> -->

  <demo-block card :title="'notifyType'">
    <van-cell is-link :title="'primary'" @click="showType('primary')" />
    <van-cell is-link :title="'success'" @click="showType('success')" />
    <van-cell is-link :title="'danger'" @click="showType('danger')" />
    <van-cell is-link :title="'warning'" @click="showType('warning')" />
  </demo-block>

  <demo-block card :title="'customNotify'">
    <van-cell is-link :title="'customColor'" @click="showCustomColor" />
    <van-cell is-link :title="'customPosition'" @click="showCustomPosition" />
    <van-cell is-link :title="'customDuration'" @click="showCustomDuration" />
  </demo-block>

  <demo-block card :title="'componentCall'">
    <van-cell is-link :title="'componentCall'" @click="showComponentCall" />

    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>{{ "content" }}</span>
    </van-notify>
  </demo-block>
</template>
