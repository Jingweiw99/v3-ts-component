<template>
  <el-container>
    <el-aside width="auto">
      <nav-aside :collapse="isCollapse"></nav-aside>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavAside from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'

let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
// 不是伸缩状态下
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-header {
  border-bottom: 1px solid #eee;
}
</style>
