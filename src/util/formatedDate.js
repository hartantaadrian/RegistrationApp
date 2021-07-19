function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours().toString(),
    minute = d.getMinutes().toString(),
    second = d.getSeconds().toString();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  let dateF = year + month + day;
  let time = hour + minute + second;
  console.log(hour);
  console.log(minute);
  console.log(second);
  return {
    dateF,
    time,
  };
}

export default formatDate;
