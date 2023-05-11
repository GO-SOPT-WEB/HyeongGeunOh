export const getMonthDate = () => {
  const getDate = new Date();
  const nowMonth = getDate.getMonth() < 10 ? "0" + (getDate.getMonth() + 1) : getDate.getMonth() + 1;
  const nowDate = getDate.getDate() < 10 ? "0" + getDate.getDate() : getDate.getDate();
  return `${nowMonth}-${nowDate}`;
};
