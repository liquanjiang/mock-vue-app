<template>
  <div class="side-bar">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      unique-opened
      :default-openeds="openList"
      :default-active="defaultActive"
      active-text-color="#4c7dff"
      @close="handleClose">
      <el-submenu v-for="(item, index) in menus" :key="index" :index="`/home/${item.url}`">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <el-menu-item v-for="(menu, idx) in item.children"
                      :key="idx"
                      style="padding-left:50px;"
                      @click="jump(item, menu)"
                      :index="`${menu.url}`">
          <span slot="title">{{menu.menuName}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
