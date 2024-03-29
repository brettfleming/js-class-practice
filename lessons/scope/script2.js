// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 5);
const name = 'Nala';

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  } else if (random === 3) {
    return '5K';
  } else if (random === 4) {
    return 'Spartan Race';
  }

};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = ''

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  } else if (event === '5K') {
    days = 30;
  } else if (event === 'Spartan Race') {
    days = 300;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime =  (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);