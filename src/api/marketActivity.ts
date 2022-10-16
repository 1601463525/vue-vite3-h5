import { ParamsObj } from './params';
import request from '@/utils/request';

// 获取商品分类
export function getCateList() {
  return request({
    url: '/mock-api/category/list',
    method: 'get',
  });
}
/**
 * 查询列表
 */
export const queryActivityList = (data: ParamsObj) => {
  return request({
    url: '/css-ability-activity/activity/queryActivityList',
    data,
    method: 'post',
  });
};
/**
 *  客户走访列表
 */
export const getCustVisitList = (data: ParamsObj) => {
  return request({
    url: '/visit/getSignVisitList',
    data,
    method: 'post',
  });
};
/**
 *  查询活动详情数据
 */
export const queryActivityRelatedInfo = (params: ParamsObj) => {
  //debugger
  return request({
    url: '/css-ability-activity/activity/queryActivityRelatedInfo',
    params,
    method: 'get',
  });
};

/**
 *  客户列表
 */
export const queryCust = (data: ParamsObj) => {
  return request({
    url: '/visit/queryCust',
    data,
    method: 'post',
  });
};

/**
 *  走访详情
 */
export const getSignVisitInfo = (data: ParamsObj) => {
  return request({
    url: '/visit/getSignVisitInfo',
    data,
    method: 'post',
  });
};

/**
 *  走访保存
 */
export const saveVisit = (data: ParamsObj) => {
  return request({
    url: '/visit/addVisit',
    data,
    method: 'post',
  });
};

/**
 *  商机查询
 */
export const qrySaleOppList = (data: ParamsObj) => {
  return request({
    url: '/saleOpp/qrySaleOppList',
    data,
    method: 'post',
  });
};
/**
 *  查数据字典
 */
export const getDict = (params: any) => {
  return request({
    url: '/dict/dicts',
    params,
    method: 'get',
  });
};

/**
 *  查数据字典
 */
export const getOrganTree = (params: any) => {
  return request({
    url: '/organ/tree',
    params,
    method: 'get',
  });
};

/**
 *  根据手机号获取用户信息
 */
export const queryUserInfo = (data: ParamsObj) => {
  return request({
    url: '/visit/queryUserInfo',
    data,
    method: 'post',
  });
};

/**
 *  新版本客户信息列表
 */
export const queryCustListInfos = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustListInfos',
    data,
    method: 'post',
  });
};

/**
 *  收藏
 */
export const custFocusAndTop = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/custFocusAndTop',
    data,
    method: 'post',
  });
};

/**
 *  客户详情
 */
export const queryCustBasicInfo = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustBasicInfo',
    data,
    method: 'post',
  });
};

/**
 *  产品汇总
 */
export const queryCustServInfo = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustServInfo',
    data,
    method: 'post',
  });
};

/**
 *  产品详情
 */
export const queryProdDetail = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryProdDetail',
    data,
    method: 'post',
  });
};

/**
 *  电路数据详情
 */
export const queryProdDlDetailData = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryProdDlDetail',
    data,
    method: 'post',
  });
};

/**
 *  合同数据
 */
export const queryCustContractInfo = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustContractInfo',
    data,
    method: 'post',
  });
};

/**
 *  OCR识别数据
 */
export const picIdentifyWithOCR = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/picIdentifyWithOCRByUrl',
    data,
    method: 'post',
  });
};

/**
 *  商机数据
 */
export const queryCustOppInfo = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustOppInfo',
    data,
    method: 'post',
  });
};

/**
 *  查询走访列表
 */
export const queryVisitList = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/queryVisitList',
    data,
    method: 'post',
  });
};

/**
 *  签到
 * visitType签到方式，1为开始签到，2为结束签到
 */
export const visitSign = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/visitSign',
    data,
    method: 'post',
  });
};

/**
 *  获取签到数据的下拉数据
 *
 */
export const getVisitConfigInfo = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/getVisitConfigInfo',
    data,
    method: 'post',
  });
};

/**
 *  查询走访详情数据
 *
 */
export const queryVisitInfoById = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/queryVisitInfoById',
    data,
    method: 'post',
  });
};

/**
 *  更新走访记录
 */
export const updateVisitInfo = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/updateVisitInfo',
    data,
    method: 'post',
  });
};

/**
 *  查询用户坐标
 */
export const getCustLocation = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/getCustLocation',
    data,
    method: 'post',
  });
};

/**
 *  添加用户坐标
 */
export const addCustLocation = (data: ParamsObj) => {
  return request({
    url: '/css-ability-visit/visit/addCustLocation',
    data,
    method: 'post',
  });
};

/**
 *  欠费提醒 -- 客户级
 */
export const queryCustOwelistPage = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryCustOwelistPage',
    data,
    method: 'post',
  });
};

/**
 *  欠费提醒 -- 清单级
 */
export const queryServOwelistPage = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryServOwelistPage',
    data,
    method: 'post',
  });
};

/**
 *  到期业务提醒 -- 客户级
 */
export const queryDueBusiCustlistPage = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryDueBusiCustlistPage',
    data,
    method: 'post',
  });
};

/**
 *  到期业务提醒 -- 清单级
 */
export const queryDueBusiServlistPage = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryDueBusiServlistPage',
    data,
    method: 'post',
  });
};

/**
 *  获取AccToken
 */
export const getAccessToken = (data: ParamsObj) => {
  return request({
    url: '/oauth2/inner/accesstoken',
    data,
    method: 'post',
  });
};

/**
 *  获取Code
 */
export const getAccessCode = (data: ParamsObj) => {
  return request({
    url: '/oauth2/code',
    data,
    method: 'post',
  });
};

/**
 *  获取Code
 */
export const custStatistic = (data: ParamsObj) => {
  return request({
    url: '/css-ability-report/visit/custStatistic',
    data,
    method: 'post',
  });
};

/**
 *  异网到期提醒
 */
export const queryOtherNetExpire = (data: ParamsObj) => {
  return request({
    url: '/css-service-visit/cust/queryOtherNetExpire',
    data,
    method: 'post',
  });
};
