<template>
    <div class="activity-item" @click="goToPage()">
        <div class="image">
            <img
                width="50"
                height="50"
                src="../../../assets/activity/building.png"
            />
        </div>
        <div class="acitivity-content">
            <div class="acitivity-name">
                {{ dataObj.activityName }}
            </div>
            <div class="acitivity-time">
                {{ countAddFive }}
            </div>
        </div>
        <div class="activity-status" :class="{ 'processing': dataObj.status === '0', 'activated': dataObj.status === '1', 'over': dataObj.status === '2',  'draft' : dataObj.status === '3' }">
            {{ dataObj.status === '0' ? '草稿' :
               dataObj.status === '1' ? '待启动' :
               dataObj.status === '2' ? '进行中' :
               dataObj.status === '3' ? '已结束' : ''}}
        </div>
        <div class="activity-ion">
            <Icon name="arrow" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import moment from 'moment'
import { Icon, Toast, Col } from "vant";
import { queryActivityRelatedInfo } from '@/api/marketActivity';
import { rootStore }  from '@/store/pinia';
export default defineComponent({
    name: 'ActivityItem',
    props: {
        Obj: Object,
    },
    components: {
        Icon
    },
    setup(props) {
        const dataObj = reactive(toRefs(props).Obj) as any;
        const { push } = useRouter();
        const goToPage = () => {
            if (dataObj.value.status === '1' || dataObj.value.status === '2' || dataObj.value.status === '3') {
                push({
                    name: 'marketActivityDetail',
                    query: {
                        activityId: dataObj.value.activityId,
                        activityName: dataObj.value.activityName,
                        status: dataObj.value.status
                    }
                })
            } else if (dataObj.value.status === '0') {
                let param = {
                    activityId: dataObj.value.activityId
                };
                queryActivityRelatedInfo(param).then((res:any) => {
                    if(res.data.success) {
                        rootStore().changeActivityDetail(res.data.payload);
                        push({
                            name: 'editMarketActivity',
                            query: {
                                activityId: dataObj.value.activityId,
                                activityName: dataObj.value.activityName,
                            }
                        });
                    }
                }).finally(() =>{
                    Toast.clear();
                })
            }
        }
        const countAddFive = computed(() => {  
            let estStartDate = dataObj.value.estStartDate;
            let estEndDate = dataObj.value.estEndDate;
            let dateText = '';
            if(estStartDate && estEndDate) {
                dateText = estStartDate.split(" ")[0] + '~' + estEndDate.split(" ")[0];
            } else {
                dateText = '-- -- ~ --  --'
            }
            return dateText;
        })
        return {
            dataObj,
            goToPage,
            countAddFive
        };
    },
})
</script>
<style lang="scss" scoped>
    .activity-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        padding: 10px;
        border-bottom: 1px solid #eaeaea;
        .image {
            img {
                width: 50px;
                height: 50px;
                border-radius: 10px;
                padding: 5px;
            }
        }
        .acitivity-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 10px;
            .acitivity-name {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 5px;
                font-family: PingFangSC-Regular, sans-serif;
            }
            .acitivity-time {
                font-size: 12px;
                font-weight: 400;
                font-family: PingFangSC-Regular, sans-serif;
                color: #666666;
            }
        }
        .activity-status {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 30px;
            border-radius: 15px;
            color: #fff;
        }
        .activity-ion {
            margin-left: 10px;
        }
        .processing {
            background: #B0B0B0;
        }
        .activated {
            background: #FAC14D
        }
        .over {
            background: #FA5E4D;
        }
        .draft {
            background: #B0B0B0;
        }
    }
</style>
