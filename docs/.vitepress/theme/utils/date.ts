import { format as fnsFormat, getTime, parse } from "date-fns";

export function formatDate(dateStr?: string | null, formatStr = "yyyy年MM月dd日", fromDateFormatter = "yyyyMMdd") {
  return dateStr ? fnsFormat(parse(dateStr, fromDateFormatter, new Date()), formatStr) : "";
}

export function formatTimestamp(time?: string, formatStr = "yyyy-MM-dd HH:mm:ss") {
  if (time) {
    // 返回格式化时间戳
    const parseTime = parse(time, formatStr, new Date());
    const timestamp = getTime(parseTime) / 1000;
    return timestamp;
  } else {
    // 返回当前时间戳
    return getTime(new Date()) / 1000;
  }
}

export function formatHistoryTime(time: string, formatStr = "yyyy-MM-dd HH:mm:ss") {
  const parseTime = parse(time, formatStr, new Date());
  const timestamp = getTime(parseTime) / 1000;
  function autoZero(num: number) {
    return (String(num).length === 1 ? "0" : "") + num;
  }

  const curTimestamp = getTime(new Date()) / 1000; // 当前时间戳
  const timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  const curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
  const tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

  const Y = tmDate.getFullYear();
  const m = tmDate.getMonth() + 1;
  const d = tmDate.getDate();
  const H = tmDate.getHours();
  const i = tmDate.getMinutes();
  if (timestampDiff < 0) return time;

  if (timestampDiff < 60) {
    // 过去一分钟以内
    return "刚刚";
  } else if (timestampDiff < 3600) {
    // 过去一小时前之内
    return `${Math.floor(timestampDiff / 60)}分钟前`;
  } else if (curDate.getFullYear() === Y && curDate.getMonth() + 1 === m && curDate.getDate() === d) {
    return `今天${autoZero(H)}:${autoZero(i)}`;
  } else {
    const newDate = new Date((curTimestamp - 86400) * 1000); // 昨天的时间戳转换成的日期对象
    if (newDate.getFullYear() === Y && newDate.getMonth() + 1 === m && newDate.getDate() === d)
      return `昨天${autoZero(H)}:${autoZero(i)}`;
    else if (curDate.getFullYear() === Y) return `${autoZero(m)}月${autoZero(d)}日 ${autoZero(H)}:${autoZero(i)}`;
    else return `${Y}年${autoZero(m)}月${autoZero(d)}日 ${autoZero(H)}:${autoZero(i)}`;
  }
}
