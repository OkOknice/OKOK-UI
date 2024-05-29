<script setup lang="ts"></script>

<template>
  <div class="app-wrrapper">
    <div class="top">OKOK-UI 效果展示</div>
    <div class="route">
      <router-link to="/icon">Icon</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/dialog">Dialog</router-link>
      <router-link to="/pager">Pager</router-link>
      <router-link to="/collapse">Collapse</router-link>
      <router-link to="/tooltip">Tooltip</router-link>
      <router-link to="/dropdown">Dropdown</router-link>
      <router-link to="/tree">Tree</router-link>
      <router-link to="/tabs">Tabs</router-link>
    </div>
    <div class="ui-area">
      <router-view />
      <!-- <div class="area">
        
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrrapper {
  .top {
    font-size: 24px;
    color: #b4abab;
    text-align: center;
    @apply mt-[20px];
  }

  .route {
    display: flex;
    height: 50px;
    justify-content: space-evenly;
    align-items: center;
  }

  .ui-area {
    margin-top: 2em;

    /* .area {
      margin: 0 auto;
      width: 87%;
    } */
    /* padding: 0 50px; */
    /* text-align: center; */
  }
  a {
    color: #409eff;
  }
  .active {
    border-bottom: 3px solid hsla(160, 100%, 37%, 1);
  }
}
</style>
