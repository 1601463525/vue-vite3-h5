<template>
    <PullRefresh>
      <template #pulling>
        <div class="zqzt-pullrefresh-header"><Icon name="clock-o" class="ticon"/><span class="slabel">下拉刷新</span></div>
      </template>
      <template #loosing>
        <div class="zqzt-pullrefresh-header"><Icon name="clock-o" class="ticon"/><span class="slabel">释放刷新</span></div>
      </template>
      <template #loading>
        <div class="zqzt-pullrefresh-header"><Loading size="22" color="#000" text-color="#000">正在刷新</Loading></div>
      </template>
      <slot></slot>
    </PullRefresh>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PullRefresh, Icon, Loading } from 'vant';
export default defineComponent({
  components:{
    PullRefresh,
    Icon,
    Loading
  }
})
</script>