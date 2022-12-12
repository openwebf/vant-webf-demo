<script>
export default {
  data() {
    return {
      showPicker: false,
      fieldValue: '',
      city: '城市',
      cascade: '级联选择',
      withPopup: '搭配弹出层使用',
      chooseCity: '选择城市',
      showToolbar: '展示顶部栏',
      dateColumns: [{
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2,
      },
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1,
        }],
      defaultIndex: '默认选中项',
      disableOption: '禁用选项',
      cascadeColumns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }],
            },
          ],
        },
      ],
      multipleColumns: '多列选择',
      setColumnValues: '动态设置选项',
      customChildrenKey: '自定义 Columns 结构',
      customChildrenColumns: [
        {
          cityName: '浙江',
          cities: [
            {
              cityName: '杭州',
              cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
            },
            {
              cityName: '温州',
              cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
            },
          ],
        },
        {
          cityName: '福建',
          cities: [
            {
              cityName: '福州',
              cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
            },
            {
              cityName: '厦门',
              cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
            },
          ],
        },

      ],
      textColumns: [
        '杭州',
        '宁波',
        '温州',
        '绍兴',
        '湖州',
        '嘉兴',
        '金华',
        '衢州',
      ],
      disabledColumns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' },
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
      },

      customFieldName: {
        text: 'cityName',
        children: 'cities',
      },
    }
  },

  methods: {

    t: function (value) {
      return this[value];
    },
    // onChange1: function (values) {
    // },
    // onChange2: function (values) {
    //   this.$refs.picker.value.setColumnValues(1, this.t('column3')[values[0]]);
    // },
    // onConfirm: function (value, index) {
    //   // Toast(t('toastContent', value, index));
    // },
    //
    // onCancel: function () { },
    //
    // onCancel2: function () {
    //   this.showPicker = false;
    // },
    //
    // onClickField: function () {
    //   this.showPicker = true;
    // },
    //
    // onConfirm2: function (value) {
    //   this.showPicker = false;
    //   this.fieldValue = value;
    // },
  }
}


// const picker = ref();
//
//
// const columns = computed(() => {
//   const column = t('column3');
//   return [
//     {
//       values: Object.keys(column),
//       className: 'column1',
//     },
//     {
//       values: column[Object.keys(column)[0]],
//       className: 'column2',
//       defaultIndex: 2,
//     },
//   ];
// });


</script>

<template>
  <demo-block card :title="'basicUsage'">
    <van-picker
    />
  </demo-block>

<!--  <demo-block card :title="t('defaultIndex')">-->
<!--    <van-picker-->
<!--        :title="t('title')"-->
<!--        :columns="t('textColumns')"-->
<!--        :default-index="2"-->
<!--        @change="onChange1"-->
<!--    />-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('multipleColumns')">-->
<!--    <van-picker-->
<!--        :title="t('title')"-->
<!--        :columns="t('dateColumns')"-->
<!--        @cancel="onCancel"-->
<!--        @confirm="onConfirm"-->
<!--    />-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('cascade')">-->
<!--    <van-picker :title="t('title')" :columns="t('cascadeColumns')"/>-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('disableOption')">-->
<!--    <van-picker :title="t('title')" :columns="t('disabledColumns')"/>-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('setColumnValues')">-->
<!--    <van-picker-->
<!--        ref="picker"-->
<!--        :title="t('title')"-->
<!--        @change="onChange2"-->
<!--    />-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('loadingStatus')">-->
<!--    <van-picker  :title="t('title')" />-->
<!--  </demo-block>-->

<!--  <demo-block card :title="t('withPopup')">-->
<!--    <van-field-->
<!--        v-model="fieldValue"-->
<!--        is-link-->
<!--        readonly-->
<!--        :label="t('city')"-->
<!--        :placeholder="t('chooseCity')"-->
<!--        @click="onClickField"-->
<!--    />-->
<!--    <van-popup v-model:show="showPicker" round position="bottom">-->
<!--      <van-picker-->
<!--          :title="t('title')"-->
<!--          :columns="t('textColumns')"-->
<!--          @cancel="onCancel2"-->
<!--          @confirm="onConfirm2"-->
<!--      />-->
<!--    </van-popup>-->
<!--  </demo-block>-->
<!--  <demo-block card :title="t('customChildrenKey')">-->
<!--    <van-picker-->
<!--        :title="t('title')"-->
<!--        :columns="t('customChildrenColumns')"-->
<!--        :columns-field-names="customFieldName"-->
<!--    />-->
<!--  </demo-block>-->
</template>
