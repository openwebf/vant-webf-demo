<template>
  <div class="demo-image">
    <demo-block :title="'basicUsage'">
      <van-row>
        <van-image width="100" height="100" :src="image"/>
      </van-row>
    </demo-block>

    <demo-block :title="'fitMode'">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <van-image :fit="fit"
                     width="96" height="97" :src="image"/>
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'position'">
      <van-row gutter="20">
        <van-col v-for="pos in positions1" span="8" :key="pos">
          <van-image
              :position="pos"
              width="96"
              height="97"
              fit="cover"
              :src="image"
          />
          <div class="text">cover</div>
          <div class="text">{{ pos }}</div>
        </van-col>
        <van-col v-for="pos in positions2" span="8" :key="pos">
          <van-image
              :position="pos"
              width="96"
              height="97"
              fit="contain"
              :src="image"
          />
          <div class="text">contain</div>
          <div class="text">{{ pos }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'round'">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <van-image round :fit="fit" width="96" height="97" :src="image"/>
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'loading'">
      <van-row gutter="20">
        <van-col span="8">
          <van-image width="96" height="97"/>
          <div class="text">{{ 'defaultTip' }}</div>
        </van-col>

        <van-col span="8">
          <van-image width="96" height="97">
            <template #loading>
              <van-loading type="spinner" size="20"/>
            </template>
          </van-image>
          <div class="text">{{ 'customTip' }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'error'">
      <van-row gutter="20">
        <van-col span="8">
          <van-image width="96" height="97" src="http://x"/>
          <div class="text">{{ 'defaultTip' }}</div>
        </van-col>

        <van-col span="8">
          <van-image width="96" height="97" src="http://x">
            <template #error>{{ 'loadFail' }}</template>
          </van-image>
          <div class="text">{{ 'customTip' }}</div>
        </van-col>
      </van-row>
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down'], positions1: ['left', 'center', 'right'],
      positions2: ['top', 'center', 'bottom'],

    }
  }
}

</script>
<style lang="less">
.demo-image {
  overflow-x: hidden;
  background-color: var(--van-background-2);

  .van-row {
    padding: 0 var(--van-padding-md);
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: var(--van-gray-7);
    font-size: 14px;
    text-align: center;
  }
}
</style>