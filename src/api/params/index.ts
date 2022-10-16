export interface ParamsObj {
  [propname: string | number]: any;
}
export interface LoginParamInterface {
  userName: string;
  passWord: string;
}
/**响应类型 */
export interface ResponseData {
  [x: string]: any;
  success: any;
  code: string | number;
  body?: any;
  head: any;
  msg: string;
  data: any;
  detailMsg: string;
  retCode: string | number;
  retMessage: string;
  total: number;
  payload: any;
}
/**响应类型 */
export interface ResponseFormData {
  data: [];
  detailMsg: string;
  retCode: string | number;
  retMessage: string;
  total: number;
  success: boolean;
}
