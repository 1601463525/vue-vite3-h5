<template>
  <div class="topNavBar">
    <van-nav-bar
      :class="barcss"
      :title="title"
      safe-area-inset-top
      safe-area-inset-bottom
      :left-arrow="leftArrow"
      :on-click-left="onClickLeft"
      :right-text="rightText"
      :left-text="!sourceType ? leftText : ''"
      :on-click-right="onClickRight"
    />
  </div>
  <div
    :class="{
      'topNavBar-ios-height': isOS && !sourceType,
      'topNavBar-height': !(isOS && !sourceType),
    }"
    safe-area-inset-top
    safe-area-inset-bottom
  ></div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { getUserInfo } from '@/utils/utils';
  export default defineComponent({
    props: {
      clickLeft: Function,
      barcss: {
        type: String,
        default: '',
      },
      leftArrow: {
        type: Boolean,
        default: true,
      },
      clickRight: Function,
      rightText: {
        type: String,
        default: '',
      },
      leftText: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const route = useRouter();
      const title: any = route.currentRoute.value.meta.title;
      const userInfo = getUserInfo() ? getUserInfo() : { sourceType: 'zhyx' };
      const sourceType = userInfo.sourceType === 'gzzs';
      const isOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      const onClickLeft = () => {
        if (props.clickLeft) {
          props.clickLeft();
        } else {
          route.back();
        }
      };
      const onClickRight = () => {
        if (props.clickRight) {
          props.clickRight();
        } else {
          route.back();
        }
      };
      return {
        route,
        title,
        sourceType,
        isOS,
        onClickRight,
        onClickLeft,
      };
    },
  });
</script>
//
<!-- <script lang="ts" setup>
//     import { NavBar } from 'vant';
//     import { useRouter } from 'vue-router';
//     defineProps({
//       description: {
//         type: String,
//         default: '暂无数据',
//       },
//       clickLeft: {
//         type: Function,
//       },
//       barcss: {
//         type: String,
//         default: '',
//       },
//       leftArrow: {
//         type: Boolean,
//         default: true,
//       },
//       clickRight: {
//         type: Function,
//       },
//       rightText: {
//         type: String,
//         default: '',
//       },
//       leftText: {
//         type: String,
//         default: '',
//       },
//     });
//     const route = useRouter();
//     const title = route.currentRoute.value.meta.title;
//     const onClickLeft = () => {
//       if (clickLeft) {
//         clickLeft();
//       } else {
//         route.back();
//       }
//     };
//     const onClickRight = () => {
//       if (clickRight) {
//         clickRight();
//       } else {
//         route.back();
//       }
//     };
// </script>
// -->
<!-- <script>
  import { defineComponent } from 'vue';
  import { NavBar } from 'vant';
  import { useRouter } from 'vue-router';
  import { getUserInfo } from '@/utils/util';
  defineProps({
    description: {
      type: String,
      default: '暂无数据',
    },
  });
  export default defineComponent({
    components: { NavBar },
    props: {
      clickLeft: Function,
      barcss: String,
      leftArrow: {
        type: Boolean,
        default: true,
      },
      clickRight: Function,
      rightText: {
        type: String,
        default: '',
      },
      leftText: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const route = useRouter();
      const title = route.currentRoute.value.meta.title;
      const userInfo = getUserInfo() ? getUserInfo() : { sourceType: 'zhyx' };
      const sourceType = userInfo.sourceType === 'gzzs';
      const isOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      const onClickLeft = () => {
        if (props.clickLeft) {
          props.clickLeft();
        } else {
          route.back();
        }
      };
      const onClickRight = () => {
        if (props.clickRight) {
          props.clickRight();
        } else {
          route.back();
        }
      };
      return () => (
        <>
          <div class="topNavBar">
            <NavBar
              class={props.barcss}
              title={title}
              safe-area-inset-top
              safe-area-inset-bottom
              left-arrow={props.leftArrow}
              onClickLeft={onClickLeft}
              right-text={props.rightText}
              left-text={!sourceType ? props.leftText : ''}
              onClickRight={onClickRight}
            />
          </div>
          <div
            class={isOS && !sourceType ? 'topNavBar-ios-height' : 'topNavBar-height'}
            safe-area-inset-top
            safe-area-inset-bottom
          ></div>
        </>
      );
    },
  });
</script>-->
<style lang="scss" scoped>
  .topNavBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .topNavBar-height {
    height: var(--van-nav-bar-height);
  }
  .topNavBar-ios-height {
    height: 84px !important;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
</style>
