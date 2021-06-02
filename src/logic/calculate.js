const calculate = (data, buttonName) => {
  let { total, next } = data;
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }
  return { total, next };
};

export default calculate;
