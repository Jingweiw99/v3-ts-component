<template>
  <div class="header">
    <span @click="toggle"> 
      <el-icon-expand v-if="collapse"></el-icon-expand> <el-icon-fold v-else></el-icon-fold> 
    </span>
  </div>
  
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])

let toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header{
  height: 100%;
  display: flex;
  align-items: center;

}
</style>
