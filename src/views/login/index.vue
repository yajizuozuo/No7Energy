<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <p class="imgBox">
          <img src="./logo.png">
        </p>
        <h3 class="title">
          <!-- {{ $t('login.title') }} -->
          Welcome to login
        </h3>
      </div>

      <el-form-item prop="employeeNo">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="employeeNo"
          v-model="loginForm.employeeNo"
          placeholder="请输入姓名"
          name="employeeNo"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-form-item prop="veriCode">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="veriCode"
          v-model="loginForm.veriCode"
          placeholder="请输入验证码"
          name="veriCode"
          type="text"
          tabindex="1"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-Captcha-Img" @click="showCaptchaImg">
          <img :src="imageSrc">
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
        {{ $t('login.logIn') }}
      </el-button>
      <!-- <div style="position:relative"> -->
      <!-- <div class="tips">
          <span>{{ $t('login.username') }} : admin</span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">
            {{ $t('login.username') }} : editor
          </span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div> -->

      <!-- <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          {{ $t('login.thirdparty') }}
        </el-button> -->
      <!-- </div> -->
    </el-form>

    <!-- <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t('login.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog> -->
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import { getImage } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入不低于6位的密码'))
      } else {
        callback()
      }
    }
    const validateVeriCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        employeeNo: 'S00023',
        password: '123456',
        veriCode: ''
      },
      loginRules: {
        employeeNo: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        veriCode: [{ required: true, trigger: 'blur', validator: validateVeriCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      imageSrc: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    this.showCaptchaImg()
    if (this.loginForm.employeeNo === '') {
      this.$refs.employeeNo.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    showCaptchaImg() {
      getImage()
        .then(res => {
          console.log(res)
          if (res.code === 0) {
            this.imageSrc = `data:image/jpeg;base64,${res.value}`
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then((data) => {
              console.log(data)
              if (data.code === 0) {
                this.$message({
                  message: data.msg,
                  type: 'error',
                  duration: 5 * 1000
                })
                // alert(data.msg)
              }
              if (data.code === 1) {
                sessionStorage.setItem('token', data.data.token)
                this.$router.push({ path: this.redirect || '/dashboard' })
              }

              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
@import '@/styles/variables.scss';
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
$text_color:#666;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 45px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $text_color;
      height: 45px;
      caret-color: #333;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(103,158,253,1);
    // border-image:linear-gradient(to right, rgba(103,158,253,1), rgba(102,250,254,1)) 10 10;
    background: rgba(255,255,255,0.5);
    border-radius: 23px;
    color: #666;
    position: relative;
  }
  .el-form-item::after{
      position: absolute;
      top: -1px;
			bottom: -1px;
      left: -1px;
			right: -1px;
      background: (0deg, rgba(103,158,253,1), rgba(102,250,254,1));
      content: '';
      z-index: 1;
      border-radius: 23px;
    }
	.el-button {
		background: $loginBtnBg;
		height: 46px;
		border-radius: 23px;
		font-size: 18px;
		border: none;
	}
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$text_color:#333;

.login-container {
  min-height: 100%;
  width: 100%;
  height: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url(./background.png) no-repeat center;
  background-size: cover;

  .login-form {
    position: relative;
    width: 440px;
    max-width: 100%;
    min-height: 100%;
    padding: 60px 35px 0;
    margin-left: 63%;
    overflow: hidden;
    background: url(./loginForm.png) no-repeat center;
    background-size: cover;
		box-shadow:0px 0px 30px 0px rgba(103,158,253,0.2);
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    .imgBox {
      text-align: center;
      img {
        display: inline-block;
        width: 100px;
      }
    }
    .title {
      font-size: 18px;
      color: $text_color;
      margin: 0px auto 40px auto;
      text-align: center;
    }
  }
  .show-pwd, .show-Captcha-Img{
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .show-Captcha-Img{
    top: 0px;
    right: 20px;
    img {
      width: 100px;
      height: 50px;
    }
  }
}
</style>
