function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  if(dayOfWeek === 'Saturday' || date.dayOfWeek === 'Sunday') {
    console.log('IS A WEEKEND!');
    return;
  }
  console.log('NOT A WEEKEnd');
}
export default isWeekend;