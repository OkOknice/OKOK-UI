<template>
  <div>
    <div class="row-title">普通按钮</div>
    <div class="row">
      <OK-Button>默认按钮</OK-Button>
      <OK-Button type="primary">主要按钮</OK-Button>
      <OK-Button type="info">信息按钮</OK-Button>
      <OK-Button type="success">成功按钮</OK-Button>
      <OK-Button type="warning">警告按钮</OK-Button>
      <OK-Button type="danger">危险按钮</OK-Button>
    </div>
    <div class="row-title">朴素按钮</div>
    <div class="row">
      <OK-Button plain>默认按钮</OK-Button>
      <OK-Button type="primary" plain>主要按钮</OK-Button>
      <OK-Button type="info" plain>信息按钮</OK-Button>
      <OK-Button type="success" plain>成功按钮</OK-Button>
      <OK-Button type="warning" plain>警告按钮</OK-Button>
      <OK-Button type="danger" plain>危险按钮</OK-Button>
    </div>
    <div class="row-title">圆角按钮</div>
    <div class="row">
      <OK-Button round>默认按钮</OK-Button>
      <OK-Button type="primary" round>主要按钮</OK-Button>
      <OK-Button type="info" round>信息按钮</OK-Button>
      <OK-Button type="success" round>成功按钮</OK-Button>
      <OK-Button type="warning" round>警告按钮</OK-Button>
      <OK-Button type="danger" round>危险按钮</OK-Button>
    </div>
    <div class="row-title">禁用按钮</div>
    <div class="row">
      <OK-Button disabled>默认按钮</OK-Button>
      <OK-Button type="primary" disabled>主要按钮</OK-Button>
      <OK-Button type="info" disabled>信息按钮</OK-Button>
      <OK-Button type="success" disabled>成功按钮</OK-Button>
      <OK-Button type="warning" disabled>警告按钮</OK-Button>
      <OK-Button type="danger" disabled>危险按钮</OK-Button>
    </div>
    <div class="row-title">等待状态</div>
    <div class="row">
      <OK-Button loading @click="testClick">默认按钮</OK-Button>
      <OK-Button type="primary" loading>主要按钮</OK-Button>
      <OK-Button type="info" loading>信息按钮</OK-Button>
      <OK-Button type="success" loading>成功按钮</OK-Button>
      <OK-Button type="warning" loading>警告按钮</OK-Button>
      <OK-Button type="danger" loading>危险按钮</OK-Button>
    </div>
    <div class="row-title">图标按钮</div>
    <div class="row">
      <OK-Button icon="user">默认按钮</OK-Button>
      <OK-Button type="primary" icon="gear">主要按钮</OK-Button>
      <OK-Button type="info" icon="file">信息按钮</OK-Button>
      <OK-Button type="success" icon="bug" disabled>成功按钮</OK-Button>
      <OK-Button type="warning" icon="code" plain round>警告按钮</OK-Button>
      <OK-Button type="danger" icon="cube" round>危险按钮</OK-Button>
    </div>
    <div class="row-title">不同尺寸的按钮</div>
    <div class="row">
      <OK-Button size="small">默认按钮</OK-Button>
      <OK-Button type="primary" size="small">主要按钮</OK-Button>
      <OK-Button type="info">信息按钮</OK-Button>
      <OK-Button type="success">成功按钮</OK-Button>
      <OK-Button type="warning" size="large" plain>警告按钮</OK-Button>
      <OK-Button type="danger" size="large" plain round>危险按钮</OK-Button>
    </div>
    <div class="row-title">圆形按钮</div>
    <div class="row">
      <OK-Button cricle>默</OK-Button>
      <OK-Button type="primary" icon="gear" cricle></OK-Button>
      <OK-Button type="info" icon="file" cricle></OK-Button>
      <OK-Button type="success" icon="bug" disabled cricle></OK-Button>
      <OK-Button type="warning" icon="code" plain cricle></OK-Button>
      <OK-Button type="danger" icon="cube" cricle></OK-Button>
    </div>
    <div class="row-title">块级按钮</div>
    <div class="row">
      <OK-Button block>默认按钮</OK-Button>
      <OK-Button type="primary" block>主要按钮</OK-Button>
    </div>
    <div class="row-title">点击事件</div>
    <div class="row">
      <OK-Button type="primary" @click="testClick" ref="btnRef" block>
        点击按钮
      </OK-Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btnRef = ref(null)
const testClick = () => {
  // console.log('testClick')
  // alert('testClick')
  console.log(btnRef.value)
}
</script>

<style lang="scss" scoped></style>
