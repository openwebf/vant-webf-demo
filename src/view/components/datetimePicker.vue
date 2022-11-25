<script>

export default {
  data() {
    return {
      date: new Date(2021, 0, 17),
      time: '12:00',
      datetime: new Date(2020, 0, 1),
      datehour: new Date(2020, 0, 1),
      monthDay: new Date(2020, 0, 1),
      yearMonth: new Date(2020, 0, 1),
      optionFilter: '12:00',
      sortColumnsDate: new Date(2020, 0, 1),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    }
  },
  methods: {
    filter: function (type, values) {
      if (type === 'minute') {
        return values.filter((value) => Number(value) % 5 === 0);
      }
      return values;
    },

    formatter: function (type, value) {
      if (type === 'year') {
        return value + 'year';
      }
      if (type === 'month') {
        return value + 'month';
      }
      if (type === 'day') {
        return value + 'day';
      }
      return value;
    }
  }
}


</script>

<template>

  <demo-block card :title="'dateType'">
    <van-datetime-picker
        v-model="date"
        type="date"
        :title="'dateType'"
        :min-date="minDate"
        :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="'yearMonthType'">
    <van-datetime-picker
        v-model="yearMonth"
        type="year-month"
        :title="'yearMonthType'"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
    />
  </demo-block>

  <demo-block card :title="'monthDayType'">
    <van-datetime-picker
        v-model="monthDay"
        type="month-day"
        :title="'monthDayType'"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
    />
  </demo-block>

  <demo-block card :title="'timeType'">
    <van-datetime-picker
        v-model="time"
        type="time"
        :title="'timeType'"
        :min-hour="10"
        :max-hour="20"
    />
  </demo-block>

  <demo-block card :title="'datetimeType'">
    <van-datetime-picker
        v-model="datetime"
        type="datetime"
        :title="'datetimeType'"
        :min-date="minDate"
        :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="'datehourType'">
    <van-datetime-picker
        v-model="datehour"
        type="datehour"
        :title="'datehourType'"
        :min-date="minDate"
        :max-date="maxDate"
    />
  </demo-block>

  <demo-block card :title="'optionFilter'">
    <van-datetime-picker
        v-model="optionFilter"
        type="time"
        :title="'optionFilter'"
        :filter="filter"
    />
  </demo-block>

  <demo-block card :title="'sortColumns'">
    <van-datetime-picker
        v-model="sortColumnsDate"
        type="date"
        :title="'sortColumns'"
        :columns-order="['month', 'day', 'year']"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
    />
  </demo-block>
</template>
