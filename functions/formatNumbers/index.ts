function formatNumbers(value: number) {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;

  return {hours: hours, minutes: minutes, seconds: seconds}
}

export default formatNumbers;