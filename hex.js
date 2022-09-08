const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
return Math.floor(Math.random() * hex.length);
}
//Tabs Active Selector Project
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

//Countdown Timer Project
const countDownDate = new Date("Jan 6, 2023 10:00:00").getTime();
let x = setInterval( function(){
    let timeNow = new Date().getTime();

    let difference = countDownDate - timeNow;

    // Time Calculations for days, hours, mins, seconds
    let days = Math.floor(difference / (1000 * 60 * 60 *24));
    let hours = Math.floor((difference % (1000 *60 *60 *24)) / (10000 * 60 * 60));
    let mins = Math.floor((difference  % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((difference % (1000 * 60)) / 1000);

    //Display the results!
    document.getElementById("countdown-timer")
    .innerHTML =
    '<div>' + days + '<span> Days</span></div>' +
    '<div>' + hours + '<span> Hours</span></div>' +
    '<div>' + mins + '<span> Minutes</span></div>' +
    '<div>' + secs + '<span> Seconds</span></div>';

 
})
