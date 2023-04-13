function getTimeStamp(): string {
  let timeStamp = new Date(Date.now());
  let hours = timeStamp.getHours();
  let minutes = timeStamp.getMinutes();
  let seconds = timeStamp.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

export { getTimeStamp };
