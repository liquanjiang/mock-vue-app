<template>
  <div class="login">
    <div class="login-input">
      <h3>登录</h3>
      <!-- 输入用户名 -->
      <el-row :gutter="24" style="margin:20px 0">
        <el-col :span="6">
          <span class="label-span">用户名:</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="userName" placeholder="请输入用户名" size="mini"></el-input>
        </el-col>
      </el-row>
      <!-- 输入密码 -->
      <el-row :gutter="24" style="margin:20px 0">
        <el-col :span="6">
          <span class="label-span">密码:</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="password" placeholder="请输入密码" size="mini" show-password></el-input>
        </el-col>
      </el-row>
      <!-- 登录按钮 -->
      <el-row :gutter="24" style="margin:20px 0">
        <el-col :span="6">
          <span class="label-span"></span>
        </el-col>
        <el-col :span="18">
          <el-button type="primary" size="mini" style="width:100%" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>login-input
<!-- 加载脚本和样式表文件 -->
<script src="./_.js"/>
<style scoped src="./_.css"/>
