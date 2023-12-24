const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const hours_label = document.querySelector('.hours');
const minutes_label = document.querySelector('.minutes');
const seconds_label = document.querySelector('.seconds');
const date_label = document.querySelector('.date').firstChild;
const secondsContainer = document.querySelector('.secondsContainer');
const debug = document.querySelector('#test');
const noiseOverlay = document.querySelector('.noise');

function update_values() {
    const date = new Date();
    
    hours_label.textContent = checkTime(date.getHours());
    minutes_label.textContent = checkTime(date.getMinutes());
    seconds_label.textContent = checkTime(date.getSeconds());
    date_label.textContent = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

    setTimeout(update_values, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

update_values()

function livelyPropertyListener(name, val) {

    //debug.textContent += `, ${name}: ${val}`

    switch (name) {
        case "accentColor":
            hours_label.style.color = val;
            break;
        case "secondaryColor":
            seconds_label.style.textShadow = `2px 2px 1px ${val}`
            break;
        case "showSeconds":
            if (val == true)
                secondsContainer.style.display = "flex";
            else
                secondsContainer.style.display = "none";
            break;
        case "showNoise":
            if (val == true)
                noiseOverlay.style.display = "block";    
            else
                noiseOverlay.style.display = "none";
            break;
    }
}

function changeCSSStyle(selector, cssProp, cssVal) {

    for (i=0, len=document.styleSheets[ssMain][cssRules].length; i<len; i++) {
  
      if (document.styleSheets[ssMain][cssRules][i].selectorText === selector) {
        document.styleSheets[ssMain][cssRules][i].style[cssProp] = cssVal;
        return;
      }
    }
  }