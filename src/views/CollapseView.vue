<template>
  <div>
    <h1 class="row-title">基础用法</h1>
    <div class="row">
      <OK-Collapse v-model="openValue">
        <OKCollapseItem title="标题1" name="a">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
        <OKCollapseItem title="标题2" name="b">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
        <OKCollapseItem title="标题3" name="c">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
      </OK-Collapse>
    </div>
    <h1 class="row-title">手风琴效果</h1>
    <div class="row">
      <OK-Collapse v-model="openValue2" accordion>
        <OKCollapseItem title="标题1" name="a">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
        <OKCollapseItem title="标题2" name="b" disabled>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
        <OKCollapseItem title="标题3" name="c">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          perspiciatis, saepe veritatis sed praesentium incidunt consequatur
          nulla. Aut, magnam, tenetur suscipit harum odio, omnis commodi nisi
          officia tempora vel pariatur.
        </OKCollapseItem>
      </OK-Collapse>
    </div>
    <h1 class="row-title">自定义标题</h1>
    <div class="row">
      <OK-Collapse v-model="openedValue3" accordion>
        <OK-CollapseItem name="Consistency" title="Consistency">
          <template #title>
            <div class="titleContainer">
              <span class="title">Consistency</span>
              <OK-Icons icon="house" />
            </div>
          </template>
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </OK-CollapseItem>
        <OK-CollapseItem name="Feedback">
          <template #title>
            <div class="titleContainer">
              <span class="title">Feedback</span>
              <OK-Icons icon="image" />
            </div>
          </template>
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </OK-CollapseItem>
        <OK-CollapseItem name="Efficiency">
          <template #title>
            <div class="titleContainer">
              <OK-Icons icon="phone" />
              <span class="title">Efficiency</span>
            </div>
          </template>
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which
            helps the users to identify and frees them from memorizing and
            recalling.
          </div>
        </OK-CollapseItem>
        <OK-CollapseItem name="Controllability" title="Controllability">
          <template #title>
            <div class="titleContainer">
              <OK-Icons icon="star" />
              <span class="title">Controllability</span>
            </div>
          </template>
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </OK-CollapseItem>
      </OK-Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openValue = ref<(number | string)[]>(['a'])
const openValue2 = ref<(number | string)[]>(['a'])
const openedValue3 = ref(['a'])
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>
