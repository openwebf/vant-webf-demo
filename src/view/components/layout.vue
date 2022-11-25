<template>
  <div class="demo-col">

    <demo-block :title="'basicUsage'">
      <van-row>
        <van-col style="background-color: #4fc08d" span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
         <van-col style="background-color: #4fc08d" span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col style="background-color: #4fc08d" span="4">span: 4</van-col>
        <van-col span="10" offset="4"> offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12" style="background-color: #4fc08d"> offset: 12, span: 12</van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'title2'">
      <van-row gutter="20">
        <van-col style="background-color: #4fc08d" span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col style="background-color: #4fc08d" span="8">span: 8</van-col>
      </van-row>
    </demo-block>

    <demo-block :title="'justify'">
      <van-row justify="center">
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
      </van-row>

      <van-row justify="end">
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
      </van-row>

      <van-row justify="space-between">
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
      </van-row>

      <van-row justify="space-around">
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col style="background-color: #4fc08d" span="6">span: 6</van-col>
      </van-row>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-col {
  background: var(--van-background-color-light);

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md);
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .van-col {
    margin-bottom: 10px;
    color: var(--van-white);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
