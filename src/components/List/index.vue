<template>
    <List>
        <!-- <template #finished>
        <div class="zqzt-pulluploading-header"><Icon name="passed" class="ticon"/><span class="slabel">已经到底了</span></div>
      </template> -->
      <template #error>
        <div class="zqzt-pulluploading-header"><Icon name="warning-o" class="ticon"/><span class="slabel">加载失败！点击重新加载</span></div>
      </template>
      <template #loading>
        <div class="zqzt-pulluploading-header"><Loading size="22" color="#000" text-color="#000">加载中...</Loading></div>
      </template>
      <slot></slot>
    </List>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { List, Icon, Loading } from 'vant';
export default defineComponent({
  components:{
    List,
    Icon,
    Loading
  }
})
</script>