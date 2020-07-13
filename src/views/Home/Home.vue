<template>
  <div class="home">
    <header>
      <div class="logo">
        <img alt="Vue logo" src="../../assets/hw.png">
        <h4>数据工厂后台管理系统</h4>
        <div class="switch-div">
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#4c7dff">
          </el-switch>
        </div>
      </div>
      <div class="logout">
        <el-button size="mini" @click="logout">注销</el-button>
      </div>
    </header>
    <!-- 左侧菜单栏 -->
    <div class="sidebar" v-show="value">
      <SideBar/>
    </div>
    <!-- 右侧路由栏 -->
    <div class="right-sidebar" :class="{ 'left-show': value, 'left-hide': !value }">
      <div class="bread"></div>
      <router-view/>
    </div>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
