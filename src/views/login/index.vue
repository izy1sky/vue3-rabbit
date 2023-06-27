<template>
  <v-app>
    <v-main>
      <v-container >
        <v-toolbar class="login-toolbar">
          <template #default>
            <div class="d-flex header-div justify-space-between align-center">
              <img src="src/assets/images/logo.png" alt="" class="login-img">
              <v-spacer></v-spacer>
              <v-btn variant="text" append-icon="mdi-chevron-double-right" :to="{name:'home'}">进入网站首页</v-btn>
            </div>
          </template>
          
        </v-toolbar>
      </v-container>

      <v-card image="src/assets/images/login-bg.png" class="login-body">
        <v-row justify="center" align="center">
          <v-col offset="6" cols="3">
            <v-card variant="flat" class="mt-15 pa-5">
              <v-form v-model="form">
                <v-card-item class="text-center text-h5 font-weight-bold">账户登录</v-card-item>
                <v-card-item>
                  <v-text-field
                    label="账户"
                    v-model="username"
                    clearable
                    :rules="rules"
                    single-line
                  ></v-text-field>
                </v-card-item>
                <v-card-item>
                  <v-text-field
                    label="密码"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    :rules="rules"
                    clearable
                    single-line
                  >
                    <template #append-inner>
                      <v-btn variant="text" size="x-small" icon="mdi-eye" @click.prevent="showPassword = !showPassword"></v-btn>
                    </template>
                  </v-text-field>
                </v-card-item>
                <v-card-item>
                  <v-checkbox label="我已同意隐私条款和服务条款" v-model="agreeCheckbox"></v-checkbox>
                </v-card-item>
                <v-card-actions>
                  <v-btn color="green" block :disabled="!form || !agreeCheckbox">点击登陆</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-card variant="flat" class="login-footer">
        <v-card-item class="justify-center align-center mt-10">
          <v-btn-toggle>
            <v-btn >关于我们</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >帮助中心</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >售后服务</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >配送与验收</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >商务合作</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >搜索推荐</v-btn>
            <v-divider vertical></v-divider>
            <v-btn >友情链接</v-btn>
          </v-btn-toggle>
        </v-card-item>
        <v-card-item class="justify-center align-stretch">
          <span>CopyRight</span><v-icon class="mx-2">mdi-copyright</v-icon><span>小兔鲜儿</span>
        </v-card-item>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
// 表单的有效性
const form:Ref<boolean> = ref(false)
// 账户和密码
const username:Ref<string> = ref("")
const password:Ref<string> = ref("")
// 检查输入的规则
const rules:Ref<any> = ref([
  (value:string) => {
    if (value.length < 5 || value.length > 16) return '输入长度必须在6-15个字符内！'
    return true
  }
])
// 是否同意条款
const agreeCheckbox:Ref<boolean> = ref(false)
// 切换密码显示方式
const showPassword = ref(false)
</script>

<style scoped lang="scss">

.login-img {
  background: none !important;
}
.login-toolbar {
  background-color: white;
  height: $toolbar-height;
}
.header-div {
  height: 100%;
  width: 100%;
}

.login-body {
  height: calc(100vh - $toolbar-height - $login-footer-height);
  min-height: 500px;
}

.login-footer {
  background-color: white;
  height: $login-footer-height;
}


</style>
