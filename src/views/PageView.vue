<template>
  <div>
    <h1 class="row-title">
      总页数 total 大于页码最大显示数 pager-count，此时无法全部显示
    </h1>
    <div class="row">
      <OK-Pager
        :total="total"
        :current-page="currentPage"
        @current-page="handlerCurrentPage"
      />
    </div>
    <h1 class="row-title">
      总页码数 total 小于等于页码最大显示数 pager-count，可以全部显示
    </h1>
    <div class="row">
      <OK-Pager
        :total="total"
        :page-size="30"
        :current-page="handlerCurrentPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref<number>(1)
const total = ref<number>(8)

const handlerCurrentPage = (page) => {
  currentPage.value = page
}
</script>

<style lang="scss" scoped></style>
