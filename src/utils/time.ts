export function getTime(): string {
  let message = "";
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 9) {
    message = "早上好";
  } else if (hour >= 9 && hour < 13) {
    message = "中午好";
  } else if (hour >= 13 && hour < 18) {
    message = "下午好";
  } else {
    message = "晚上好";
  }
  return message;
}
