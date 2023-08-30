
let t = JSON.parse(localStorage.getItem('time')) ||
{
  time1: 0,
  time2: 0,
  time3: 0,
  time4: 0
};

console.log(t);

let time = `${t.time4} ${t.time3} : ${t.time2} ${t.time1}`;


let timeMinutes = `${t.time2} ${t.time1}`;

let timeHours = `${t.time3} ${t.time4}`;

const timerElement = document.querySelector('.js-timer');

const startButtonElement = document.querySelector('.js-start-button');

const stopButtonElement = document.querySelector('.js-stop-button');

startButtonElement.addEventListener('click', () => {
  return reset();
})

timerElement.innerHTML = time;

let intervalId;



startTimer(); 


function startTimer() {

  setInterval(()=> {

if(time === '2 3 : 5 9') {

  reset();
} else if (time === '0 9 : 5 9' || time === '1 9 : 5 9') {
    t.time4++;
    t.time1 = 0;
    t.time2 = 0;
    t.time3 = 0;
} else if (timeMinutes === '5 9'){
    console.log('asdadasd');
    t.time3++
    t.time2 = 0;
    t.time1 = 0;
} else if (t.time1 === 9) {
    t.time1 = 0;
    t.time2++;
} else {
    t.time1++;
}
console.log(t);

time = `${t.time4} ${t.time3} : ${t.time2} ${t.time1}`;
timeMinutes = `${t.time2} ${t.time1}`;
timeHours = `${t.time3} ${t.time4}`;


timerElement.innerHTML = 
`${t.time4} ${t.time3} : ${t.time2} ${t.time1}`;

console.log(localStorage.setItem('time', JSON.stringify(t)));

return localStorage.setItem('time', JSON.stringify(t));



// Glöm inte att du INTE kan köra variabeln direkt när du ska generera string på sidan.
// Du behöver skriva ut exakt string som ska visas på sidan här!



},1000);
}




function reset() {
 t.time1 = 0;
 t.time2 = 0;
 t.time3 = 0;
 t.time4 = 0;

 timerElement.innerHTML = 
`${t.time4} ${t.time3} : ${t.time2} ${t.time1}`;

}