<script>


</script>

<template>
  <demo-block :title="'basicUsage'">
    <van-nav-bar :title="'title'"/>
  </demo-block>

  <demo-block :title="'showBack'">
    <van-nav-bar
        :title="'title'"
        :left-text="'back'"
        left-arrow
    />
  </demo-block>

  <demo-block :title="'rightButton'">
    <van-nav-bar
        :title="'title'"
        :left-text="'back'"
        :right-text="'button'"
        left-arrow

    />
  </demo-block>

  <demo-block :title="'useSlot'">
    <van-nav-bar :title="'title'" :left-text="'back'" left-arrow>
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>
  </demo-block>
</template>
