<template>
  <div class="market-activity">
    <NavBar
      :left-arrow="false"
      barcss="bule-narbar"
      left-text="关闭"
      right-text="新建"
      :click-left="clickLeft"
      :click-right="onClickRight"
    />
    <div class="market-activity-content">
      <div class="search-box">
        <DropdownMenu>
          <DropdownItem v-model="activityStatus" :options="activityOptions" @change="chanageItem" />
        </DropdownMenu>
        <van-search
          v-model="activityName"
          show-action
          placeholder="请输入活动名称或网格名称模糊搜索"
          @search="onSearch"
        >
          <template #action>
            <div class="search-action" @click="onClickButton">查询</div>
          </template>
        </van-search>
      </div>
      <PullRefresh
        v-model="refreshing"
        class="refresh-height"
        :head-height="50"
        @refresh="onRefresh"
      >
        <List
          v-if="itemList.length > 0"
          v-model:loading="loading"
          v-model:error="loaderror"
          :finished="finished"
          finished-text="没有更多了"
          error-text="加载失败！点击重新加载"
          :immediate-check="false"
          @load="onLoad"
        >
          <!-- <ActivityItem
            v-for="item in itemList"
            :key="item"
            :obj="item"
            @reflesh="initLoading"
          ></ActivityItem> -->
        </List>
        <!-- <NormalEmpty v-else class="mycustom-empty" /> -->
      </PullRefresh>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  // import { Toast, Search, DropdownMenu, DropdownItem } from 'vant';
  // import ActivityItem from './components/activityItem.vue';
  import type { DataObj } from '@/api/customEntity/index';
  import NavBar from '@/components/NavBar/TitleNavBar.vue';
  import List from '@/components/List/index.vue';
  import PullRefresh from '@/components/PullRefresh/index.vue';
  import NormalEmpty from '@/components/EmptyView/normalempty.vue';
  import { queryActivityList } from '@/api/marketActivity';
  import { getUserInfo } from '@/utils/utils';

  const { push } = useRouter();
  const pageNo = ref(0);
  const pageSize = ref(10);
  const itemList = ref<DataObj[]>([]);
  // 搜索条件
  const activityName = ref('');
  const activityStatus = ref('');
  const activityOptions = ref<any[]>([
    { text: '全部', value: '' },
    { text: '草稿', value: 0 },
    { text: '待启动', value: 1 },
    { text: '进行中', value: 2 },
    { text: '已结束', value: 3 },
  ]);
  const onSearch = (val: string) => Toast(val);
  const onClickButton = () => {
    initLoading();
  };
  const clickLeft = () => {
    // window.diasdk && window.diasdk.onShutdownUrl();
  };
  /* 下拉刷新 */
  const refreshing = ref(false);
  function onRefresh() {
    finished.value = false;
    loading.value = true;
    // pageNo = 0;
    onLoad();
  }

  /**上拉加载 */
  const loading = ref(false);
  const finished = ref(false);
  const loaderror = ref(false);

  function onLoad() {
    pageNo.value++;
    const userInfo = getUserInfo();
    const params = {
      latnId: userInfo.latnId,
      areaId: userInfo.areaId,
      managerId: userInfo.managerId,
      checkType: 1,
      name: activityName.value,
      status: activityStatus.value,
      pageNo: pageNo.value,
      pageSize: pageSize.value,
    };
    queryActivityList(params)
      .then((res) => {
        Toast.clear();
        if (refreshing.value) {
          itemList.value = [];
          refreshing.value = false;
        }
        if (res.data.success) {
          const data = res.data.payload ? res.data.payload.results : [];
          const total = res.data.payload ? res.data.payload.total : 0;
          itemList.value.push(...data);
          loading.value = false;
          if (itemList.value.length >= total) {
            finished.value = true;
          }
        } else {
          itemList.value = [];
        }
      })
      .finally(() => {
        Toast.clear();
      });
  }
  function initLoading() {
    Toast.loading({
      message: '加载中...',
      className: 'zqzt-van-toast-customercss',
      forbidClick: true,
      duration: 0,
    });
    finished.value = false;
    pageNo.value = 0;
    itemList.value = [];
    onLoad();
  }
  /**
   * 新建活动
   */
  const onClickRight = () => {
    push({
      name: 'addMarketActivity',
      query: {
        type: 'add',
      },
    });
  };
  /**
   * 下拉选择
   */
  const chanageItem = () => {
    initLoading();
  };
  onMounted(() => {
    // initLoading();
  });
</script>

<style lang="scss" scoped>
  .market-activity {
    .search-box {
      display: flex;
      padding: 0 10px;
      background: #fff;
      .van-search {
        flex: 1;
      }
      .search-action {
        background: #4069f7;
        color: #fff;
        width: 40px;
        text-align: center;
      }
      :deep(.van-dropdown-menu__bar) {
        box-shadow: none !important;
      }
    }
    .refresh-height {
      min-height: 519px;
      margin-top: 5px;
      :deep(.van-pull-refresh__track) {
        min-height: 519px;
      }
    }
    .mycustom-empty {
      padding-top: 50px;
    }
    .van-nav-bar__text {
      color: #fff !important;
    }
  }
</style>
