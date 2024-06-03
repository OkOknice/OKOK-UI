<template>
  <div>
    <h1 class="row-title">
      总页数 total 大于页码最大显示数 pager-size，此时无法全部显示
    </h1>
    <div class="row">
      <OK-Pager
        :total="total"
        :current-page="currentPage"
        @update:page="handlerCurrentPage"
      />
    </div>
    <h1 class="row-title">
      总页码数 total 小于等于页码最大显示数 pager-size，可以全部显示
    </h1>
    <div class="row">
      <OK-Pager
        :total="total"
        :current-page="currentPage2"
        :page-size="5"
        @update:page="handlerCurrentPage2"
      />
    </div>
    <h1 class="row-title">调整主题颜色</h1>
    <div class="row">
      <OK-Pager
        type="warning"
        :total="total"
        :current-page="currentPage"
        @update:page="handlerCurrentPage"
      />
    </div>
    <div class="row">
      <OK-Pager
        :total="total"
        type="success"
        :current-page="currentPage"
        @update:page="handlerCurrentPage"
      />
    </div>
    <h1 class="row-title">调整大小</h1>
    <div class="row">
      <OK-Pager
        :total="total"
        size="small"
        :current-page="currentPage"
        @update:page="handlerCurrentPage"
      />
    </div>
    <div class="row">
      <OK-Pager
        :total="total"
        size="large"
        :current-page="currentPage"
        @update:page="handlerCurrentPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref<number>(1)
const currentPage2 = ref<number>(1)
const total = ref<number>(8)

const handlerCurrentPage = (page) => {
  currentPage.value = page
}
const handlerCurrentPage2 = (page) => {
  currentPage2.value = page
}
</script>

<style lang="scss" scoped></style>
