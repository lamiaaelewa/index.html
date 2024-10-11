
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");

};

//select landing page
let landingpage = document.querySelector(".landing");

//get array of images
let imagesArray = [ "01.jpg" , "02.jpg" , "03.jpg" ]



//change photo
setInterval(() => {
//get random number
let randomNumber = Math.floor(Math.random() * imagesArray.length);
//change backgroung once per 10 second
landingpage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber] +'")';

}, 10000);


