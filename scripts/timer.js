
const timeBook = 
{
  seconds: '0',
  minutes: '0',
  hours: '0'
};


let time1 = 0;
let time2 = 0;
let time3 = 0;
let time4 = 0;

let time = JSON.parse(localStorage.getItem('time')) || `${time4} ${time3} : ${time2} ${time1}`;

console.log(time);

let timeMinutes = `${time2} ${time1}`;

let timeHours = `${time3} ${time4}`;

const timerElement = document.querySelector('.js-timer');

timerElement.innerHTML = time;

let intervalId;

function startTimer() {
  console.log(time)
  setInterval(()=> {
if(time === '2 3 : 5 9') {
  reset();
} else if (time === '0 9 : 5 9' || time === '1 9 : 5 9') {
    time4++;
    time1 = 0;
    time2 = 0;
    time3 = 0;
    timeBook.seconds++;
} else if (timeMinutes === '5 9'){
    console.log('asdadasd');
    time3++
    time2 = 0;
    time1 = 0;
} else if (time1 === 9) {
    time1 = 0;
    time2++;
} else {
    time1++;
}

console.log(time1);
console.log(time);  

time = `${time4} ${time3} : ${time2} ${time1}`;
timeMinutes = `${time2} ${time1}`;
timeHours = `${time3} ${time4}`;

localStorage.setItem('time', JSON.stringify(time));

timerElement.innerHTML = 
`${time4} ${time3} : ${time2} ${time1}`;

// Glöm inte att du INTE kan köra variabeln direkt när du ska generera string på sidan.
// Du behöver skriva ut exakt string som ska visas på sidan här!



},1000);
}




function reset() {
 time1 = 0;
 time2 = 0;
 time3 = 0;
 time4 = 0;
}