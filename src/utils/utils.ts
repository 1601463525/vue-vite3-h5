/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return JSON.parse(window.localStorage.getItem('userParam') as any);
};
