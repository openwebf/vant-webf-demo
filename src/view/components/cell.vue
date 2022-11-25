<template>
  <div class="demo-cell">
    <demo-block :title="'basicUsage'">
      <van-cell-group>
        <van-cell :title="'cell'" :border="false" required :value="'content'"/>
        <van-cell :title="'cell'" :value="'content'" :label="'desc'"/>
      </van-cell-group>
    </demo-block>
    <demo-block :title="'insetGrouped'">
      <van-cell-group inset>
        <van-cell :title="'cell'" :value="'content'"/>
        <van-cell :title="'cell'" :value="'content'" :label="'desc'"/>
      </van-cell-group>
    </demo-block>

    <demo-block :title="'largeSize'">
      <van-cell :title="'cell'" :value="'content'" size="large"/>
      <van-cell
          :title="'cell'"
          :value="'content'"
          size="large"
          :label="'desc'"
      />
    </demo-block>

    <demo-block :title="'showIcon'">
      <van-cell :title="'cell'" :value="'content'" icon="location-o"/>
    </demo-block>

    <demo-block :title="'valueOnly'">
      <van-cell :value="'content'"/>
    </demo-block>

    <demo-block :title="'showArrow'">
      <van-cell :title="'cell'" is-link/>
      <van-cell :title="'cell'" is-link :value="'content'"/>
      <van-cell
          :title="'cell'"
          is-link
          arrow-direction="down"
          :value="'content'"
      />
    </demo-block>

    <demo-block :title="'router'">
      <van-cell
          :title="'urlRoute'"
          is-link
          url="https://github.com/vant-ui/vant"
      />
      <van-cell :title="'vueRoute'" is-link to="index"/>
    </demo-block>

    <demo-block :title="'groupTitle'">
      <van-cell-group :title="`${'group'} 1`">
        <van-cell :title="'cell'" :value="'content'"/>
      </van-cell-group>
      <van-cell-group :title="`${'group'} 2`">
        <van-cell :title="'cell'" :value="'content'"/>
      </van-cell-group>
    </demo-block>

    <demo-block :title="'useSlots'">
      <van-cell :value="'content'" is-link>
        <template #title>
          <span class="custom-title">{{ 'cell' }}</span>
          <van-tag type="danger">{{ 'tag' }}</van-tag>
        </template>
      </van-cell>

      <van-cell icon="shop-o" :title="'cell'">
        <template #right-icon>
          <van-icon name="search" class="search-icon"/>
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="'verticalCenter'">
      <van-cell
          center
          :title="'cell'"
          :value="'content'"
          :label="'desc'"
      />
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
