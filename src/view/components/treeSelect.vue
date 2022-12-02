<script>
const group1 = [
  {
    text: 'Delaware',
    id: 1,
  },
  {
    text: 'Florida',
    id: 2,
  },
  {
    text: 'Georqia',
    id: 3,
    disabled: true,
  },
];

const group2 = [
  {
    text: 'Alabama',
    id: 4,
  },
  {
    text: 'Kansas',
    id: 5,
  },
  {
    text: 'Louisiana',
    id: 6,
  },
];

const group3 = [
  {
    text: 'Alabama',
    id: 7,
  },
  {
    text: 'Kansas',
    id: 8,
  },
];

export const enUSData = [
  {
    text: 'Group 1',
    children: group1,
  },
  {
    text: 'Group 2',
    children: group2,
  },
  {
    text: 'Group 3',
    disabled: true,
    children: group3,
  },
];

export default {
  data() {
    return {
      activeId: 1,
      activeId2: 1,
      activeIds: [1, 2],
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
      items: enUSData,
      simpleItems: [{ text: 'Group 1' }, { text: 'Group 2' }],
      badgeItems: [{ text: 'Group 1', dot: true, badge: 4, }, { text: 'Group 1', dot: true, badge: 4, }],
    }
  }
}

</script>

<template>
  <demo-block :title="'radioMode'">
    <van-tree-select
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex"
        :items="items"
    />
  </demo-block>

  <demo-block :title="'multipleMode'">
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex2"
        :items="items"
    />
  </demo-block>

  <demo-block :title="'customContent'">
    <van-tree-select
        v-model:main-active-index="activeIndex3"
        height="55vw"
        :items="simpleItems"
    >
      <template #content>
        <van-image
            v-if="activeIndex3 === 0"
            :show-loading="false"
            :src="'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'"
        />
        <van-image
            v-if="activeIndex3 === 1"
            :show-loading="false"
            :src="'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'"
        />
      </template>
    </van-tree-select>
  </demo-block>

  <demo-block :title="'showBadge'">
    <van-tree-select
        v-model:active-id="activeId2"
        v-model:main-active-index="activeIndex4"
        height="55vw"
        :items="badgeItems"
    />
  </demo-block>
</template>
