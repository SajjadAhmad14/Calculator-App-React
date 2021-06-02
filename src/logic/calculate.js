const calculate = (data, buttonName) => {
  if (buttonName == '+/-') {
    data.total = data.total * -1
    data.next = data.next * -1
  }
  return data;
};

export default calculate;
