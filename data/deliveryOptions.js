import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js#/';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
  let today = dayjs();
  // const deliveryDays = today.add(
  //   deliveryOption.deliveryDays,
  //   'days'
  // );

  let deliveryDate;
  let nextDay = today;

  let daysLeft = deliveryOption.deliveryDays;
  while(daysLeft > 0) {
    nextDay = nextDay.add(1, 'day');
    if(nextDay.format('dddd') === 'Saturday' || nextDay.format('dddd') === 'Sunday') {
      continue;
    }
    else {
      deliveryDate = nextDay;
      daysLeft -= 1;
    }
  }
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );
  return dateString;
}

export function isValidDeliveryOption(deliveryOptionId) {
  let found = false;
  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId) {
      found = true;
    }
  });
  return found;
}