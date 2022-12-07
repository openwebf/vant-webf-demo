<script setup lang="ts">

</script>

<template>
  <demo-block :title="'basicUsage'">
    <van-grid>
      <van-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="'text'" />
    </van-grid>
  </demo-block>

  <demo-block :title="'columnNum'">
    <van-grid :column-num="3">
      <van-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="'text'" />
    </van-grid>
  </demo-block>

  <demo-block :title="'customContent'">
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image fit="contain" :src="'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'" />
      </van-grid-item>
      <van-grid-item>
        <van-image fit="contain" :src="'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'" />
      </van-grid-item>
      <van-grid-item>
        <van-image fit="contain" :src="'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg'" />
      </van-grid-item>
    </van-grid>
  </demo-block>

  <demo-block :title="'square'">
    <van-grid square>
      <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="'text'" />
    </van-grid>
  </demo-block>

  <demo-block :title="'gutter'">
    <van-grid :gutter="10">
      <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="'text'" />
    </van-grid>
  </demo-block>

  <demo-block :title="'horizontal'">
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item icon="photo-o" :text="'text'" />
      <van-grid-item icon="photo-o" :text="'text'" />
      <van-grid-item icon="photo-o" :text="'text'" />
    </van-grid>
  </demo-block>

  <demo-block :title="'route'">
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" :text="'vueRoute'" to="/" />
      <van-grid-item
        icon="search"
        :text="'urlRoute'"
        url="https://github.com/vant-ui/vant"
      />
    </van-grid>
  </demo-block>

  <demo-block :title="'showBadge'">
    <van-grid :column-num="2">
      <van-grid-item icon="home-o" :text="'text'" dot />
      <van-grid-item icon="search" :text="'text'" badge="99+" />
    </van-grid>
  </demo-block>
</template>
