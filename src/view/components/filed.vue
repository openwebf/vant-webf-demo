<script>
export default {
  data() {
    return {
      value: '11111',
      text: '',
      tel: '',
      digit: '',
      number: '',
      password: '',
      value1: '',
      value2: '',
      username: '',
      phone: '',
      sms: '',
      value11: '11',
      value22: '222',
      message: '',
    }
  },
  methods: {
    formatter: function (value) {

      return value.replace(/\d/g, '')
    }

  }
}
</script>
<template>
  <div class="filed-demo">

    <demo-block :title="'basicUsage'">
      <van-cell-group inset>
        <van-field
            v-model="value"
            :label="'label'"
            :placeholder="'placeholder'"
        />
      </van-cell-group>
      <van-cell-group inset>
        <!-- 输入任意文本 -->
        <van-field v-model="text" label="文本"/>
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" type="tel" label="手机号"/>
        <!-- 允许输入正整数，调起纯数字键盘 -->
        <van-field v-model="digit" type="digit" label="整数"/>
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field v-model="number" type="number" label="数字"/>
        <!-- 输入密码 -->
        <van-field v-model="password" type="password" label="密码"/>
      </van-cell-group>
      <van-cell-group inset>
        <van-field label="文本" model-value="输入框只读" readonly/>
        <van-field label="文本" model-value="输入框已禁用" disabled/>
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="value1"
            label="文本"
            left-icon="smile-o"
            right-icon="warning-o"
            placeholder="显示图标"
        />
        <van-field
            v-model="value2"
            clearable
            label="文本"
            left-icon="music-o"
            placeholder="显示清除图标"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="username"
            error
            required
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="phone"
            required
            label="手机号"
            placeholder="请输入手机号"
            error-message="手机号格式错误"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="value11"
            label="文本"
            :formatter="formatter"
            placeholder="在输入时执行格式化"
        />
        <van-field
            v-model="value22"
            label="文本"
            :formatter="formatter"
            format-trigger="onBlur"
            placeholder="在失焦时执行格式化"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="message"
            rows="1"
            autosize
            label="留言"
            type="textarea"
            placeholder="请输入留言"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
            v-model="message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
        />
      </van-cell-group>

    </demo-block>
  </div>
</template>

<style>
.filed-demo {
  padding: 16px;
}
</style>