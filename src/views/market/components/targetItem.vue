<template>
      <div class="market-item" tappable @click="onSelectedItem">
            <div class="market-item-title flex align-items-center space-between">
                <span>{{dataObj.gridName}}</span>
                <Checkbox v-model="dataObj.active" @click="onSelectedItem"></Checkbox>
            </div>
            <!-- <div class="row flex space-between">
                <div class="col text-center">
                    <div>{{dataObj.telecomcustomernumber}}</div>
                    <div style="color:#000">电信客户数</div>
                </div>
                <div class="col text-center">
                    <div>{{dataObj.physicalarrival}}</div>
                    <div style="color:#000">天翼到达</div>
                </div>
                <div class="col text-center">
                    <div>{{dataObj.broadbandreach}}</div>
                    <div style="color:#000">宽带到达</div>
                </div>
                <div class="col text-center">
                    <div>{{dataObj.permeability}}</div>
                    <div style="color:#000">渗透率</div>
                </div>
            </div>
            <div class="market-item-static">实住客户数/总客户数：<span style="color:#42a3f1">{{dataObj.customerTotal}}</span></div> -->
        </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import moment from 'moment'
import { Checkbox, Row, Col, Image } from "vant";
export default defineComponent({
    name: 'ActivityItem',
    props: {
        Obj: Object,
    },
    components: {
        Checkbox
    },
    setup(props,context) {
        const dataObj = reactive(toRefs(props).Obj);
        const onSelectedItem = () => {
            dataObj.value.checked = !dataObj.value.checked;
            context.emit("selectTarget", dataObj);
        }
        return {
            dataObj,
            onSelectedItem
        };
    },
})
</script>
<style lang="scss" scoped>
    .market-item {
        background: white;
        // margin-top: 12px;
        .market-item-title {
            padding: 10px 0;
            margin: 0 15px;
            color: #000;
            border-bottom: 1px solid #eaeaea;
            .icon-xuanzhong {
                color: #42a3f1;
            }
            span {
                font-size: 13px;
            }
        }
        .row {
            padding: 0 15px;
            .col {
                line-height: 25px;
                padding: 10px 0;
            }
        }
        .market-item-static {
            line-height: 20px;
            padding: 10px 15px;
            text-align: right;
            color: #000;
            background: #fafafa;
        }
    }
</style>
