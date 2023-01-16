<script >

export default {
  data() {
    return {
      images:[
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
      ]
    };
  },
  methods: {
    onChange:function(){
      // this.$toast('message' + index);
    }
  },
}
</script>

<template>
  <div class="demo-swipe">

  <demo-block :title="'basicUsage'">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </demo-block>

  <!-- <demo-block :title="'title2'">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </demo-block>

  <demo-block :title="'title3'">
    <van-swipe indicator-color="white" @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </demo-block> -->
<!-- 
  <demo-block :title="'title4'">
    <van-swipe
      vertical
      :autoplay="3000"
      indicator-color="white"
      style="height: 200px"
      class="demo-swipe--vertical"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </demo-block>

  <demo-block :title="'title5'">
    <van-swipe :width="300" :loop="false" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </demo-block>

  <demo-block :title="'title6'">
    <van-swipe>
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </demo-block> -->
  </div>
</template>

<style lang="less">
.demo-swipe {
  padding-bottom: 30px;

  .van-swipe {
    &-item {
      color: var(--van-white);
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: var(--van-white);
      pointer-events: none;
    }
  }

  &--vertical {
    .van-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: var(--van-white);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
