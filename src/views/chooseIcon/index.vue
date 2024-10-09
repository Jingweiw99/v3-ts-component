<template>
  <w-choose-icon title="选择图标" v-model:visible="visible">选择图标</w-choose-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import wChooseIcon from '../../components/chooseIcon/src/index.vue'
let visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
