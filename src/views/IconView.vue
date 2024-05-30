<template>
  <div class="icon-view">
    <div class="row-title">普通引入</div>
    <div class="row">
      <OK-Icons icon="user" />
      <OK-Icons icon="user-secret" />
      <OK-Icons icon="bars" />
      <OK-Icons icon="shield-halved" />
      <OK-Icons icon="file" />
      <OK-Icons icon="filter" />
      <OK-Icons icon="gear" />
      <OK-Icons icon="barcode" />
      <OK-Icons icon="folder" />
      <OK-Icons icon="folder-open" />
    </div>
    <div class="row-title">设置不同的大小</div>
    <div class="row">
      <OK-Icons icon="user" size="2xs" />
      <OK-Icons icon="user-secret" size="xs" />
      <OK-Icons icon="bars" size="sm" />
      <OK-Icons icon="shield-halved" size="lg" />
      <OK-Icons icon="file" size="xl" />
      <OK-Icons icon="filter" size="2xl" />
      <OK-Icons icon="gear" size="2x" />
      <OK-Icons icon="barcode" size="3x" />
      <OK-Icons icon="folder" size="4x" />
    </div>
    <div class="row-title">旋转与翻转</div>
    <div class="row">
      <OK-Icons icon="user" size="xl" />
      <OK-Icons icon="user-secret" rotation="90" size="xl" />
      <OK-Icons icon="bars" size="xl" rotation="180" />
      <OK-Icons icon="shield-halved" rotation="270" size="xl" />
      <OK-Icons icon="file" rotation="270" size="xl" />
      <OK-Icons icon="filter" flip="horizontal" size="xl" />
      <OK-Icons icon="gear" flip="vertical" size="xl" />
      <OK-Icons icon="barcode" flip="both" size="xl" />
    </div>
    <h1 class="row-title">动画效果</h1>
    <div class="row">
      <OK-Icons icon="user-secret" size="xl" beat />
      <OK-Icons icon="bars" size="xl" beat-fade />
      <OK-Icons icon="shield-halved" size="xl" bounce />
      <OK-Icons icon="file" size="xl" fade />
      <OK-Icons icon="filter" size="xl" flip />
      <OK-Icons icon="gear" size="xl" shake />
      <OK-Icons icon="barcode" size="xl" spin />
      <OK-Icons icon="folder" size="xl" spin spin-reverse />
      <OK-Icons icon="folder-open" size="xl" spin-pulse />
    </div>
    <h1 class="row-title">自定义属性和颜色</h1>
    <div class="row">
      <OK-Icons icon="user" size="xl" type="primary" />
      <OK-Icons icon="user-secret" size="xl" type="success" />
      <OK-Icons icon="bars" size="xl" type="warning" />
      <OK-Icons icon="shield-halved" size="xl" type="danger" />
      <OK-Icons icon="file" size="xl" type="info" />
      <OK-Icons icon="gear" size="xl" type="success" />
      <OK-Icons icon="folder" size="xl" color="skyblue" />
      <OK-Icons icon="folder-open" size="xl" color="#fc0" />
    </div>
  </div>
</template>

<script setup>
// import { OKIcons } from '../packages/icons'
</script>

<style lang="scss" scoped></style>
