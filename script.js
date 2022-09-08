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





/*Saving all of this code for a later date to comeback and try to make it functional with my original plan by already having the classes in HTML and still return the correct values from JS/*

/*
const daysValue = document.querySelector(#days);
const hoursValue = document.querySelector(#hours);
const minsValue = document.querySelector(#mins);
const secsValue = document.querySelector(#secs);
const countDownDateTime = new Date(2023,1,6,9,0,0).getTime();
*/