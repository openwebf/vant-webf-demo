<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      username1: '',
      password1: '',
      value1: "",
      value2: "",
      value3: '',
      value4: '',
      pattern: /\d{6}/,
      checked: true,
      groupChecked:[],
    }
  },
  methods: {
    onSubmit: function () {
      this.$refs.form.validate();
      console.log('onSubmit');
      console.log(this.username);
      console.log(this.password);
    },
    onSubmit2: function () {
      this.$refs.form2.validate();
      console.log('onSubmit');
    },
    onFailed: function (errorInfo) {
      console.log(errorInfo)
    },
    validator: function (val) {
      return /1\d{10}/.test(val);
    },
    // 校验函数可以直接返回一段错误提示
    validatorMessage: function (val) {
      return `${val} 不合法，请重新输入`
    },
    // 校验函数可以返回 Promise，实现异步校验
    asyncValidator: function (val) {
      return new Promise((resolve) => {
        console.log('验证中...');

        setTimeout(() => {
          resolve(val === '1234');
        }, 1000);
      })
    }
  }
}

</script>

<template>
  <demo-block :title="'basicUsage'">
    <van-form ref="form" @failed="onFailed">
      <van-cell-group inset>
        <van-field
            v-model="username1"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password1"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button @click="onSubmit" round block type="primary">
          提交
        </van-button>


        <van-form @failed="onFailed" ref="form2">
          <van-cell-group inset>
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="value1"
                name="pattern"
                placeholder="正则校验"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <!-- 通过 validator 进行函数校验 -->
            <van-field
                v-model="value2"
                name="validator"
                placeholder="函数校验"
                :rules="[{ validator, message: '请输入正确内容' }]"
            />
            <!-- 通过 validator 返回错误提示 -->
            <van-field
                v-model="value3"
                name="validatorMessage"
                placeholder="校验函数返回错误提示"
                :rules="[{ validator: validatorMessage }]"
            />
            <!-- 通过 validator 进行异步函数校验 -->
            <van-field
                v-model="value4"
                name="asyncValidator"
                placeholder="异步函数校验"
                :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
            />
          </van-cell-group>
          <div style="margin: 16px;">
            <van-button @click="onSubmit2" round block type="primary" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="checked" size="20"/>
          </template>
        </van-field>
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="checked" shape="square"/>
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="groupChecked" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
      </div>
    </van-form>


  </demo-block>
</template>
