const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // get random number betwenn 0 - 6 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
    
}