<template>
  <div>
    <div class="row">
      <OK-Button type="primary" @click="visible1 = true">
        打开对话框一
      </OK-Button>
      <OK-Button type="success" @click="visible2 = true">
        打开对话框二
      </OK-Button>
      <OK-Button type="warning" @click="visible3 = true">
        打开对话框三
      </OK-Button>
    </div>
    <OK-Dialog v-model:visible="visible1" @close="visible1 = false">
      测试测试
    </OK-Dialog>

    <OK-Dialog
      v-model:visible="visible2"
      title="这是一个自定义标题"
      top="200px"
      @close="visible2 = false"
    >
      测试测试
    </OK-Dialog>

    <OK-Dialog
      v-model:visible="visible3"
      title="这是一个自定义标题"
      top="200px"
      @close="visible3 = false"
    >
      测试测试
      <template #footer>
        <OK-Button class="cancel-btn" @click="visible3 = false">取消</OK-Button>
        <OK-Button type="primary" @click="visible3 = false">确定</OK-Button>
      </template>
    </OK-Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.cancel-btn {
  margin-right: 10px;
}
</style>
