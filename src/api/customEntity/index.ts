export type DataObj = {
  [propname: string]: any;
};
export type HalfYearIncomeObj = {
  income: string | number;
  incomeDate: string;
};
export type FinanceStatisticsObj = {
  income: number;
  incomeLevel: number;
  incomeType: string;
  ratio: number;
};
/**省P身份证信息 */
export type PartyCertObj = {
  certAddress: string | null;
  certNo: string | null;
  certType: string | null;
  certTypeCode: string | null;
  companyUser: string | null;
  economicType: string | null;
  economicTypeCode: string | null;
  email: string | null;
  employeeNum: string | null;
  industryType: string | null;
  industryTypeCode: string | null;
  licenceOffice: string | null;
  manageStatus: string | null | number;
  operatePeriod: string | null;
  operateRange: string | null;
  orgType: string | null;
  permitDate: string | null;
  phone: string | null;
  pid: string | null;
  productAddress: string | null;
  registerAddress: string | null;
  registerArea: string | null;
  registerCapital: string | null;
  validity: string | null;
  webSite: string | null;
};
