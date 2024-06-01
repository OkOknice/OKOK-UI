<template>
  <div>
    <div class="row-title">第一组卡片显示</div>
    <div class="row">
      <OK-Card
        img-src="/vite.svg"
        summary="前端主流布局系统进阶与实战，轻松解决页面布局难题"
      />
      <OK-Card img-src="/vite.svg" :img-height="100">
        <template #summary>
          <div>前端主流布局系统进阶与实战，轻松解决页面布局难题</div>
        </template>
        <template #footer>
          <div class="footer">
            <div class="level">中级 · 5225人报名</div>
            <div class="price">￥399.00</div>
          </div>
        </template>
      </OK-Card>
    </div>
    <div class="row-title">第二组卡片显示</div>
    <div class="row">
      <OK-Card
        img-src="/vite.svg"
        summary="前端主流布局系统进阶与实战，轻松解决页面布局难题"
      >
        <template #footer>
          <div class="footer-java">
            <div class="level">3步骤 · 3门课</div>
            <div class="level">10982收藏</div>
          </div>
        </template>
      </OK-Card>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>
