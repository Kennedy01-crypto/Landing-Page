//DOM elements 
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Set Am or PM
const showAMPM = true;

//function to show time
function showTime(){
    let today = new Date(),
        hour =today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM or PM
    //assign AM / PM to a varible depending on a condition
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //Twelve hour Format
    hour = hour % 12 || 12;

    //output the time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

    //call every second
    setTimeout(showTime, 1000);
}
//add zero
function addZero(n){
    return(parseInt(n, 10) < 10 ? '0' : '') +n;
}

//set background and greeting
function setBgGreet(){
    let today = new Date(),
      hour = today.getHours();

    if(hour <12){
        //morning
        //change greeting and background image
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';

    }else if(hour < 18){
        //afternoon
        //change image and greeting
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';

    }else{
        //evening
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'fff';

    }
}
//Get name 
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else {
        name.textContent =localStorage.getItem('name');
    }
}
//set name
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent =localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
setFocus();
setName();
