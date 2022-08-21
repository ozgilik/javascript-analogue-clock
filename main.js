const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const transitionTxt = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    animateHand(seconds, secondHand, secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    animateHand(mins, minsHand, minsDegrees);

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    animateHand(hour, hourHand, hourDegrees);
}

function animateHand(time, hand, degree) {
    // @fix remove transition @ time = 0 before degree resets from 450 to 90
    if (time === 0) {
        hand.style.transition = 'none';
    } else {
        hand.style.transition = transitionTxt;
    }
    hand.style.transform = `rotate(${degree}deg)`;
}

setInterval(setDate, 1000);

setDate();