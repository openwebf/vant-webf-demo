
<template>
  <div class="demo-loading">

    <demo-block :title="'type'">
      <van-loading type="spinner"/>
    </demo-block>

    <demo-block :title="'color'">
      <van-loading type="spinner" color="#1989fa"/>
    </demo-block>

    <demo-block :title="'size'">
      <van-loading type="spinner" size="24"/>
    </demo-block>

    <demo-block :title="'text'">
      <van-loading size="24px" type="spinner">
        {{ 'loading' }}
      </van-loading>
    </demo-block>

    <demo-block :title="'vertical'">
      <van-loading size="24px" vertical type="spinner">
        {{ 'loading' }}
      </van-loading>
    </demo-block>

    <demo-block :title="'textColor'">
      <van-loading size="24px" vertical color="#0094ff" type="spinner">
        {{ 'loading' }}
      </van-loading>
      <van-loading size="24px" vertical text-color="#0094ff" type="spinner">
        {{ 'loading' }}
      </van-loading>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-loading {
  background: var(--van-background-color-light);

  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
