<script>


export default {
  methods: {
    cdnURL: function (path) {

      return `https://fastly.jsdelivr.net/npm/@vant/assets/${path}`;
    },
    showLoadingToast: function (loadingType) {
      this.$toast.loading({
        forbidClick: true,
        message: 'loading',
        loadingType,
      });
    },

    showSuccessToast: function () {
      this.$toast.success('text2');
    },

    showFailToast: function () {
      this.$toast.fail('text3');
    },

    showTopToast: function () {
      this.$toast({
        message: 'positionTop',
        position: 'top',
      });
    },

    showBottomToast: function () {
      this.$toast({
        message: 'positionBottom',
        position: 'bottom',
      });
    },

    showIconToast: function () {
      this.$toast({
        message: 'customIcon',
        icon: 'like-o',
      });
    },

    showImageToast: function () {
      this.$toast({
        message: 'customImage',
        icon: this.cdnURL('logo.png'),
      });
    },

    showCustomizedToast: function () {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: 'text4' + 3,
      });

      let second = 3;
      const timer = setInterval(function () {
        second--;
        if (second) {
          toast.message = 'text4' + second;
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
}

</script>

<template>
  <demo-block card :title="'basicUsage'">
    <van-cell is-link :title="'title1'" @click="this.$toast('text')"/>
    <van-cell is-link :title="'title2'" @click="showLoadingToast()"/>
    <van-cell is-link :title="'success'" @click="showSuccessToast"/>
    <van-cell is-link :title="'fail'" @click="showFailToast"/>
  </demo-block>

  <demo-block card :title="'customIcon'">
    <van-cell is-link :title="'customIcon'" @click="showIconToast"/>
    <van-cell is-link :title="'customImage'" @click="showImageToast"/>
    <van-cell
        is-link
        :title="'loadingType'"
        @click="showLoadingToast('spinner')"
    />
  </demo-block>

  <demo-block card :title="'customPosition'">
    <van-cell is-link :title="'positionTop'" @click="showTopToast"/>
    <van-cell is-link :title="'positionBottom'" @click="showBottomToast"/>
  </demo-block>

  <demo-block card :title="'updateMessage'">
    <van-cell
        is-link
        :title="'updateMessage'"
        @click="showCustomizedToast"
    />
  </demo-block>
</template>
