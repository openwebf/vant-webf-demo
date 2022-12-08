<script>
export default {
  data(){
    return {
     username:'',
     password:'',
    }
  },
  methods:{
    onSubmit:function (values) {
      console.log('values');
    },
    onFailed:function (errorInfo) {
      console.log(errorInfo)
    }
  }
}

</script>

<template>
  <demo-block :title="'basicUsage'">
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          :label="'username'"
          :rules="[{ required: true, message: 'requireUsername' }]"
          :placeholder="'username'"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          :label="'password'"
          :rules="[{ required: true, message: 'requirePassword' }]"
          :placeholder="'password'"
        />
      </van-cell-group>

      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">
          {{ 'submit' }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>
