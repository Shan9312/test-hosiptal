<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      label-width="100px"
    >
      <h3 class="title">用户注册</h3>
      <el-form-item prop="phone" label="手机号">
        <el-input
          v-model="loginForm.phone"
          name="phone"
          type="text"
          maxlength="40"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="验证码" class="captcha">
        <el-input
          :type="pwdType"
          class="captcha-input"
          v-model="loginForm.password"
          name="password"
          placeholder="请输入密码"
          maxlength="20"
          @keyup.enter.native="handleLogin"
        />
        <div class="captcha-btn">
          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleLogin"
          >验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="password_confirmation" label="设置密码">
        <el-input
          :type="pwdType"
          v-model="loginForm.password_confirmation"
          name="password_confirmation"
          placeholder="请输入密码"
          maxlength="20"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-form-item prop="captcha" label="确认密码">
        <el-input
          :type="pwdType"
          v-model="loginForm.captcha"
          name="captcha"
          placeholder="请输入密码"
          maxlength="20"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <!-- 忘记密码 注册账号  -->
      <el-form-item>
        <el-checkbox v-model="loginForm.checked">我已阅读《XXX协议》</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Validate } from "../utils";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
        password_confirmation: "",
        captcha: "",
        checked: true
      },
      loginRules: {
        phone: [
          {
            required: true,
            trigger: "blur",
            validator: Validate.validateModel
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: Validate.UserPsw
          }
        ],
        password_confirmation: [
          {
            required: true,
            trigger: "blur",
            validator: Validate.UserPsw
          }
        ]
      },
      loading: false,
      pwdType: "password",
      redirect: undefined
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const { userPhone, password } = this.loginForm;
          this.loading = true;
          this.$store
            .dispatch("Login", {
              userPhone: userPhone,
              password: password
            })
            .then(res => {
              this.loading = false;
              this.$router.push({
                path: this.redirect || "/"
              });
            })
            .catch(err => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
/* reset element-ui css */
.login-container {
  .captcha {
    position: relative;
  }
  .captcha-input {
    width: 80% !important;
  }
  .captcha-btn {
    position: absolute;
    right: 0rem;
    top: 0rem;
  }
  .point-psd {
    display: flex;
    width: 24rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 4rem;
    justify-content: space-between;
    color: red;
    padding: 0 0.25rem;
  }
}

/* login page style */
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #eee;

  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 32.5rem;
    max-width: 100%;
    padding: 2.1875rem 2.1875rem 0.9375rem 2.1875rem;
    margin: 7.5rem auto;
    .select {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: #999;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>