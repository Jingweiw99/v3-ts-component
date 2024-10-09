<template>
  <el-menu :collapse="collapse" default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
    <el-menu-item index="1">
      <el-icon-menu></el-icon-menu>
      <span style="margin-left: 0.5em">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span style="margin-left: 0.5em">图标选择器</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

let props = defineProps<{
  collapse: boolean
}>()
// TODO: 后续修改
let routeArr = ['/', '/chooseIcon']
const router = useRouter()
let handleSelect = (idx: number) => {
  // console.log(idx-1)
  router.push(routeArr[idx - 1])
}
</script>

<style lang="scss" scoped></style>
