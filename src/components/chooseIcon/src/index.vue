<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog v-model="dlgVisible" :title="title" class="w-choose-icon-dialog-body-height">
    <div class="container">
      <div class="icon-item" v-for="(item, index) in Object.keys(ElementPlusIconsVue)" :key="index">
        <div>
          <component @click="clickItem(item)" :is="`el-icon-${toLine(item)}`"></component>
        </div>
        <div>{{ item }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/useCopy'
/**
 * title: string 弹出的标题
 * visible: boolean 是否弹出
 */
let props = defineProps<{
  title: string
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
// 现在定义的prop是不可写的!!! 以前虽然可以写但是不推荐，修改组件内部的副本
let dlgVisible = ref<boolean>(props.visible)
// 点击按钮显示弹出框
let handleClick = () => {
  // console.log(props.visible, dlgVisible.value)
  emits('update:visible', !dlgVisible.value)
}
// 点击图标
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  dlgVisible.value = false
}

watch(
  () => props.visible,
  (val) => {
    // console.log('父组件持有的visible变化了', val)
    dlgVisible.value = val
  }
)
// 监听组件内部的dialogVisible变化 点击取消的时候el-dialog中的visible变为false 满足开头的条件需要满足props.visible为false 这样就是循环了
watch(
  () => dlgVisible.value,
  (val) => {
    // console.log('本组件持有的dlgVisible变化了', val)
    emits('update:visible', val)
  }
)
/*
false false
父组件持有的visible变化了 true
本组件持有的dlgVisible变化了 true
本组件持有的dlgVisible变化了 false (点击触发前3个， 然后关闭弹窗触发这个和下一个，我们需要还原成点击前的初始状态)
父组件持有的visible变化了 false 

false false
父组件持有的visible变化了 true
本组件持有的dlgVisible变化了 true
本组件持有的dlgVisible变化了 false
父组件持有的visible变化了 false
*/
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .icon-item {
    width: 25%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  svg {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
  }
}
</style>
