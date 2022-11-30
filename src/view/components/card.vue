<script>
export default {
  data(){
    return{
      imageURL: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    }
  }
}
</script>

<template>
  <div class="demo-card">

    <demo-block :title="'basicUsage'">
      <van-card
          num="2"
          price="2.00"
          :desc="'desc'"
          :title="'title'"
          :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="'discountInfo'">
      <van-card
          num="2"
          price="2.00"
          origin-price="10.00"
          :tag="'tag'"
          :desc="'desc'"
          :title="'title'"
          :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="'customContent'">
      <van-card
          num="2"
          price="2.00"
          :desc="'desc'"
          :title="'title'"
          :thumb="imageURL"
      >
        <template #tags>
          <van-tag plain type="danger" style="margin-right: 5px">
            {{ 'tag' }}
          </van-tag>
          <van-tag plain type="danger">{{ 'tag' }}</van-tag>
        </template>

        <template #footer>
          <van-button round size="mini">
            {{ 'button' }}
          </van-button>
          <van-button round size="mini">
            {{ 'button' }}
          </van-button>
        </template>
      </van-card>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-card {
  background-color: var(--van-background-color-light);
}
</style>
